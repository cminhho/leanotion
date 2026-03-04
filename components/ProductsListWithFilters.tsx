"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { ArrowRight, Search } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import {
  type Product,
  type ProductCategory,
  type PriceFilter,
  CATEGORIES,
  SHOP_URL_CONST,
  filterProducts,
} from "@/lib/products";

type ProductsListWithFiltersProps = {
  products: Product[];
  initialQ?: string;
  initialCategory?: ProductCategory | "all";
  initialPrice?: PriceFilter;
};

export function ProductsListWithFilters({
  products,
  initialQ = "",
  initialCategory = "all",
  initialPrice = "all",
}: ProductsListWithFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [searchInput, setSearchInput] = useState(initialQ);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSearchInput(initialQ);
  }, [initialQ]);

  const updateParams = useCallback(
    (updates: { q?: string; category?: ProductCategory | "all"; price?: PriceFilter }) => {
      const params = new URLSearchParams();
      const q = updates.q !== undefined ? updates.q : initialQ;
      const category = updates.category !== undefined ? updates.category : initialCategory;
      const price = updates.price !== undefined ? updates.price : initialPrice;
      if (q) params.set("q", q);
      if (category && category !== "all") params.set("category", category);
      if (price && price !== "all") params.set("price", price);
      const query = params.toString();
      startTransition(() => {
        router.replace(query ? `${pathname}?${query}` : pathname);
      });
    },
    [pathname, router, initialQ, initialCategory, initialPrice]
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        updateParams({ q: value });
        debounceRef.current = null;
      }, 300);
    },
    [updateParams]
  );

  const filtered = filterProducts(products, {
    q: initialQ || undefined,
    category: initialCategory,
    price: initialPrice,
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <h1
            className="text-3xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            All Products
          </h1>
          <p
            className="mt-2 text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Templates and tools for productivity and organization.
          </p>
        </div>
        <a
          href={SHOP_URL_CONST}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-accent-500 hover:text-accent-600 transition-colors"
        >
          View at Shop
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{ color: "var(--text-tertiary)" }}
            aria-hidden
          />
          <input
            type="search"
            placeholder="Search products..."
            aria-label="Search products by title or description"
            value={searchInput}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 radius-notion-md border text-sm transition-colors-theme"
            style={{
              background: "var(--bg-primary)",
              color: "var(--text-primary)",
              borderColor: "var(--border-color)",
            }}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span
            className="text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Category:
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Category filter">
            <FilterPill
              label="All"
              active={initialCategory === "all"}
              onClick={() => updateParams({ category: "all" })}
            />
            {CATEGORIES.map((cat) => (
              <FilterPill
                key={cat}
                label={cat}
                active={initialCategory === cat}
                onClick={() => updateParams({ category: cat })}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span
            className="text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Price:
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Price filter">
            {(["all", "free", "paid"] as const).map((p) => (
              <FilterPill
                key={p}
                label={p === "all" ? "All" : p === "free" ? "Free" : "Paid"}
                active={initialPrice === p}
                onClick={() => updateParams({ price: p })}
              />
            ))}
          </div>
        </div>
      </div>

      {isPending && (
        <div
          className="mb-4 text-sm"
          style={{ color: "var(--text-tertiary)" }}
        >
          Updating…
        </div>
      )}

      {filtered.length === 0 ? (
        <p
          className="py-12 text-center"
          style={{ color: "var(--text-secondary)" }}
        >
          No products match your filters. Try a different search or category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              variant={i === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
      )}
    </>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1.5 radius-notion-md text-sm font-medium transition-colors-theme border"
      style={{
        background: active ? "var(--text-primary)" : "var(--bg-secondary)",
        color: active ? "var(--bg-primary)" : "var(--text-primary)",
        borderColor: "var(--border-color)",
      }}
    >
      {label}
    </button>
  );
}
