import Link from "next/link";
import { PageIntro } from "@/components/Site";
export default function NotFound() {
  return <><PageIntro eyebrow="404" title="Diese Seite wurde nicht gefunden." text="Die gewünschte Seite ist nicht verfügbar. Über die Startseite finden Sie unsere Leistungen und Kontaktmöglichkeiten."/><section className="section"><div className="container"><Link href="/" className="button">Zur Startseite</Link></div></section></>;
}
