# Annapê Ateliê — loja em HTML

Esta é a versão HTML interativa da loja Annapê Ateliê. Abra `index.html` por um servidor local. As telas de home, categoria, produto, prova virtual, contato e conta ficam em `ui_kits/website/`. Os cartões HTML de componentes, diretrizes e template também fazem parte do projeto.

## Prévia local

Na raiz do projeto:

```powershell
python -m http.server 4173
```

Depois acesse `http://localhost:4173/`. `ui_kits/website/index.html` também abre a loja diretamente.

## Organização

- `assets/`: logos oficiais do ZIP Annapê, símbolo, novo mascote coração/sol, vestidos ilustrativos e banner;
- `ui_kits/website/`: telas e dados de demonstração;
- `components/`, `guidelines/`, `templates/`, `tokens/`: sistema visual do ZIP, com referências de imagem atualizadas;
- `reference/`: exportação HTML original e documentação anterior do design system;
- `legacy-next/`: código Next.js que estava na raiz antes desta versão, preservado para consulta.

O caramelo usa `#C38A67`, valor correspondente a RGB 195, 138, 103. O hexadecimal `#F598A4` informado junto ao caramelo é o rosa.

## Estado da demonstração

Este pacote é uma demonstração visual. Catálogo, valores, avaliações, carrinho, conta, créditos e prova virtual usam dados e fluxos simulados; não há integração com estoque, pagamento, autenticação ou geração de imagem. Os vestidos foram gerados por IA para direção visual e não são fotografias de peças reais. Confirme modelos, detalhes e preços antes de publicar como produtos à venda. O banner também é uma composição gerada por IA. Veja `assets/README.md` para a origem e os prompts.

As dependências de React e Babel do HTML são carregadas por CDN, então a prévia precisa de conexão à internet. A versão Next anterior continua íntegra em `legacy-next/` e pode ser executada separadamente com as instruções dela.
