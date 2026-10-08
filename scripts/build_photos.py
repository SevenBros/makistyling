"""Rebuild public/photos and data/photos.json from the original product photos.

Usage:  python3 scripts/build_photos.py "<path to iCloud AI/makihairmake.com/photos/product>"
Files are shown in file-name order.
"""
import json, os, shutil, sys
from PIL import Image, ImageOps

SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser(
    "~/Library/Mobile Documents/com~apple~CloudDocs/AI/makihairmake.com/photos/product")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "photos")
EXT = (".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff")

shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(OUT)
items = []
for i, f in enumerate(sorted(x for x in os.listdir(SRC) if x.lower().endswith(EXT)), 1):
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, f)))
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA"); bg = Image.new("RGB", im.size, "white"); bg.paste(im, mask=im.split()[-1]); im = bg
    else:
        im = im.convert("RGB")
    name = f"work-{i:03d}"
    big = im.copy(); big.thumbnail((1800, 1800), Image.LANCZOS)
    big.save(os.path.join(OUT, name + ".jpg"), quality=82, optimize=True, progressive=True)
    small = im.copy(); small.thumbnail((800, 800), Image.LANCZOS)
    small.save(os.path.join(OUT, name + "-s.jpg"), quality=78, optimize=True, progressive=True)
    items.append({"src": f"/photos/{name}.jpg", "thumb": f"/photos/{name}-s.jpg", "w": big.width, "h": big.height})

with open(os.path.join(ROOT, "data", "photos.json"), "w") as fh:
    json.dump(items, fh, indent=1)
print(len(items), "photos")
