import Link from "next/link";
import { ArrowRight, Zap, LayoutTemplate, ShieldCheck } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden transition-colors-theme"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 radius-notion-md mb-8 animate-fade-in border border-[var(--border-color)] text-xs font-medium"
            style={{
              background: "var(--bg-tertiary)",
              color: "var(--text-secondary)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            New 2024 Version Available
          </div>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 animate-slide-up text-[var(--text-primary)]"
            style={{ animationDelay: "0.1s" }}
          >
            Organize Your Life <br />
            <span className="text-gradient">Simple & Effective</span>
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto text-lg animate-slide-up text-[var(--text-secondary)]"
            style={{ animationDelay: "0.2s" }}
          >
            A collection of minimalist productivity templates designed to help
            you focus on what matters most without the clutter.
          </p>
          <div
            className="mt-10 flex justify-center animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/products"
              className="px-8 py-3 radius-notion-md font-semibold hover:opacity-90 transition-all transform hover:scale-105"
              style={{
                background: "var(--text-primary)",
                color: "var(--bg-primary)",
              }}
            >
              Explore Templates
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <section
        id="features"
        className="py-20 transition-colors-theme"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Why Choose Leanotion?
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              We remove the unnecessary to focus on core functionality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Optimized",
                desc: "Lightweight design, fast loading, without complex formulas that slow down your workspace.",
              },
              {
                icon: "LayoutTemplate",
                title: "Clean Interface",
                desc: "Minimalist aesthetics reduce cognitive load, helping you focus on your work content.",
              },
              {
                icon: "ShieldCheck",
                title: "Easy to Use",
                desc: "Detailed guides included, suitable for both beginners and advanced users.",
              },
            ].map((f, i) => {
              const Icon = f.icon === "Zap" ? Zap : f.icon === "LayoutTemplate" ? LayoutTemplate : ShieldCheck;
              return (
              <div
                key={i}
                className="p-6 radius-notion-lg shadow-notion-sm transition-colors-theme border border-[var(--border-color)]"
                style={{ background: "var(--bg-primary)" }}
              >
                <div
                  className="w-12 h-12 radius-notion-md flex items-center justify-center mb-4"
                  style={{
                    background: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {f.desc}
                </p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="templates"
        className="py-24 transition-colors-theme"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2
                className="text-3xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Popular Templates
              </h2>
              <p
                className="mt-2"
                style={{ color: "var(--text-secondary)" }}
              >
                The best tools to manage your life.
              </p>
            </div>
            <Link
              href="/products"
              className="font-medium flex items-center gap-1 group text-accent-500 hover:text-accent-600"
            >
              View All{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                variant={i === 0 ? "primary" : "secondary"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden transition-colors-theme"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to Optimize Your Life?
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Join thousands of users who are using Leanotion to work smarter, not
            harder.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 radius-notion-md font-bold transition-all transform hover:scale-105 shadow-notion-md bg-accent-600 text-white hover:bg-accent-500"
          >
            View All Templates
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p
            className="mt-4 text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            Browse templates. Lifetime support included.
          </p>
        </div>
      </section>
    </>
  );
}
