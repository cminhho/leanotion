export type Product = {
  slug: string;
  title: string;
  price: number;
  description: string;
  image: string;
  badge?: "Best Seller" | "New";
};

const SHOP_URL = "https://leanotion-shop.fourthwall.com";

const IMAGE_BASE =
  "https://image.qwenlm.ai/public_source/3f2012d7-94b2-4d84-a13d-7f2ec5e17675";

export const products: Product[] = [
  {
    slug: "ultimate-dashboard",
    title: "Ultimate Dashboard",
    price: 19,
    description:
      "Your life's command center. Manage tasks, schedules, notes, and habits in one unified interface.",
    image: `${IMAGE_BASE}/17c517c3b-ec0d-4193-8892-d933b615415e.png`,
    badge: "Best Seller",
  },
  {
    slug: "finance-master",
    title: "Finance Master",
    price: 15,
    description:
      "Track expenses, budget planning, and personal finance analysis with intuitive visual charts.",
    image: `${IMAGE_BASE}/1021964c3-9a4f-4335-a7ee-e1758607404f.png`,
  },
  {
    slug: "life-os-mobile",
    title: "Life OS Mobile",
    price: 12,
    description:
      "Mobile-optimized version. Track habits, goals, and gratitude journal anytime, anywhere.",
    image: `${IMAGE_BASE}/1159e781a-ec10-4e0f-8e07-9d1878882390.png`,
    badge: "New",
  },
];

export const SHOP_URL_CONST = SHOP_URL;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
