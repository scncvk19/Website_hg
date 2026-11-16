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
        Inhaber: {company.owner}<br/>
        {company.street}<br/>{company.city}<br/>Deutschland
      </p>
      <p>Telefon: <a href={"tel:"+company.tel}>+49 (0) 6271 77 170</a><br/>
        E-Mail: <a href={"mailto:"+company.email}>{company.email}</a>
      </p>
      <h2>Handelsregister</h2>
      <p>Registergericht: {company.registerCourt}<br/>
        Registernummer: {company.registerNumber}</p>
      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>Gemäß § 27a UStG: {company.vatId}</p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>{company.owner}<br/>{company.street}<br/>{company.city}</p>
      <LocationMap lang="de"/>
      <h2>Weitere rechtliche Hinweise</h2>
      <h3>Haftung für Inhalte</h3><p>Wir erstellen unsere Informationen sorgfältig, können aber ihre Richtigkeit, Vollständigkeit und Aktualität nicht garantieren. Für eigene Inhalte gelten die gesetzlichen Verantwortlichkeiten. Es besteht keine allgemeine Pflicht, fremde übermittelte oder gespeicherte Informationen zu überwachen. Gesetzliche Lösch- und Sperrpflichten bleiben bestehen; bei konkreten Hinweisen auf Rechtsverletzungen entfernen wir betroffene Inhalte unverzüglich.</p>
      <h3>Haftung für Links</h3><p>Für externe Seiten sind deren Betreiber verantwortlich. Bei der Verlinkung prüfen wir erkennbare Rechtsverstöße. Eine laufende Kontrolle ohne konkreten Anlass ist nicht zumutbar; nach Kenntnis rechtswidriger Inhalte entfernen wir betroffene Links.</p>
      <h3>Urheberrecht</h3><p>Eigene Inhalte und Werke sind nach deutschem Urheberrecht geschützt. Nutzungen außerhalb gesetzlicher Erlaubnisse erfordern die schriftliche Zustimmung der Rechteinhaber. Kopien und Downloads sind nur privat und nicht kommerziell gestattet. Rechte Dritter werden berücksichtigt und fremde Inhalte gekennzeichnet. Bitte melden Sie Rechtsverletzungen; wir entfernen betroffene Inhalte nach Kenntnis.</p>
      <h3>Unverlangte Werbung</h3><p>Wir widersprechen unverlangter Werbung an veröffentlichte Kontaktdaten und behalten rechtliche Schritte vor.</p>
    </div></section>
  </>;
}
