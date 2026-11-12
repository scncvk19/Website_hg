import type { Metadata } from "next";
import { PageIntro } from "@/components/Site";
import { company } from "@/lib/content";
export const metadata: Metadata = { title: "Legal notice – draft" };
export default function Page() {
  return <><PageIntro eyebrow="Legal information" title="Legal notice" text="Internal draft – subject to legal and factual approval before publication."/><section className="section"><div className="container narrow prose"><h2>Provider</h2><p>{company.name}<br/>Owner: Michael Gray<br/>{company.street}<br/>{company.city}</p><p>Phone: <a href={"tel:"+company.tel}>{company.phone}</a><br/>Email: <a href={"mailto:"+company.email}>{company.email}</a></p><div className="notice"><strong>Outstanding mandatory information</strong><p>Confirm and complete the commercial register, registration number, VAT identification number where applicable and any other mandatory details. This legal notice has not been legally approved.</p></div><p>Existing <a href="https://www.hg-systeme.de/IMPRESSUM/">legal notice on the company website</a> as a reference.</p></div></section></>;
}
