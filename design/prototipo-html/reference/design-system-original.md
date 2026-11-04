# Annapê Ateliê — Design System

> Visual system for **Annapê Ateliê** (formerly Fantasiando Kids), a Brazilian children's
> atelier and e-commerce selling dresses, costumes and themed clothing — with an AI virtual
> try-on as its signature feature. Handmade warmth, with the finish and trust adults need to
> buy with confidence. Light and dark themes.

---

## 1. Brand context

Annapê Ateliê is a children's clothing store (vestidos, fantasias, roupas temáticas)
born in Petrópolis/RJ, shipping across Brazil. The differentiator is **prova virtual
por IA** — a parent picks a dress, uploads a full-body photo of the child, and gets a
visual simulation of the child wearing the model before buying. **Each registered
account gets 3 virtual try-on credits** (to control image-generation cost).

Two audiences at once:
- **Buyer (adult):** mothers, fathers, family — want pretty, practical, safe purchases.
- **Emotional (child):** wants to imagine herself as a princess, fairy, character.

The **unicorn mascot is the heart of the visual system** — it presents the brand,
guides the try-on, and powers every UI state (loading, success, error, empty). The
**virtual try-on is the heart of the functional experience.** The site must read as a
real store, not a campaign landing page: product, price, sizes and CTAs are never
hidden behind illustration.

### Sources provided
All material lives in the attached `Fantasiando/` folder (read-only mount):
- `2 - Entrega Site Fantasiando/DOCUMENTACAO-SITE-FANTASIANDO.md` — creative direction & site architecture (primary brief).
- `2 - Entrega Site Fantasiando/PROMPT-CLAUDE-DESIGN-FANTASIANDO.md` — build spec.
- `2 - Entrega Site Fantasiando/assets-gerados/` — final logo, mascot poses, banners, category images (copied into `assets/`).
- `2 - Entrega Site Fantasiando/assets-contexto/` — old prototype assets, historical reference only (do **not** copy literally).
- `1 - Assets antigos/` — earliest idea mockups.

There is **no application codebase** — the brief is documentation + generated image
assets. This system is therefore built from the written direction and the visual
language of the assets.

---

## 2. Content fundamentals (voice & copy)

**Language:** Brazilian Portuguese. Tone is *encantador, direto e confiável* —
enchanting, direct, trustworthy. Speak **to** the buyer (você), warmly but plainly.

- **Casing:** Sentence case for headings and buttons. UPPERCASE reserved for tiny
  eyebrows/top-bar labels with letter-spacing. Never all-caps headlines.
- **Buttons always name the action:** `Ver vestidos`, `Testar prova virtual`,
  `Gerar prévia`, `Comprar`, `Experimentar com IA`, `Chamar no WhatsApp`.
- **Honesty about the AI:** never promise a perfect fit. Always frame the result as a
  *simulação visual*. Canonical disclaimer:
  > *A prévia é uma simulação visual. Cores, proporções e caimento podem variar conforme a foto e o tamanho escolhido.*
- **Magic helps, the decision is yours:** `A magia ajuda, mas a decisão é sua.`
- **Signature lines:** `Escolha com mais segurança.` · `Veja uma prévia antes de comprar.` ·
  `3 provas virtuais por conta.` · `Envie uma foto de corpo inteiro.` ·
  `O unicórnio da Fantasiando te guia pelo teste.`
- **Privacy, never scary:** explain photo use plainly, offer deletion, never expose
  children's photos publicly. State it as a natural part of the flow.

**Avoid:** absolute fit promises; language that manipulates a child's image without
consent; heavy AI jargon; excessive diminutives (-zinho/-zinha); long text inside
product areas.

**Emoji:** not used in UI. Magic is expressed through the mascot, stars (★) and soft
sparkles — not emoji.

---

## 3. Visual foundations

**Overall vibe:** warm, bright, premium-accessible. Mágico mas confiável. The unicorn
universe wraps a clean commercial store. Restraint is the rule — *one thousand no's for
every yes*. Avoid rainbow overload, heavy texture, amateur-store clichés.

### Color
- **Brand rosa** `--brand #F598A4` (C0 M50 Y20 K0) — primary CTAs, brand panels, ticker,
  highlights. **Text on rosa is always dark** (`--text-on-brand #3A1D25`, 6.4:1) — never white.
  For rosa-colored *text/links* use `--brand-ink` (rosa-700), never rosa-400.
- **Caramelo** `--accent #C38A67` (C22 M48 Y63 K0) — accent buttons, eyebrows, step numbers,
  icons. Text-accent version: `--accent-ink`.
- **Neutrals:** warm cocoa ink (`--ink-900 #2E2226` → `--ink-400`), paper background
  `--bg-base #FCF8F5`, sections alternate with `--bg-tint` (rosa wash) or `--bg-cream`
  (caramelo wash). `--surface-inverse` for high-contrast bands.
- Support yellow/sky/coral/mint are for status & category coding only, never dominant.
- Scales: `--rosa-50…800`, `--caramelo-50…800`. Legacy `--violet-*` / `--pink-*` names are
  aliases of rosa / caramelo so older components keep working — prefer the new names.
- **Always use tokens** (`--surface-card`, `--text-body`…) — never `#fff` — so dark mode works.

### Dark mode
- Set `data-theme="dark"` (or `"light"`) on `<html>`. Scales invert (50 = darkest tint,
  800 = lightest), so `bg: rosa-100 / fg: rosa-700` pairs stay readable in both themes.
  `--brand` stays #F598A4 with dark text in both.
- To follow the OS, set it on load (inline, before paint):
  `document.documentElement.dataset.theme = localStorage.getItem('annape-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')`.
  The Header's `onToggleTheme` renders the toggle; store the user's pick in `annape-theme`.
- The colored logo works on both paper and dark backgrounds.

### Type
- **Display — Fredoka** (rounded, friendly, clean). Headlines, section titles, product
  names. Weights 500–700. Slight negative tracking on large sizes.
- **Body/UI — Nunito** (warm, highly legible). Paragraphs, controls, prices, fine print.
- Hero headline 46–60px; section titles 34px; body 16px; never below 12.5px.
- The Annapê logo is hand-lettered — never recreate it in CSS; use the PNGs.
  logo PNG.

### Shape, border, radius
- Buttons, chips and nav items are **pills** (`--radius-pill`). Cards/panels 16–24px. Hero and
  editorial imagery uses an **arch** frame (`border-radius: 999px 999px 28px 28px`).
- Borders are hairline `--border-subtle #ECE6F2`. Cards lean on shadow, not heavy borders.

### Shadow & depth
- Soft, diffuse, warm cocoa-tinted shadows (`--shadow-card`, `--shadow-card-hover`); darker in
  dark mode. Brand CTAs get `--shadow-brand` (rosa glow).

### Backgrounds & magic accents
- The **heart-sun symbol** as a large rotated watermark (≤18% opacity), scattered stars,
  tiny sparkles. All discreet — decoration sits behind/around content, never over price
  or CTA. Product imagery itself carries the dreamy star-and-glow backdrop.

### Imagery
- Product photography = dress on a mannequin/hanger, clean warm-pastel backdrop, scattered
  stars, soft glow, slight sparkle. Warm, bright, never cold or grainy.
- Mascots are **transparent PNGs** — place directly on tinted surfaces.
- Never use realistic photos of children as required public elements.

### Motion
- Subtle and purposeful. Mascot: gentle float (`fz-float`, ~5.5s), small twinkle on
  stars, soft state changes, fade-up entrances (`fz-fade-up`). Enchantment ticker scrolls
  continuously, pauses on hover. Cards lift on hover. **No** loud/looping decoration that
  hurts reading or performance. All motion respects `prefers-reduced-motion`.
- **Hover:** cards lift + deepen shadow; buttons darken one step. **Press:** slight scale
  down (0.97). **Focus:** visible rosa ring (`--ring`).

---

## 4. Iconography

- **Icon set: Lucide** (https://lucide.dev) via CDN — clean rounded-stroke (2px) line
  icons that match Fredoka/Nunito's friendliness. Used for: search, user, heart
  (favorites), shopping-bag (cart), star (rating), truck (shipping), shield-check
  (secure), upload, sparkles, ruler (sizes), trash (delete image), check.
- Loaded with `<script src="https://unpkg.com/lucide@latest"></script>` then
  `lucide.createIcons()`, or as inline `<svg>` from the Lucide set. Stroke width 2,
  `currentColor`. **This is a substitution** — the brief specified generic icons without a
  named set; Lucide is the closest clean, rounded, free match. Flagged for the user.
- **Stars (★)** are a brand motif, not an icon-system icon — render as small filled shapes
  in support colors. **No emoji** anywhere in UI.
- The **unicorn icon** (`assets/fantasiando-mascote-icone.png`) is the compact brand
  symbol: favicon, avatar, floating button, seal, and the repeatable element in the
  enchantment ticker.

---

## 5. The mascot system

The unicorn is a **system of states**, not one decorative illustration. Mapping
(assets in `assets/`, all transparent PNG except logo):

| Context | Asset |
| --- | --- |
| Hero / emotional moments | `fantasiando-mascote-estrela.png` (holding star) |
| Brand / about / institutional points | `fantasiando-mascote-base.png` (waving) |
| Virtual try-on assistant | `fantasiando-mascote-prova-virtual.png` (holding dress + wand) |
| Generating preview (loading) | `fantasiando-mascote-loading.png` |
| Result ready / success / order done | `fantasiando-mascote-sucesso.png` |
| Empty (no photo / history / favorites) | `fantasiando-mascote-vazio.png` |
| Invalid photo / upload guidance | `fantasiando-mascote-erro-foto.png` (kind, never scolding) |
| Favicon / avatar / seal / floating button | `fantasiando-mascote-icone.png` |
| Consistency reference | `contact-sheet-unicornios.png` |

The mascot supports navigation and explains states. It must **never** replace product,
price, CTA, sizing info, or purchase rules.

---

## 6. Brand marks
- `assets/annape-logo-{cor,branco,preto}.png` — stacked logo. Cor on paper or dark; branco on
  rosa; preto on caramelo/light tints.
- `assets/annape-simbolo-{cor,branco,preto}.png` — heart-sun symbol: favicon, avatars,
  watermarks, ticker separator.
- Print (CMYK PDF) masters live in `uploads/Logotipo Annape Ateliê/`.
- Old `fantasiando-logo-horizontal.png` is retired; the unicorn mascot stays.

## 7. Index / manifest

Root files:
- `styles.css` — global entry point (imports the token layers). **Consumers link this.**
- `tokens/` — `fonts.css`, `colors.css` (light + dark), `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — Annapê logos & symbol, mascot poses + icon, category images, hero & banners.
- `guidelines/` — foundation cards (Colors incl. dark mode, Type, Spacing, Brand).
- `components/` — reusable React UI primitives.
- `ui_kits/website/` — interactive storefront.

### Components
- `core/` — Button, IconButton, Badge, CreditCounter
- `forms/` — Input, Select, Checkbox, PhotoUpload
- `commerce/` — ProductCard, CategoryCard, PriceTag, Rating, StarField
- `feedback/` — MascotState, Toast, Modal
- `navigation/` — TopBar, Header

**UI kit screens** (`ui_kits/website/`): Home, Prova Virtual (wizard: Entrar → Vestido → Foto →
Prévia with before/after slider, photo guide, saved gallery), Contato (conversational — one
typed question, one answer), Product, Category, Account. Empty `<image-slot>` placeholders mark
photos still to be supplied (hero, ateliê, photo-guide examples) — drag an image onto them.

> **Namespace:** components are exposed at `window.FantasiandoDesignSystem_43d79f.<Name>`.
