"""Compara referência x alvo por faixas horizontais e gera diff.

Uso: python -I design/visual-parity/redesign/tools/score.py [filtro]
Similaridade = % de pixels cuja maior diferença de canal fica <= TOL (absorve antialias).
A faixa da barra de acessibilidade (40px do topo) fica fora: o canvas tinha só um esboço dela.
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
TOL = 40
BAND = 200
SKIP_TOP = 40
GATE = 95.0


def load(path):
    # Leve desfoque: compara forma e cor, não o antialias de cada glifo.
    return np.asarray(Image.open(path).convert("RGB").filter(ImageFilter.GaussianBlur(1)), dtype=np.int16)


def score(name):
    global SKIP_TOP
    ref, tgt = load(ROOT / "reference" / f"{name}.png"), load(ROOT / "target" / f"{name}.png")
    SKIP_TOP = 0 if name.startswith(("colecao", "produto")) else 40
    height = min(ref.shape[0], tgt.shape[0])
    width = min(ref.shape[1], tgt.shape[1])
    a, b = ref[SKIP_TOP:height, :width], tgt[SKIP_TOP:height, :width]
    ok = np.abs(a - b).max(axis=2) <= TOL
    bands = []
    for top in range(0, ok.shape[0], BAND):
        chunk = ok[top:top + BAND]
        bands.append({"y": top + SKIP_TOP, "similarity": round(float(chunk.mean()) * 100, 2)})
    diff = np.zeros((*ok.shape, 3), dtype=np.uint8)
    diff[~ok] = (230, 40, 90)
    diff[ok] = (np.asarray(Image.open(ROOT / "target" / f"{name}.png").convert("L"))[SKIP_TOP:height, :width][ok] // 3)[:, None]
    (ROOT / "diff").mkdir(exist_ok=True)
    Image.fromarray(diff).save(ROOT / "diff" / f"{name}.png")
    report = {
        "case": name,
        "overall": round(float(ok.mean()) * 100, 2),
        "worstBand": min(bands, key=lambda band: band["similarity"]),
        "heightRef": int(ref.shape[0]),
        "heightTarget": int(tgt.shape[0]),
        "bands": bands,
    }
    report["status"] = "PASS" if report["worstBand"]["similarity"] >= GATE and abs(report["heightRef"] - report["heightTarget"]) <= 2 else "FAIL"
    (ROOT / "reports").mkdir(exist_ok=True)
    (ROOT / "reports" / f"{name}.json").write_text(json.dumps(report, indent=2))
    return report


if __name__ == "__main__":
    flt = sys.argv[1] if len(sys.argv) > 1 else ""
    for png in sorted((ROOT / "reference").glob("*.png")):
        if flt in png.stem:
            r = score(png.stem)
            low = [b for b in r["bands"] if b["similarity"] < GATE]
            print(f"{r['case']:<14} {r['status']}  geral {r['overall']:6.2f}%  pior faixa {r['worstBand']['similarity']:6.2f}% @y={r['worstBand']['y']}  altura ref {r['heightRef']} / alvo {r['heightTarget']}  faixas<95: {[b['y'] for b in low][:12]}")
