**Select** — styled dropdown for filters (tema, tamanho, ocasião) and forms (tema de interesse). Matches Input styling with a custom chevron.

```jsx
<Select label="Tema de interesse" options={['Princesas','Festa junina','Aniversário']} value={v} onChange={e=>set(e.target.value)} />
<Select label="Tamanho" options={[{value:'4',label:'4 anos'},{value:'6',label:'6 anos'}]} />
```
