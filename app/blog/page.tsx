export default function BlogPage() {
  return (
    <div
      className="min-h-screen transition-colors-theme pt-24 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Blog
        </h1>
        <p
          className="text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Tips, updates, and stories about productivity. Coming soon.
        </p>
      </div>
    </div>
  );
}
