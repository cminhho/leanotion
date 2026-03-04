export type ProductCategory =
  | "Productivity"
  | "Finance"
  | "Life"
  | "Business"
  | "Other";

export type Product = {
  slug: string;
  title: string;
  price: number;
  description: string;
  image: string;
  badge?: "Best Seller" | "New";
  buyUrl?: string;
  category?: ProductCategory;
};

const SHOP_URL = "https://leanotion-shop.fourthwall.com";

const IMAGE_BASE =
  "https://image.qwenlm.ai/public_source/3f2012d7-94b2-4d84-a13d-7f2ec5e17675";
const DEFAULT_PRODUCT_IMAGE = `${IMAGE_BASE}/17c517c3b-ec0d-4193-8892-d933b615415e.png`;

export function formatPrice(price: number): string {
  if (price === 0) return "Free";
  return price % 1 === 0 ? `$${price}` : `$${price.toFixed(2)}`;
}

export const products: Product[] = [
  {
    slug: "agile-for-life",
    title: "Agile for Life - All-in-one for life management",
    price: 5,
    description:
      "Agile for Life - All-in-one for life management. Your all-in-one template for comprehensive life management—goals, tasks, projects, and reflection in one cohesive system.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/agile-for-life",
    category: "Productivity",
  },
  {
    slug: "emergency-action-plan",
    title: "Emergency Action Plan (EAP)",
    price: 5,
    description:
      "Structured template for an Emergency Action Plan (EAP), ideal for quickly organizing and responding to emergencies. Includes sections for introduction, features, benefits, and action steps.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/emergency-action-plan",
    category: "Business",
  },
  {
    slug: "real-estate-business",
    title: "Real Estate Business",
    price: 0,
    description:
      "Simplify your real estate business with client management, property listings, and deal tracking in your workspace.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/real-estate-business",
    category: "Business",
  },
  {
    slug: "weekly-board-planner",
    title: "Weekly Board Planner",
    price: 5,
    description:
      "Plan your week ahead with clarity. Manage tasks, prioritize, and stay focused with a simple weekly board.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/weekly-board-planner",
    category: "Productivity",
  },
  {
    slug: "organize-everything",
    title: "Organize Everything - The 75 Best Lists",
    price: 5,
    description:
      "Organize Everything - The 75 Best Lists. Pre-made lists to organize shopping, projects, and more.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/organize-everything",
    category: "Productivity",
  },
  {
    slug: "notion-bundle-productivity-organization",
    title: "Ultimate Template Bundle for Productivity & Organization",
    price: 15,
    description:
      "The Ultimate Template Bundle is your all-in-one solution for organizing your life, boosting productivity, and staying on top of your goals. Includes a curated set of templates for every aspect of life.",
    image: DEFAULT_PRODUCT_IMAGE,
    badge: "Best Seller",
    buyUrl: "https://leantechco.gumroad.com/l/notion-bundle-productivity-organization",
    category: "Productivity",
  },
  {
    slug: "personal-life-management",
    title: "All-in-One Life Planner Excel Spreadsheet",
    price: 10,
    description:
      "Comprehensive Excel spreadsheet that helps you manage every aspect of your life—health, relationships, career, finances, and more. Plan each year in detail and track progress.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/personal-life-management",
    category: "Life",
  },
  {
    slug: "personal-finance-excel",
    title: "All-in-one Personal Finance Excel Spreadsheet",
    price: 10,
    description:
      "All-in-one Personal Finance Excel spreadsheet. Track income, expenses, budget, and financial goals in one place.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/personal-finance-excel",
    category: "Finance",
  },
  {
    slug: "end-of-life-planning",
    title: "End-of-Life Planning",
    price: 5,
    description:
      "End-of-life planning formalizes your wishes for the end of your life and documents everything your loved ones need to know.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/end-of-life-planning",
    category: "Life",
  },
  {
    slug: "family-hub",
    title: "Family Hub – all in one",
    price: 16,
    description:
      "Customizable workspace for family management. Includes budgeting, meal planning, emergency information, and collaboration for busy families.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/family-hub",
    category: "Life",
  },
  {
    slug: "digital-product-hub",
    title: "Digital Product Creator Hub",
    price: 5,
    description:
      "A workspace for digital creators to manage ideas, design workflows, sales metrics, and marketing strategies for platforms like Gumroad and Etsy.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/digital-product-hub",
    category: "Business",
  },
  {
    slug: "password-manager-hub",
    title: "Password Manager Hub",
    price: 5,
    description:
      "Password Manager Hub is a comprehensive template to manage your digital life with enhanced security.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/password-manager-hub",
    category: "Productivity",
  },
  {
    slug: "year-to-day-planner",
    title: "Year-to-Day Goal Planner 2025",
    price: 15,
    description:
      "All-in-one productivity tool with customizable sections for goal tracking (yearly, monthly, weekly, daily), gratitude, habit tracking, and reflections.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/year-to-day-planner",
    category: "Productivity",
  },
  {
    slug: "notion-for-couples",
    title: "Workspace for Couples",
    price: 10,
    description:
      "Comprehensive all-in-one solution for couples. Shared goals, calendars, memory logs, finances, chores, and milestone tracking for better connection.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/notion-for-couples",
    category: "Life",
  },
  {
    slug: "digital-wedding-planner",
    title: "Digital Wedding Planner Template",
    price: 10,
    description:
      "This all-in-one digital tool helps you organize every detail of your special day—from budgets and guest lists to timelines and vendor management.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/digital-wedding-planner",
    category: "Life",
  },
  {
    slug: "notion-pro-launch-kit",
    title: "Digital Product Launch Kit",
    price: 15,
    description:
      "The Digital Product Launch Kit is your all-in-one solution for building, branding, and selling digital products. Master Dashboard, Product Database, and Branding Toolkit.",
    image: DEFAULT_PRODUCT_IMAGE,
    buyUrl: "https://leantechco.gumroad.com/l/notion-pro-launch-kit",
    category: "Business",
  },
  {
    slug: "first-home-tracker",
    title: "My First Home - Guided Journey Tracker",
    price: 12,
    description:
      "All-in-one template for first-time home buyers. Manage tasks, budget, listings, and more. Stay organized and confidently buy your dream home.",
    image: DEFAULT_PRODUCT_IMAGE,
    badge: "New",
    buyUrl: "https://leantechco.gumroad.com/l/first-home-tracker",
    category: "Life",
  },
];

export const SHOP_URL_CONST = SHOP_URL;

export const CATEGORIES: readonly ProductCategory[] = [
  "Productivity",
  "Finance",
  "Life",
  "Business",
  "Other",
] as const;

export type PriceFilter = "all" | "free" | "paid";

export type ProductFilters = {
  q?: string;
  category?: ProductCategory | "all";
  price?: PriceFilter;
};

export function filterProducts(
  list: Product[],
  filters: ProductFilters
): Product[] {
  let result = list;

  const q = filters.q?.trim().toLowerCase();
  if (q) {
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  if (filters.category && filters.category !== "all") {
    result = result.filter((p) => p.category === filters.category);
  }

  if (filters.price && filters.price !== "all") {
    if (filters.price === "free") {
      result = result.filter((p) => p.price === 0);
    } else {
      result = result.filter((p) => p.price > 0);
    }
  }

  return result;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getRelatedProducts(
  currentSlug: string,
  limit: number = 3
): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
