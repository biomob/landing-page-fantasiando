/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section account">
      <img src="/assets/mascote-vazio.png" alt="" />
      <p className="eyebrow">Página não encontrada</p>
      <h1>Essa peça saiu para brincar.</h1>
      <p>Não encontramos o que você procurava, mas a coleção tem muitas outras histórias.</p>
      <Link className="button primary" href="/colecao">Ver coleção</Link>
    </section>
  );
}
