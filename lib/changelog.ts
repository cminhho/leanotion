export type ChangelogEntry = {
  date: string;
  title: string;
  items: string[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    date: "2024-01-15",
    title: "New 2024 templates",
    items: [
      "Updated Ultimate Dashboard with improved task views",
      "Finance Master: new budget categories and charts",
      "Life OS Mobile: mobile-optimized layouts",
    ],
  },
  {
    date: "2023-11-01",
    title: "Life OS Mobile launch",
    items: [
      "New mobile-first template for habits and goals",
      "Gratitude journal and habit tracking",
    ],
  },
  {
    date: "2023-08-20",
    title: "Shop and site updates",
    items: [
      "Fourthwall shop integration",
      "Dark mode support",
      "Faster loading and better accessibility",
    ],
  },
];
