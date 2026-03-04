import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice, SHOP_URL_CONST } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  variant?: "primary" | "secondary";
  /** When true, hide View/Buy Now buttons and make the whole card link to the product detail page. */
  compact?: boolean;
};

export function ProductCard({ product, variant = "primary", compact = false }: ProductCardProps) {
  const isPrimary = variant === "primary";

  const cardContent = (
    <>
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ background: "var(--bg-tertiary)" }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && (
          <div
            className={`absolute top-3 right-3 px-2 py-1 radius-notion-sm text-xs font-medium backdrop-blur border border-white/10 ${
              product.badge === "Best Seller"
                ? "bg-black/70 text-white"
                : "bg-accent-500/90 text-white"
            }`}
          >
            {product.badge}
          </div>
        )}
      </div>
      <div className={`p-6 flex flex-col flex-grow ${compact ? "pb-6" : ""}`}>
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {product.title}
          </h3>
          <span
            className="text-lg font-semibold shrink-0"
            style={{ color: "var(--text-primary)" }}
          >
            {formatPrice(product.price)}
          </span>
        </div>
        <p
          className={`text-sm flex-grow ${compact ? "line-clamp-2" : "mb-6"}`}
          style={{ color: "var(--text-secondary)" }}
        >
          {product.description}
        </p>
        {!compact && (
          <div className="flex gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 py-3 radius-notion-md font-semibold transition-colors-theme text-center flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-primary)] hover:opacity-90"
              style={{ background: "var(--bg-tertiary)" }}
            >
              View
            </Link>
            <a
              href={product.buyUrl ?? SHOP_URL_CONST}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 py-3 radius-notion-md font-semibold transition-colors-theme text-center flex items-center justify-center gap-2 ${
                isPrimary
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90"
                  : "bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)]"
              }`}
            >
              Buy Now <ShoppingBag className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </>
  );

  const cardClassName =
    "group radius-notion-lg overflow-hidden transition-all duration-300 flex flex-col h-full border border-[var(--border-color)] shadow-notion-sm hover:shadow-notion-md " +
    (compact ? "cursor-pointer" : "");

  const cardStyle = { background: "var(--bg-secondary)" };

  if (compact) {
    return (
      <Link
        href={`/products/${product.slug}`}
        className={cardClassName}
        style={cardStyle}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardClassName} style={cardStyle}>
      {cardContent}
    </div>
  );
}
