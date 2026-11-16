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
    </div></section>
  </>;
}
