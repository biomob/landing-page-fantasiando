/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
import Link from "next/link";
import { Icon } from "@/components/storefront/icon";
import { ProductCard } from "@/components/storefront/product-card";
import { getCategories, getProducts } from "@/lib/catalog";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";

export default async function HomePage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const featured = [...products.filter((product) => product.badge), ...products.filter((product) => !product.badge)].slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Feito para viver histórias</p>
          <h1>Fantasiar é o começo de toda aventura.</h1>
          <p>Vestidos e fantasias infantis criados com carinho no nosso ateliê. Escolha sua peça e fale com a gente pelo WhatsApp.</p>
          <div className="button-row">
            <Link className="button primary" href="/colecao">Ver coleção <Icon name="arrow" size={18} /></Link>
            <a className="button soft" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">Descubra</p><h2>Um mundo para cada imaginação</h2></div>
          <Link className="text-button" href="/colecao">Ver todos <Icon name="arrow" size={16} /></Link>
        </div>
        <div className="category-grid">
          {categories.slice(0, 4).map((category) => (
            <Link className="category-card" key={category.slug} href={`/colecao#${category.slug}`}>
              <img src={category.imageUrl ?? "/assets/mascote-vazio.png"} alt="" loading="lazy" />
              <span>{category.name}</span>
              <small>{category.productCount} {category.productCount === 1 ? "peça" : "peças"}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">Favoritos do ateliê</p><h2>Peças que encantam</h2></div>
          <Link className="text-button" href="/colecao">Ver coleção <Icon name="arrow" size={16} /></Link>
        </div>
        <div className="product-grid">{featured.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>

      <section className="section rose-panel">
        <div>
          <p className="eyebrow">Prova virtual</p>
          <h2>Veja a fantasia antes de escolher.</h2>
          <p>Envie uma foto, escolha a peça e receba uma prévia para tornar a decisão ainda mais especial.</p>
          <Link className="button primary" href="/prova-virtual">Conhecer a prova virtual <Icon name="sparkle" size={17} /></Link>
        </div>
        <img src="/assets/mascote-prova-virtual.png" alt="Mascote Annapê" />
      </section>

      <section className="section steps">
        <div className="section-heading"><div><p className="eyebrow">Como funciona</p><h2>Do ateliê para a festa</h2></div></div>
        <ol className="step-grid">
          <li><Icon name="heart" size={26} /><strong>Escolha a peça</strong><span>Navegue pela coleção e separe as favoritas.</span></li>
          <li><Icon name="whatsapp" size={26} /><strong>Chame no WhatsApp</strong><span>Tiramos dúvidas de tamanho, prazo e personalização.</span></li>
          <li><Icon name="truck" size={26} /><strong>Receba em casa</strong><span>Produzimos com carinho e enviamos para todo o Brasil.</span></li>
        </ol>
      </section>
    </>
  );
}
