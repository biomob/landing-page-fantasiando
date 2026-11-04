**Button** — the primary action control. Display-font label, violet fill with a soft glow by default; use it whenever the user takes a step (Comprar, Gerar prévia, Testar prova virtual).

```jsx
<Button variant="primary" size="lg" onClick={buy}>Comprar</Button>
<Button variant="accent" iconLeft={<SparkleIcon/>}>Experimentar com IA</Button>
<Button variant="secondary">Ver vestidos</Button>
<Button variant="ghost" size="sm">Cancelar</Button>
```

Variants: `primary` (violet + brand glow), `accent` (cotton-candy pink — reserve for the AI try-on CTA), `secondary` (white, violet outline), `soft` (lilac fill), `ghost` (text only). Sizes `sm | md | lg`. Labels always name the action; sentence case.
