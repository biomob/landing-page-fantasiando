import { cacheLife } from "next/cache";
import { catalogApiUrl, catalogSourceName } from "../env";
import { createApiSource } from "./api-source";
import { createMockSource } from "./mock-source";
import type { CatalogSource } from "./types";

export type * from "./types";

// Único ponto que escolhe a origem dos dados. As telas só conhecem estas funções.
function source(): CatalogSource {
  return catalogSourceName() === "api" ? createApiSource(catalogApiUrl()) : createMockSource();
}

export async function getProducts() {
  "use cache";
  cacheLife("hours");
  return source().listProducts();
}

export async function getProduct(slug: string) {
  "use cache";
  cacheLife("hours");
  return source().getProduct(slug);
}

export async function getCategories() {
  "use cache";
  cacheLife("hours");
  return source().listCategories();
}
