import { AtelierStory } from "@/components/home/atelier-story";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Hero } from "@/components/home/hero";
import { BannerSlot } from "@/components/ui/banner-slot";
import { Scallop } from "@/components/ui/scallop";
import { banners, homeCarousel } from "@/content/banners";
import { getCategories, getProducts } from "@/lib/catalog";
import { featuredProducts, startingPrice } from "@/lib/catalog/selectors";
import styles from "./page.module.css";

const featuredFilters = ["princesas", "festa-junina", "aniversario"];

export default async function HomePage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const featured = featuredProducts(products);
  const filters = categories.filter((category) => featuredFilters.includes(category.slug)).map(({ slug, name }) => ({ slug, name }));
  // Slides só entram se a peça existir no catálogo atual (mock ou API).
  const slides = homeCarousel.flatMap((slide) => {
    const product = products.find((item) => item.slug === slide.productSlug);
    return product ? [{ ...slide, productName: product.name }] : [];
  });

  return (
    <>
      <Hero cover={featured[1] ?? featured[0]} polaroid={featured[2]} startingPrice={startingPrice(products)} />
      <Scallop variant="blush-down" />
      {slides.length ? (
        <HeroCarousel slides={slides} />
      ) : (
        <section className={styles.banner} aria-label="Campanha">
          <BannerSlot slot={banners.homeHero} layout="hero" />
        </section>
      )}
      <CategoryShowcase categories={categories} />
      <FeaturedProducts featured={featured} products={products} filters={filters} />
      <section className={styles.duo} aria-label="Promoções">
        <BannerSlot slot={banners.homePromoA} layout="card" />
        <BannerSlot slot={banners.homePromoB} layout="card" alt />
      </section>
      <AtelierStory />
      <section className={styles.strip} aria-label="Avisos">
        <BannerSlot slot={banners.homeStrip} layout="strip" />
      </section>
    </>
  );
}
