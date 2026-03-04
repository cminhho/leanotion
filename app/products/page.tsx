import type { Metadata } from "next";
import { products, FILTER_OPTIONS, type FilterOption } from "@/lib/products";
import { ProductsListWithFilters } from "@/components/ProductsListWithFilters";

export const metadata: Metadata = {
  title: "All Products | Leanotion",
  description:
    "Browse all Leanotion templates and tools for productivity, finance, and life organization.",
};

const VALID_FILTERS = new Set<string>(FILTER_OPTIONS);

function parseFilter(filter: string | undefined): FilterOption {
  if (!filter || !VALID_FILTERS.has(filter)) return "all";
  return filter as FilterOption;
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; filter?: string }>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const filter = parseFilter(params.filter);

  return (
    <div
      className="min-h-screen transition-colors-theme pt-24 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsListWithFilters
          products={products}
          initialQ={q}
          initialFilter={filter}
        />
      </div>
    </div>
  );
}
