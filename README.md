# Annapê Ateliê — vitrine Next.js

Vitrine de apresentação dos produtos: home, coleção com filtros, página de
produto, prova virtual (demonstração), sobre e contato. Não há carrinho nem
pagamento — o interesse em cada peça é encaminhado para o WhatsApp do ateliê.

## Estrutura

| Pasta | Conteúdo |
| --- | --- |
| `app/` | Rotas. Cada página só busca dados e compõe componentes. `globals.css` guarda tokens e reset. |
| `components/ui/` | Primitivos sem regra de negócio: `Button`, `Section`, tipografia, texturas e `Scallop`, `BannerSlot`, `Skeleton`, `EmptyState`, `Icon`. |
| `components/layout/` | Faixa promocional, header de loja (busca, categorias, favoritos), rodapé e barra de atalhos do celular. |
| `components/accessibility/` | Barra de acessibilidade (VLibras, tema, tamanho da fonte). |
| `components/<domínio>/` | Blocos por tela: `catalog`, `home`, `try-on`, `about`, `contact`. |
| `hooks/` | Estado de cliente: `useCatalogFilters`, `useHashList`, `useFavorites`, `useDisclosure`, `useSizeSelection`, `useTryOnFlow`, `useTheme`, `useFontSize`. |
| `content/` | Textos e links fixos (`site.ts`, `pages.ts`) e espaços de banner (`banners.ts`). |
| `lib/` | Catálogo (`lib/catalog`), formatação, WhatsApp e variáveis de ambiente. |

Convenções:

- Cada componente tem seu `*.module.css` ao lado; não há classes globais além do reset.
- Os primitivos de `components/ui` (botão, tipografia, seção, texturas) ficam em `@layer primitives`: uma classe passada via `className` sempre os sobrescreve, sem depender da ordem do CSS no bundle.
- Componentes de cliente (`"use client"`) só onde há interação; a lógica de estado fica nos hooks.
- Sem barrel files: importe direto do arquivo.

Arquivo de design (fora do build, lint e testes):

- `design/prototipo-html/`: protótipo HTML exportado do design system, com o export original em `reference/`. Só referência visual.
- `design/legacy-next/`: implementação Next anterior, arquivada.
- `design/visual-parity/`: capturas de comparação visual.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Ambientes

| Arquivo            | Quando carrega              | Catálogo |
| ------------------ | --------------------------- | -------- |
| `.env.development` | `pnpm dev`                  | `mock`   |
| `.env.production`  | `pnpm build` / `pnpm start` | `mock`   |
| `.env.local`       | sempre (não versionado)     | override |

Variáveis definidas no provedor de hospedagem têm prioridade sobre os arquivos.
Os arquivos versionados só têm valores públicos; veja `.env.example`.

| Variável                      | Uso |
| ----------------------------- | --- |
| `CATALOG_SOURCE`              | `mock` (padrão) ou `api` |
| `CATALOG_API_URL`             | URL da API pública, ex. `https://api.exemplo/api/v1` (obrigatória com `api`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número do ateliê com DDI e DDD, só dígitos |
| `NEXT_PUBLIC_SITE_URL`        | URL pública, usada no link do produto enviado no WhatsApp |

`NEXT_PUBLIC_*` é embutido no bundle durante o build: trocar o número exige novo build.

## Catálogo

As telas só usam `lib/catalog` (`getProducts`, `getProduct`, `getCategories`).
A origem é escolhida por `CATALOG_SOURCE`:

- **mock** — `lib/catalog/mock-data.ts`. Para trocar um produto, edite a
  entrada correspondente (imagens em `public/assets`).
- **api** — `lib/catalog/api-source.ts` consome `GET /catalog/products`,
  `/catalog/products/:slug` e `/catalog/categories` do `fantasiando-backend` e
  converte para o mesmo modelo (`lib/catalog/types.ts`).

Com `api`, o build precisa alcançar a API para pré-renderizar as páginas de produto.

## Banners

Os espaços B1–B6 ficam em `content/banners.ts`. Para publicar uma arte, preencha `image` com as versões desktop e mobile (arquivos em `public/assets/banners/`). Enquanto `image` for `null`, aparece o marcador com as medidas. As medidas completas estão no canvas de design (prancheta "Guia de banners").

## Verificação

```bash
pnpm test
pnpm lint
pnpm build
```

Paridade visual com o design aprovado: veja `design/visual-parity/redesign/README.md`.
