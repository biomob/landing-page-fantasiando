**Header** — the storefront's main header. Logo, centered nav (Prova virtual gets a pink star), search/account/favorites/cart icon buttons with count badges, and the "Experimentar com IA" CTA.

```jsx
<Header active="Vestidos" cartCount={3} favCount={2} assetsPath="../../assets/" onNav={go} />
<Header compact assetsPath="../../assets/" cartCount={1} />  // mobile
```

Pair with `<TopBar/>` above it. Set `assetsPath` to reach the logo in `/assets`.
