"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import {
  type Product,
  type FilterOption,
  FILTER_OPTIONS,
  filterProducts,
} from "@/lib/products";

function filterOptionLabel(option: FilterOption): string {
  return option === "all" ? "All" : option.charAt(0).toUpperCase() + option.slice(1);
}

type ProductsListWithFiltersProps = {
  products: Product[];
  initialQ?: string;
  initialFilter?: FilterOption;
};

export function ProductsListWithFilters({
  products,
  initialQ = "",
  initialFilter = "all",
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
    (updates: { q?: string; filter?: FilterOption }) => {
      const params = new URLSearchParams();
      const q = updates.q !== undefined ? updates.q : initialQ;
      const filter = updates.filter !== undefined ? updates.filter : initialFilter;
      if (q) params.set("q", q);
      if (filter && filter !== "all") params.set("filter", filter);
      const query = params.toString();
      startTransition(() => {
        router.replace(query ? `${pathname}?${query}` : pathname);
      });
    },
    [pathname, router, initialQ, initialFilter]
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
    filter: initialFilter,
  });

  return (
    <>
      <header className="mb-6">
        <h1 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          All Products
        </h1>
        <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          Templates and tools for productivity and organization.
        </p>
      </header>

      <div
        className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        aria-label="Product filters"
      >
        <div className="relative min-w-0 flex-1 sm:max-w-xs">
          <Search
            className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none"
            style={{ color: "var(--text-tertiary)" }}
            aria-hidden
          />
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search products"
            value={searchInput}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full radius-notion-md border py-2 pl-9 pr-3 text-sm transition-colors-theme focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color)]"
            style={{
              background: "var(--bg-primary)",
              color: "var(--text-primary)",
              borderColor: "var(--border-color)",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by category">
          {FILTER_OPTIONS.map((option) => (
            <FilterPill
              key={option}
              label={filterOptionLabel(option)}
              active={initialFilter === option}
              onClick={() => updateParams({ filter: option })}
            />
          ))}
        </div>
      </div>

      {isPending && (
        <p className="mb-3 text-xs opacity-70" style={{ color: "var(--text-tertiary)" }}>
          Updating…
        </p>
      )}

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm" style={{ color: "var(--text-secondary)" }}>
          No products match your filters. Try a different search or filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              variant={i === 0 ? "primary" : "secondary"}
              compact
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
      className="radius-notion-sm px-2.5 py-1 text-xs font-medium transition-colors-theme focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color)] hover:opacity-90"
      style={{
        background: active ? "var(--text-primary)" : "var(--bg-tertiary)",
        color: active ? "var(--bg-primary)" : "var(--text-primary)",
      }}
    >
      {label}
    </button>
  );
}
