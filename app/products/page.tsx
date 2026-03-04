import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products, SHOP_URL_CONST } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Products | Leanotion",
  description:
    "Browse all Leanotion templates and tools for productivity, finance, and life organization.",
};

export default function ProductsPage() {
  return (
    <div
      className="min-h-screen transition-colors-theme pt-24 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              variant={i === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
