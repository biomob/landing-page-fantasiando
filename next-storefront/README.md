# Fantasiando — storefront Next.js

## Rodar localmente

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Escopo atual

O frontend inclui home, catálogo, página de produto, seleção de tamanho,
carrinho, fluxo demonstrativo de prova virtual, contato, conta, tema escuro e
layout responsivo. Produtos, carrinho, formulário e prova virtual são estados
locais de demonstração; não há integração com catálogo, login, pagamento,
upload ou IA reais.

## Verificação

```bash
pnpm test
pnpm lint
pnpm build
```

As capturas de inspeção visual ficam em `.visual-parity/storefront/`. Elas são
evidência de revisão manual em desktop e mobile, não um
laudo de paridade formal com métrica percentual.
