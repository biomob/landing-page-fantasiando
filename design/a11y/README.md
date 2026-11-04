# Auditoria de acessibilidade (WCAG 2.1 AA)

`node design/a11y/audit.mjs [url]` (padrão `http://localhost:3200`, rode `pnpm build && pnpm start -p 3200` antes).

Percorre 9 rotas × tema claro/escuro × 1440 px/390 px no Chrome e verifica:

| Critério | O que mede |
| --- | --- |
| 1.4.3 Contraste | Cada texto visível contra o fundo efetivo (composição das cores dos ancestrais): 4,5:1, ou 3:1 para texto grande |
| 1.4.11 Contraste não textual | Borda de campos (busca, selects) ≥ 3:1 |
| 2.5.8 Tamanho do alvo (AA) | Controles ≥ 24×24 px (checkbox/radio medidos pelo rótulo clicável) |
| 2.5.5 Tamanho do alvo (AAA) | Botões ≥ 44×44 px — informativo |
| 4.1.2 Nome, função, valor | Todo link, botão e campo com nome acessível |
| 1.1.1 Conteúdo não textual | Toda `<img>` com `alt` (vazio quando decorativa) |
| 1.3.1 Estrutura | Um `h1` visível, sem saltos de título, um `main`, navs rotulados |
| 3.1.1 Idioma | `lang` no `<html>` |
| Fonte mínima | Nenhum texto abaixo de 12 px (boa prática do projeto) |

Resultado mais recente: `reports/latest.txt` (sem violações AA; restam só recomendações AAA de 44 px).

Também conferidos manualmente: ordem de tabulação e anel de foco em todos os controles, reflow sem rolagem horizontal em 320 px, Esc fecha o menu, "Pular para o conteúdo", controles de tema e fonte da barra. Teste com leitor de tela (NVDA/VoiceOver) ainda recomendado.
