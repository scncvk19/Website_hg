import type { Metadata } from "next";
import { PageIntro } from "@/components/Site";
import LocationMap from "@/components/LocationMap";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Impressum" };
export default function Page() {
  return <>
    <PageIntro eyebrow="Rechtliche Informationen" title="Impressum" text="Angaben zum Unternehmen und Kontakt."/>
    <section className="section"><div className="container narrow prose">
      <h2>Anbieter</h2>
      <p><strong>{company.name}</strong><br/>
        Inhaber: Michael Gray (verantwortlich nach § 18 MStV)<br/>
        {company.street}<br/>{company.city}<br/>Deutschland
      </p>
      <p>Telefon: <a href={"tel:"+company.tel}>+49 (0) 6271 77 170</a><br/>
        E-Mail: <a href={"mailto:"+company.email}>{company.email}</a>
      </p>
      <LocationMap lang="de"/>
      <div className="notice"><strong>Interner Prüfstand</strong><p>Die Angaben aus dem bisherigen <a href="https://www.hg-systeme.de/IMPRESSUM/">Impressum</a> sind übernommen; die E-Mail-Adresse wurde auf Wunsch aktualisiert. Handelsregister, Registernummer, ggf. USt-ID und sonstige Pflichtangaben vor Veröffentlichung bestätigen und ergänzen. Keine abschließende Rechtsfreigabe.</p></div>
    </div></section>
  </>;
}
