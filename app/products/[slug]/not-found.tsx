import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 transition-colors-theme"
      style={{ background: "var(--bg-primary)" }}
    >
      <h1
        className="text-2xl font-bold mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        Product not found
      </h1>
      <p
        className="mb-6"
        style={{ color: "var(--text-secondary)" }}
      >
        The template you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/#templates"
        className="px-6 py-3 rounded-full font-semibold"
        style={{
          background: "var(--text-primary)",
          color: "var(--bg-primary)",
        }}
      >
        View all templates
      </Link>
    </div>
  );
}
