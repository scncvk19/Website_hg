import type { Metadata } from "next";
import { publicIndexing, siteUrl } from "@/lib/seo";
import type { ReactNode } from "react";
import { Header, Footer } from "@/components/Site";
import "@/app/globals.css";
export const metadata: Metadata = {
  title: { default: "HG-Systeme | IT support & security in Eberbach", template: "%s | HG-Systeme" },
  description: "Personal IT services for businesses and private customers in Eberbach and the Rhine-Neckar region.",
  metadataBase: new URL(siteUrl),
  robots: { index: publicIndexing, follow: publicIndexing }, icons: { icon: { url: "/images/branding/hg-systeme-favicon.png", type: "image/png", sizes: "64x64" } }
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header lang="en"/><main id="main">{children}</main><Footer lang="en"/></body></html>;
}
