import Link from "next/link";
import { Twitter, Instagram, Youtube } from "lucide-react";

const SHOP_URL = "https://leanotion-shop.fourthwall.com";

export function Footer() {
  return (
    <footer
      className="border-t pt-16 pb-8 transition-colors-theme border-[var(--border-color)]"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-6 h-6 rounded flex items-center justify-center font-bold text-xs"
                style={{
                  background: "var(--text-primary)",
                  color: "var(--bg-primary)",
                }}
              >
                L
              </div>
              <span
                className="font-bold text-lg"
                style={{ color: "var(--text-primary)" }}
              >
                Leanotion
              </span>
            </Link>
            <p
              className="text-sm max-w-xs"
              style={{ color: "var(--text-tertiary)" }}
            >
              We create digital tools that help you simplify your workflow and
              focus on creativity.
            </p>
          </div>
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#templates"
                  className="transition-colors hover:text-[var(--text-secondary)]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Notion Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ultimate-dashboard"
                  className="transition-colors hover:text-[var(--text-secondary)]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Second Brain
                </Link>
              </li>
              <li>
                <Link
                  href="/products/finance-master"
                  className="transition-colors hover:text-[var(--text-secondary)]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Finance Tracker
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--text-secondary)]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Shop
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-[var(--text-secondary)]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-[var(--text-secondary)]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="transition-colors hover:text-[var(--text-secondary)]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            &copy; {new Date().getFullYear()} Leanotion. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="transition-colors hover:text-[var(--text-secondary)]"
              style={{ color: "var(--text-tertiary)" }}
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-[var(--text-secondary)]"
              style={{ color: "var(--text-tertiary)" }}
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-[var(--text-secondary)]"
              style={{ color: "var(--text-tertiary)" }}
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
