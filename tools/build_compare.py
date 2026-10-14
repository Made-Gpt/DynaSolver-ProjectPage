"""Convert paper_vis renders into web assets for the qualitative comparison widget.

Usage: python3 tools/build_compare.py SRC_DIR [OUT_DIR]
"""
import json
import sys
from multiprocessing import Pool
from pathlib import Path

from PIL import Image

CASES = [
    "a1_u2_yaw_p0", "a1_u2_yaw_m20",
    "g1_u2_yaw_p0", "g1_u2_yaw_m20",
    "h1_2_u2_yaw_p0", "h1_2_u2_yaw_m20",
]
QUANTITIES = ["velocity", "pressure"]
METHODS = {
    "gt": "gt",
    "ours": "ours_slice16_w1122",
    "abupt": "abupt",
    "physgto": "physgto",
    "transolver": "transolver",
    "linearno": "linearno",
    "p3d": "p3d",
}
LONG_SIDE = 640
PAD = 24
QUALITY = 80


def frame_paths(src, case, quantity, method_dir):
    return sorted((src / case / quantity / method_dir).glob("frame*.png"))


def alpha_bbox(path):
    with Image.open(path) as im:
        return im.getchannel("A").getbbox()


def convert(job):
    path, box, size, out = job
    with Image.open(path) as im:
        im = im.convert("RGBA").crop(box)
        bg = Image.new("RGB", im.size, "white")
        bg.paste(im, mask=im.getchannel("A"))
        bg = bg.resize(size, Image.LANCZOS)
    out.parent.mkdir(parents=True, exist_ok=True)
    bg.save(out, "WEBP", quality=QUALITY, method=6)


def main():
    src = Path(sys.argv[1])
    out_root = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("static/demo/compare")
    data = {"methods": list(METHODS), "quantities": QUANTITIES, "cases": {}}

    with Pool() as pool:
        for case in CASES:
            paths = {
                (m, q): frame_paths(src, case, q, d)
                for m, d in METHODS.items() for q in QUANTITIES
            }
            boxes = [b for b in pool.map(alpha_bbox, [p for ps in paths.values() for p in ps]) if b]
            x0 = max(min(b[0] for b in boxes) - PAD, 0)
            y0 = max(min(b[1] for b in boxes) - PAD, 0)
            x1 = max(b[2] for b in boxes) + PAD
            y1 = max(b[3] for b in boxes) + PAD
            w, h = x1 - x0, y1 - y0
            scale = LONG_SIDE / max(w, h)
            size = (round(w * scale), round(h * scale))

            jobs = []
            for (m, q), ps in paths.items():
                for i, p in enumerate(ps):
                    jobs.append((p, (x0, y0, x1, y1), size, out_root / case / m / q / f"{i:04d}.webp"))
            pool.map(convert, jobs, chunksize=4)

            gt_clim = json.loads((src / "gt_clims" / f"{case}.json").read_text())
            err_clim = json.loads((src / "clims" / f"{case}.json").read_text())
            n_frames = len(paths[("gt", "velocity")])
            data["cases"][case] = {
                "u_ref": err_clim.get("u_ref"),
                "frames": n_frames,
                "aspect": round(size[0] / size[1], 4),
                "clim": {
                    "velocity": gt_clim["velocity"],
                    "pressure": gt_clim["pressure"],
                    "velocity_error": err_clim["velocity_error"],
                    "pressure_error": err_clim["pressure_error"],
                },
            }
            print(case, size, n_frames, flush=True)

    (out_root / "compare_data.json").write_text(json.dumps(data, indent=1))


if __name__ == "__main__":
    main()
