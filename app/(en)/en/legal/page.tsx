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
        Owner: Michael Gray (responsible under section 18 of the German Interstate Media Treaty, MStV)<br/>
        {company.street}<br/>{company.city}<br/>Germany
      </p>
      <p>Phone: <a href={"tel:"+company.tel}>+49 (0) 6271 77 170</a><br/>
        Email: <a href={"mailto:"+company.email}>{company.email}</a>
      </p>
      <LocationMap lang="en"/>
      <div className="notice"><strong>Internal review status</strong><p>The information from the existing <a href="https://www.hg-systeme.de/IMPRESSUM/">legal notice</a> has been carried over; the email address has been updated. Confirm and complete the commercial register, registration number, VAT identification number where applicable, and other mandatory information before publication. Not legally approved.</p></div>
    </div></section>
  </>;
}
