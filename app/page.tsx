import { AtelierStory } from "@/components/home/atelier-story";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Hero } from "@/components/home/hero";
import { TryOnTeaser } from "@/components/home/try-on-teaser";
import { BannerSlot } from "@/components/ui/banner-slot";
import { Scallop } from "@/components/ui/scallop";
import { banners } from "@/content/banners";
import { getCategories, getProducts } from "@/lib/catalog";
import { featuredProducts, startingPrice } from "@/lib/catalog/selectors";
import styles from "./page.module.css";

const featuredFilters = ["princesas", "festa-junina", "aniversario"];

export default async function HomePage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const featured = featuredProducts(products);
  const filters = categories.filter((category) => featuredFilters.includes(category.slug)).map(({ slug, name }) => ({ slug, name }));

  return (
    <>
      <Hero cover={featured[0]} polaroid={featured[2]} startingPrice={startingPrice(products)} />
      <Scallop variant="blush-down" />
      <section className={styles.banner} aria-label="Campanha">
        <BannerSlot slot={banners.homeHero} layout="hero" />
      </section>
      <CategoryShowcase categories={categories} />
      <FeaturedProducts featured={featured} products={products} filters={filters} />
      <section className={styles.duo} aria-label="Promoções">
        <BannerSlot slot={banners.homePromoA} layout="card" />
        <BannerSlot slot={banners.homePromoB} layout="card" alt />
      </section>
      <TryOnTeaser />
      <AtelierStory />
      <section className={styles.strip} aria-label="Avisos">
        <BannerSlot slot={banners.homeStrip} layout="strip" />
      </section>
    </>
  );
}
