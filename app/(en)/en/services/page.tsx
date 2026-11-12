import type { Metadata } from "next";
import { PageIntro, ServiceCards, ContactBand } from "@/components/Site";
export const metadata: Metadata = { title: "Our IT services" };
export default function Page() {
  return <><PageIntro eyebrow="Our services" title="IT solutions for your business." text="Personal support, security and reliable infrastructure, tailored to your requirements."/><section className="section"><div className="container"><ServiceCards lang="en"/></div></section><ContactBand lang="en"/></>;
}
