import type { Metadata } from "next";
import { products } from "@/lib/products";
import {
  type ProductCategory,
  type PriceFilter,
  CATEGORIES,
} from "@/lib/products";
import { ProductsListWithFilters } from "@/components/ProductsListWithFilters";

export const metadata: Metadata = {
  title: "All Products | Leanotion",
  description:
    "Browse all Leanotion templates and tools for productivity, finance, and life organization.",
};

const VALID_CATEGORIES = new Set<string>([
  "all",
  ...CATEGORIES,
]);
const VALID_PRICE: PriceFilter[] = ["all", "free", "paid"];

function parseCategory(category: string | undefined): ProductCategory | "all" {
  if (!category || !VALID_CATEGORIES.has(category)) return "all";
  return category as ProductCategory | "all";
}

function parsePrice(price: string | undefined): PriceFilter {
  if (!price || !VALID_PRICE.includes(price as PriceFilter)) return "all";
  return price as PriceFilter;
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; price?: string }>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const category = parseCategory(params.category);
  const price = parsePrice(params.price);

  return (
    <div
      className="min-h-screen transition-colors-theme pt-24 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsListWithFilters
          products={products}
          initialQ={q}
          initialCategory={category}
          initialPrice={price}
        />
      </div>
    </div>
  );
}
