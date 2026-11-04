**Input** — labeled text field for forms (newsletter, login, checkout). Violet focus ring; coral error state.

```jsx
<Input label="E-mail" type="email" placeholder="voce@email.com" value={v} onChange={e=>set(e.target.value)} />
<Input label="Nome" iconLeft={<svg.../>} helper="Como devemos te chamar?" />
<Input label="E-mail" error="Digite um e-mail válido" />
```
