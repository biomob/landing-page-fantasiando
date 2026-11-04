**IconButton** — round, icon-only control for header actions (search, account, favorites, cart) and toolbars. Pass a Lucide `<svg>` as children; always give a `label`.

```jsx
<IconButton label="Carrinho" badge={3}><svg .../></IconButton>
<IconButton label="Favoritos" variant="soft"><svg .../></IconButton>
```

Variants `plain | soft | solid`; sizes `sm | md | lg` (md = 44px hit target). `badge` shows a pink count bubble.
