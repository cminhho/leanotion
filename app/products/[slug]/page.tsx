import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { getProductBySlug, getAllSlugs, SHOP_URL_CONST } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div
      className="min-h-screen transition-colors-theme pt-24 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-color)]"
            style={{ background: "var(--bg-tertiary)" }}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {product.badge && (
              <div
                className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium ${
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
              ${product.price}
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {product.description}
            </p>
            <a
              href={SHOP_URL_CONST}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-xl font-semibold transition-colors-theme hover:opacity-90"
              style={{
                background: "var(--text-primary)",
                color: "var(--bg-primary)",
              }}
            >
              Buy Now <ShoppingBag className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
