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
      <h2>Further legal information</h2>
      <h3>Liability for content</h3><p>We prepare information carefully but cannot guarantee its accuracy, completeness or currency. Statutory responsibilities apply to our own content. There is no general obligation to monitor third-party information transmitted or stored; statutory removal and blocking obligations remain. We promptly remove unlawful content when made aware of specific violations.</p>
      <h3>Liability for links</h3><p>External website operators are responsible for their content. We check for apparent violations when linking. Continuous review without specific indications is unreasonable; we remove affected links once unlawful content becomes known.</p>
      <h3>Copyright</h3><p>Our content is protected by German copyright law. Uses beyond statutory permissions require written permission. Copies and downloads are limited to private, non-commercial use. We respect third-party rights and identify third-party material. Please report infringements; we remove affected content when notified.</p>
      <h3>Unsolicited advertising</h3><p>We object to unsolicited advertising sent to published contact details and reserve legal remedies.</p>
    </div></section>
  </>;
}
