import { changelogEntries } from "@/lib/changelog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ChangelogPage() {
  return (
    <div
      className="min-h-screen transition-colors-theme pt-24 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl font-bold mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Changelog
        </h1>
        <div className="space-y-10">
          {changelogEntries.map((entry) => (
            <article
              key={entry.date}
              className="border-b border-[var(--border-color)] pb-8 last:border-0"
            >
              <time
                className="text-sm font-medium"
                style={{ color: "var(--text-tertiary)" }}
                dateTime={entry.date}
              >
                {formatDate(entry.date)}
              </time>
              <h2
                className="text-xl font-semibold mt-1 mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {entry.title}
              </h2>
              <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)]">
                {entry.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
