import type { Metadata } from "next";
import { PageIntro, ServiceCards, ContactBand } from "@/components/Site";
export const metadata: Metadata = { title: "Unsere IT-Leistungen" };
export default function Page() {
  return <><PageIntro eyebrow="Unsere Leistungen" title="IT-Lösungen für Ihr Unternehmen." text="Persönlicher Support, Sicherheit und zuverlässige Infrastruktur – passend zu Ihren Anforderungen."/><section className="section"><div className="container"><ServiceCards/></div></section><ContactBand/></>;
}
