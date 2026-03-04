import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import {
  getProductBySlug,
  getAllSlugs,
  getRelatedProducts,
  SHOP_URL_CONST,
  formatPrice,
} from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(slug, 3);

  return (
    <div
      className="min-h-screen transition-colors-theme pt-24 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb: Home > Products > Title */}
        <nav className="flex items-center gap-2 text-sm mb-8 text-[var(--text-tertiary)]">
          <Link href="/" className="hover:text-[var(--text-secondary)]">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#templates" className="hover:text-[var(--text-secondary)]">
            Products
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span style={{ color: "var(--text-primary)" }}>{product.title}</span>
        </nav>

        {/* Main: image left 636x848 | details right */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,636px)_1fr] gap-12 items-start mb-16">
          <div
            className="relative w-full max-w-[636px] aspect-[636/848] radius-notion-lg overflow-hidden border border-[var(--border-color)] shadow-notion-sm"
            style={{ background: "var(--bg-tertiary)" }}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 636px"
            />
            {product.badge && (
              <div
                className={`absolute top-3 right-3 px-2 py-1 radius-notion-sm text-xs font-medium ${
                  product.badge === "Best Seller"
                    ? "bg-black/70 text-white"
                    : "bg-accent-500/90 text-white"
                }`}
              >
                {product.badge}
              </div>
            )}
          </div>
          <div>
            <h1
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {product.title}
            </h1>
            <p
              className="text-2xl font-semibold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {formatPrice(product.price)}
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {product.description}
            </p>
            <a
              href={product.buyUrl ?? SHOP_URL_CONST}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto md:min-w-[200px] px-8 py-4 radius-notion-md font-semibold transition-colors-theme hover:opacity-90"
              style={{
                background: "var(--text-primary)",
                color: "var(--bg-primary)",
              }}
            >
              Add to Cart <ShoppingCart className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* You may also like */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-10 border-t border-[var(--border-color)]">
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              You may also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <ProductCard
                  key={related.slug}
                  product={related}
                  variant="secondary"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
