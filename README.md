# DynaSolver Project Page

Academic project homepage for **DynaSolver**: a full-screen video hero, then Video, Abstract, Method, Dataset, Experiments and Citation sections in `index.html`.

The qualitative comparison frames in `static/demo/compare/` are generated from the collected renders:

```bash
python tools/build_compare.py path/to/image_collect static/demo/compare
```

## Local preview

```bash
cd /home/made/code/github/dynasolver
python3 -m http.server 8000
```

Open http://127.0.0.1:8000
