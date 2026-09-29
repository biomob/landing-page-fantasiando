**Modal** — overlay dialog for the virtual try-on, size guide and login/signup. Blurred scrim, display-font title, optional footer actions.
```jsx
<Modal open={open} onClose={close} title="Prova virtual" footer={<><Button variant="ghost" onClick={close}>Cancelar</Button><Button>Gerar prévia</Button></>}>
  ...
</Modal>
```
