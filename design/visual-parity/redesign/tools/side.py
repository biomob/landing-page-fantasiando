"""Monta referência | alvo lado a lado num trecho vertical. Uso: python -I side.py caso y0 y1 [escala]"""
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
name, y0, y1 = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
scale = float(sys.argv[4]) if len(sys.argv) > 4 else 0.5
ref = Image.open(ROOT / "reference" / f"{name}.png").convert("RGB")
tgt = Image.open(ROOT / "target" / f"{name}.png").convert("RGB")
w = max(ref.width, tgt.width)
out = Image.new("RGB", (w * 2 + 12, y1 - y0), (255, 0, 120))
out.paste(ref.crop((0, y0, ref.width, y1)), (0, 0))
out.paste(tgt.crop((0, y0, tgt.width, y1)), (w + 12, 0))
out = out.resize((int(out.width * scale), int(out.height * scale)))
(ROOT / "side").mkdir(exist_ok=True)
path = ROOT / "side" / f"{name}-{y0}-{y1}.png"
out.save(path)
print(path)
