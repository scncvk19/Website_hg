import type { MetadataRoute } from "next";
import { routes } from "@/lib/locale";
import { publicIndexing, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicIndexing) return [];
  return Object.entries(routes).filter(([key]) => key !== "thanks").flatMap(([, pair]) => {
    const de = new URL(pair.de, siteUrl).href;
    const en = new URL(pair.en, siteUrl).href;
    return [de, en].map(url => ({
      url,
      alternates: { languages: { de, en, "x-default": de } }
    }));
  });
}
