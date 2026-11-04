# Annapê Ateliê — vitrine Next.js

Vitrine de apresentação dos produtos: home, coleção com filtros, página de
produto, prova virtual (demonstração), sobre e contato. Não há carrinho nem
pagamento — o interesse em cada peça é encaminhado para o WhatsApp do ateliê.

## Estrutura

- Raiz: aplicação Next.js da vitrine (`app/`, `components/`, `hooks/`, `lib/`, `public/`).
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

## Verificação

```bash
pnpm test
pnpm lint
pnpm build
```
