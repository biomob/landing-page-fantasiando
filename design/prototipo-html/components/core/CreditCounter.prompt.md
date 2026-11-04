**CreditCounter** — shows the account's remaining AI try-on credits (each account gets 3). Place it in the header, the try-on panel, and the account area.

```jsx
<CreditCounter remaining={3} total={3} />
<CreditCounter remaining={0} total={3} />   // coral "sem provas" state
<CreditCounter remaining={2} compact />      // inline in a header
```

Pips deplete left-to-right; the whole pill turns coral at zero.
