import type { MetadataRoute } from "next";
import { navLinks, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...navLinks.map((l) => ({
      url: `${site.url}${l.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: l.href === "/partner" || l.href === "/pink-legacy" ? 0.9 : 0.7,
    })),
  ];
}
