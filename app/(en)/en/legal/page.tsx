import type { Metadata } from "next";
import { PageIntro } from "@/components/Site";
import LocationMap from "@/components/LocationMap";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Legal notice" };
export default function Page() {
  return <>
    <PageIntro eyebrow="Legal information" title="Legal notice" text="Company information and contact details."/>
    <section className="section"><div className="container narrow prose">
      <h2>Provider</h2>
      <p><strong>{company.name}</strong><br/>
        Owner: {company.owner}<br/>
        {company.street}<br/>{company.city}<br/>Germany
      </p>
      <p>Phone: <a href={"tel:"+company.tel}>+49 (0) 6271 77 170</a><br/>
        Email: <a href={"mailto:"+company.email}>{company.email}</a>
      </p>
      <h2>Commercial register</h2>
      <p>Registration court: {company.registerCourt} (Mannheim Local Court)<br/>
        Registration number: {company.registerNumber}</p>
      <h2>VAT identification number</h2>
      <p>Under section 27a of the German VAT Act (UStG): {company.vatId}</p>
      <h2>Person responsible for editorial content under section 18(2) MStV</h2>
      <p>{company.owner}<br/>{company.street}<br/>{company.city}, Germany</p>
      <LocationMap lang="en"/>
    </div></section>
  </>;
}
