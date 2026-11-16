import type { Metadata } from "next";
import { publicIndexing, siteUrl } from "@/lib/seo";
import type { ReactNode } from "react";
import { Header, Footer } from "@/components/Site";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: { default: "HG-Systeme | IT-Betreuung & IT-Sicherheit in Eberbach", template: "%s | HG-Systeme" },
  description: "Persönliche IT-Dienstleistungen für Geschäftskunden im Raum Eberbach und Rhein-Neckar: Support, IT-Sicherheit, Backup, Firewall und Schulungen.",
  metadataBase: new URL(siteUrl),
  robots: { index: publicIndexing, follow: publicIndexing },
  icons: { icon: { url: "/images/branding/hg-systeme-favicon.png", type: "image/png", sizes: "64x64" } }
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="de"><body><a className="skip-link" href="#main">Zum Inhalt springen</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
