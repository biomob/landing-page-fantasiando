# Paridade visual do redesign

Compara as pranchetas aprovadas no canvas de design com o app Next, no mesmo Chrome.

1. `node design/visual-parity/redesign/tools/render-reference.mjs` — gera HTML estático das pranchetas (`reference-src/*.dc.html`) com as fontes e imagens do projeto e os mesmos produtos do mock.
2. Suba a referência e o app: `python -m http.server 4180` na raiz do repo e `pnpm build && pnpm start -p 3200`.
3. `node design/visual-parity/redesign/tools/capture.mjs` — captura referência e alvo (home 1440 e 390, coleção e produto 1440).
4. `python -I design/visual-parity/redesign/tools/score.py` — similaridade por faixas de 200px; passa com toda faixa ≥ 95% e altura igual (±2px).

Diferenças acordadas: campos sem dado real (prazo, ano) ficam ocultos; a barra de acessibilidade do canvas era um esboço (fora da comparação); em coleção e produto compara-se do conteúdo para baixo, porque o header dessas pranchetas era simplificado e o app usa o header único do site.

Último resultado em `reports/summary.txt`.
