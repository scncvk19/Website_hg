import type { Metadata } from "next";
import { PageIntro } from "@/components/Site";
import { company } from "@/lib/content";
export const metadata: Metadata = { title: "Impressum – Entwurf" };
export default function Page() {
  return <><PageIntro eyebrow="Rechtliche Informationen" title="Impressum" text="Interner Entwurf – vor Veröffentlichung rechtlich und sachlich freigeben."/><section className="section"><div className="container narrow prose"><h2>Anbieter</h2><p>{company.name}<br/>Inhaber: Michael Gray<br/>{company.street}<br/>{company.city}</p><p>Telefon: <a href={"tel:"+company.tel}>{company.phone}</a><br/>E-Mail: <a href={"mailto:"+company.email}>{company.email}</a></p><div className="notice"><strong>Offene Pflichtangaben</strong><p>Handelsregister, Registernummer, gegebenenfalls Umsatzsteuer-ID und weitere erforderliche Angaben intern oder amtlich bestätigen und vervollständigen. Kein rechtlich freigegebenes Impressum.</p></div><p>Bestehendes <a href="https://www.hg-systeme.de/IMPRESSUM/">Impressum der Firmenwebsite</a> als Referenz.</p></div></section></>;
}
