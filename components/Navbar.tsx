"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 top-0 left-0 border-b transition-colors-theme border-[var(--border-color)]"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <div
              className="w-8 h-8 radius-notion-md flex items-center justify-center font-bold text-lg"
              style={{
                background: "var(--text-primary)",
                color: "var(--bg-primary)",
              }}
            >
              L
            </div>
            <span
              className="font-bold text-xl tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Leanotion
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-sm font-medium transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Templates
            </Link>
            <Link
              href="/#features"
              className="text-sm font-medium transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Features
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              About
            </Link>
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center p-2 radius-notion-sm transition-colors-theme text-[var(--text-secondary)] bg-[var(--bg-tertiary)]"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-colors-theme bg-[var(--bg-secondary)] border-t border-[var(--border-color)] ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/products"
            className="block px-3 py-2 radius-notion-sm text-base font-medium text-[var(--text-secondary)]"
            onClick={() => setMobileOpen(false)}
          >
            Templates
          </Link>
          <Link
            href="/#features"
            className="block px-3 py-2 radius-notion-sm text-base font-medium text-[var(--text-secondary)]"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 radius-notion-sm text-base font-medium text-[var(--text-secondary)]"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 radius-notion-sm text-base font-medium text-[var(--text-secondary)]"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <div className="flex items-center gap-2 px-3 py-2">
            <span className="text-base font-medium text-[var(--text-secondary)]">
              Theme
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
