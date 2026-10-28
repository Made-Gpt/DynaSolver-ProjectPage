"""Convert image_collect renders into web assets for the qualitative comparison.

Usage: python tools/build_compare.py SRC_DIR [OUT_DIR]

SRC_DIR is the image_collect folder. Each robot is a subdirectory with method
folders of frame_*.png plus a colorbars/ folder.
"""
import json
import shutil
import sys
from pathlib import Path

import numpy as np
from PIL import Image

METHODS = {
    "gt": "gt",
    "ours": "ours_slice16_w1122",
    "abupt": "abupt",
    "physgto": "physgto",
    "transolver": "transolver",
    "linearno": "linearno",
    "p3d": "p3d",
}
CASES = ["a1", "g1", "h1_2"]
QUALITY = 80


def frames_of(folder):
    return sorted(folder.glob("frame_*.png"))


def horizontal_colorbar(src, dest, bar_w=3200, bar_h=140, label_scale=3):
    """Turn a vertical colorbar PNG into a horizontal one.

    The gradient runs low to high from left to right. Tick glyphs are the
    original pixels, scaled up and kept upright so they stay readable.
    """
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    r = arr[:, :, 0].astype(np.int16)
    g = arr[:, :, 1].astype(np.int16)
    b = arr[:, :, 2].astype(np.int16)
    a = arr[:, :, 3].astype(np.int16)
    chroma = np.maximum(np.maximum(r, g), b) - np.minimum(np.minimum(r, g), b)
    color = (a > 20) & (chroma > 25)
    xs = np.where(color.sum(axis=0) > 50)[0]
    x0, x1 = int(xs[0]), int(xs[-1]) + 1
    ys = np.where(color[:, x0:x1].sum(axis=1) > 5)[0]
    y0, y1 = int(ys[0]), int(ys[-1]) + 1

    # Clockwise 90 degrees: the original top (high) lands on the right.
    bar = im.crop((x0, y0, x1, y1)).transpose(Image.ROTATE_270)
    bar = bar.resize((bar_w, bar_h), Image.Resampling.LANCZOS)

    ink = (a > 40) & (r < 160) & (g < 160) & (b < 160) & (chroma < 40)
    ink[y0:y1, x0:x1] = False
    # Tick dashes sit just to the right of the bar. Numbers follow them.
    tick_zone = ink.copy()
    tick_zone[:, : x1 + 4] = False
    tick_zone[:, x1 + 28 :] = False
    tick_rows = np.where(tick_zone.sum(axis=1) > 2)[0]
    bands = []
    if len(tick_rows):
        start = prev = int(tick_rows[0])
        for y in tick_rows[1:]:
            y = int(y)
            if y > prev + 3:
                bands.append((start, prev))
                start = y
            prev = y
        bands.append((start, prev))

    labels = []
    axis_box = None
    # Digits begin immediately after the bar; a wide gap then separates the vertical title.
    num_left = x1 + 8
    for y_a, y_b in bands:
        cy = (y_a + y_b) / 2
        pad = 18
        strip = im.crop((num_left, max(0, y_a - pad), im.width, min(im.height, y_b + pad + 1)))
        sarr = np.array(strip.convert("RGBA"))
        sr, sg, sb, sa = [sarr[:, :, i] for i in range(4)]
        mark = (sa > 20) & ~((sr > 245) & (sg > 245) & (sb > 245))
        col = np.where(mark.sum(axis=0) > 0)[0]
        if len(col) == 0:
            continue
        gaps = np.where(np.diff(col) > 10)[0]
        end = int(col[gaps[0]]) + 1 if len(gaps) else int(col[-1]) + 1
        sub = strip.crop((int(col[0]), 0, end, strip.height))
        sub_arr = np.array(sub)
        sm = (sub_arr[:, :, 3] > 20) & ~(
            (sub_arr[:, :, 0] > 245) & (sub_arr[:, :, 1] > 245) & (sub_arr[:, :, 2] > 245)
        )
        rows = np.where(sm.sum(axis=1) > 0)[0]
        cols = np.where(sm.sum(axis=0) > 0)[0]
        if len(rows) == 0:
            continue
        sub = sub.crop((int(cols[0]), int(rows[0]), int(cols[-1]) + 1, int(rows[-1]) + 1))
        sub = sub.resize((max(1, sub.width * label_scale), max(1, sub.height * label_scale)), Image.Resampling.NEAREST)
        frac = 1 - (cy - y0) / (y1 - y0)
        labels.append((frac, sub))
        if len(gaps):
            title_x0 = num_left + int(col[gaps[0] + 1])
            title_x1 = num_left + int(col[-1]) + 1
            axis_box = (title_x0, 0, title_x1, im.height) if axis_box is None else (
                min(axis_box[0], title_x0), 0,
                max(axis_box[2], title_x1), im.height,
            )

    axis = None
    if axis_box is not None:
        axis = im.crop(axis_box)
        tarr = np.array(axis)
        tm = ~((tarr[:, :, 0] > 245) & (tarr[:, :, 1] > 245) & (tarr[:, :, 2] > 245))
        tr = np.where(tm.sum(axis=1) > 0)[0]
        tc = np.where(tm.sum(axis=0) > 0)[0]
        if len(tr):
            axis = axis.crop((int(tc[0]), int(tr[0]), int(tc[-1]) + 1, int(tr[-1]) + 1))
            axis = axis.transpose(Image.ROTATE_270)
            axis = axis.resize((axis.width * label_scale, axis.height * label_scale), Image.Resampling.NEAREST)
        else:
            axis = None

    label_h = max((g.height for _, g in labels), default=0)
    axis_h = axis.height if axis is not None else 0
    gap = 10
    canvas_h = bar_h + gap + label_h + (gap + axis_h if axis_h else 0) + 8
    canvas = Image.new("RGBA", (bar_w, canvas_h), (255, 255, 255, 255))
    canvas.paste(bar, (0, 0), bar)
    for frac, glyph in labels:
        x = int(round(frac * (bar_w - 1) - glyph.width / 2))
        x = max(0, min(bar_w - glyph.width, x))
        canvas.paste(glyph, (x, bar_h + gap), glyph)
    if axis is not None:
        ax = max(0, (bar_w - axis.width) // 2)
        canvas.paste(axis, (ax, bar_h + gap + label_h + gap), axis)
    dest.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(dest, "PNG")


def to_webp(src, dest):
    with Image.open(src) as im:
        im = im.convert("RGB")
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "WEBP", quality=QUALITY, method=4)


def main():
    src = Path(sys.argv[1])
    out_root = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("static/demo/compare")
    if out_root.exists():
        shutil.rmtree(out_root)
    out_root.mkdir(parents=True)

    data = {"methods": list(METHODS), "cases": {}}
    for case in CASES:
        case_src = src / case
        counts = []
        for key, folder in METHODS.items():
            paths = frames_of(case_src / folder)
            if not paths:
                raise SystemExit(f"no frames in {case_src / folder}")
            for i, path in enumerate(paths):
                to_webp(path, out_root / case / key / f"{i:04d}.webp")
            counts.append(len(paths))
        if len(set(counts)) != 1:
            raise SystemExit(f"{case} methods have different frame counts: {counts}")

        bar_dir = out_root / case / "colorbars"
        bar_dir.mkdir(parents=True, exist_ok=True)
        for name in ("gt_colorbar.png", "velocity_error_colorbar.png"):
            shutil.copy2(case_src / "colorbars" / name, bar_dir / name)
            horizontal_colorbar(bar_dir / name, bar_dir / name.replace(".png", "_h.png"))

        with Image.open(out_root / case / "gt" / "0000.webp") as im:
            aspect = round(im.size[0] / im.size[1], 4)
        data["cases"][case] = {
            "frames": counts[0],
            "aspect": aspect,
            "fieldBar": f"compare/{case}/colorbars/gt_colorbar_h.png",
            "errorBar": f"compare/{case}/colorbars/velocity_error_colorbar_h.png",
        }
        print(case, counts[0], aspect, flush=True)

    (out_root / "compare_data.json").write_text(json.dumps(data, indent=1), encoding="utf-8")


if __name__ == "__main__":
    main()
