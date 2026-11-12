import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageIntro, SectionHeading } from "@/components/Site";
import { faqs } from "@/lib/content";
export const metadata: Metadata = { title: "IT-Ratgeber & häufige Fragen" };
const tips = [
  ["Backup ist nicht gleich Wiederherstellung","Eine erfolgreiche Sicherung zeigt, dass ein Job ausgeführt wurde. Ein vereinbarter Wiederherstellungstest liefert zusätzlich einen Nachweis, dass die benötigten Daten tatsächlich zurückgeholt werden können.","backup"],
  ["Neue Bankverbindung? Unabhängig nachfragen.","Ungewöhnliche Zahlungsanweisungen über eine bereits bekannte Telefonnummer verifizieren. Nicht auf die in der verdächtigen Nachricht angegebene Nummer vertrauen.","schulungen"],
  ["Unerwartete MFA-Anfrage","Wenn Sie keine Anmeldung ausgelöst haben, bestätigen Sie die Anfrage nicht. Informieren Sie Ihren IT-Ansprechpartner über den vereinbarten Meldeweg.","sicherheitscheck"]
];
export default function Page() {
  return <><PageIntro eyebrow="Ratgeber" title="IT-Sicherheit im Alltag." text="Verständliche Hinweise für Unternehmer und Mitarbeiter. Kleine Schritte können einen großen Unterschied machen."/><section className="section"><div className="container"><SectionHeading eyebrow="Praktische Tipps" title="Was Sie heute schon tun können."/><div className="values-grid">{tips.map(([title,text,slug])=><article className="value" key={slug}><h3>{title}</h3><p>{text}</p><Link className="text-link" href={"/leistungen/"+slug}>Passende Leistung ansehen →</Link></article>)}</div></div></section><section className="section section-soft"><div className="container narrow"><SectionHeading eyebrow="FAQ" title="Ihre Fragen – unsere Antworten."/><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section><ContactBand/></>;
}
