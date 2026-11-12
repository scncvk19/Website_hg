import Link from "next/link";
import { PageIntro } from "@/components/Site";
export default function NotFound() {
  return <><PageIntro eyebrow="404" title="This page could not be found." text="The requested page is unavailable. Visit our homepage to find services and contact details."/><section className="section"><div className="container"><Link href="/en" className="button">Back to homepage</Link></div></section></>;
}
