import { CategoryShowcase } from "@/components/home/category-showcase";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { TryOnTeaser } from "@/components/home/try-on-teaser";
import { getCategories, getProducts } from "@/lib/catalog";
import { featuredProducts } from "@/lib/catalog/selectors";

export default async function HomePage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <>
      <Hero />
      <CategoryShowcase categories={categories} />
      <FeaturedProducts products={featuredProducts(products)} />
      <TryOnTeaser />
      <HowItWorks />
    </>
  );
}
