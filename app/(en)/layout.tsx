import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header, Footer } from "@/components/Site";
import "@/app/globals.css";
export const metadata: Metadata = {
  title: { default: "HG-Systeme | IT support & security in Eberbach", template: "%s | HG-Systeme" },
  description: "Personal IT services for businesses in Eberbach and the Rhine-Neckar region.",
  robots: { index: false, follow: false }, icons: { icon: "/icon.svg" }
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header lang="en"/><main id="main">{children}</main><Footer lang="en"/></body></html>;
}
