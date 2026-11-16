// Nur öffentliche Produktionsdeployments dürfen indexiert werden.
export const siteUrl = "https://www.hg-systeme.de";
export const publicIndexing = process.env.VERCEL_ENV === "production" ||
  (!process.env.VERCEL_ENV && process.env.HG_PUBLIC_INDEXING === "true");
