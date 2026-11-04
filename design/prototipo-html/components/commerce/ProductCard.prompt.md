**ProductCard** — the commercial workhorse. Always carries both CTAs (`Comprar` primary, `Experimentar com IA` secondary) and never hides price or sizes behind illustration.

```jsx
<ProductCard
  name="Vestido Princesa Aurora" theme="Princesas"
  price={129.9} installments={3} rating={4.8} reviews={32}
  sizes={['2','4','6','8']} image="assets/vestido-princesa-rosa.png"
  badge={{label:'Novidade', tone:'pink'}}
  onBuy={...} onTryOn={...} />
```

Lifts on hover, image zooms, heart toggles favorite. Use real dress imagery; theme eyebrow uses the collection name.
