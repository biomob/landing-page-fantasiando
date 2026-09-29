**MascotState** — the brand's state system. Use it for every empty, loading, success, error, no-credits and add-to-cart moment so the heart-sun mascot explains what's happening.

```jsx
<MascotState state="loading" progress={0.6} assetsPath="../../assets/" />
<MascotState state="error" assetsPath="../../assets/" action={<Button>Enviar outra foto</Button>} />
<MascotState state="no-credits" assetsPath="../../assets/" action={<Button variant="accent">Chamar no WhatsApp</Button>} />
```

Each `state` picks the right mascot pose + default Portuguese copy; override `title`/`text` as needed. Set `assetsPath` to the relative path to `/assets`. Loading floats; error/success fade up. Keep copy short and never scolding.
