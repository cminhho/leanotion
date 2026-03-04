export default function AboutPage() {
  return (
    <div
      className="min-h-screen transition-colors-theme pt-24 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl font-bold mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          About Leanotion
        </h1>
        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          We create digital tools that help you simplify your workflow and focus
          on creativity. Our templates are designed to be minimalist and
          effective—no clutter, just what you need to stay organized and
          productive.
        </p>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Leanotion products are optimized for speed, easy to use, and come with
          detailed guides. Whether you&apos;re managing tasks, tracking finances, or
          building a second brain, we&apos;ve got you covered.
        </p>
      </div>
    </div>
  );
}
