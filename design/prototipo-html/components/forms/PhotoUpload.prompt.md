**PhotoUpload** — the full-body photo dropzone at the heart of the virtual try-on. Shows the empty-state heart-sun mascot until a file is picked, then a success check. Always pair with the photo guidance copy.

```jsx
<PhotoUpload assetsPath="../../assets/" fileName={file?.name} onPick={f => setFile(f)} />
```

Set `assetsPath` to the relative path from the page to `/assets`. Keep the hint about full-body, good light, child facing forward.
