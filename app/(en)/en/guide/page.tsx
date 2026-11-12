import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageIntro, SectionHeading } from "@/components/Site";
import { faqsEn as faqs } from "@/lib/content-en";
export const metadata: Metadata = { title: "IT guide & frequently asked questions" };
const tips = [
  ["A backup is not the same as recovery","A successful backup shows that a job ran. An agreed restore test also demonstrates that the required data can actually be recovered.","backup"],
  ["New bank details? Verify independently.","Verify unusual payment instructions using a telephone number you already know. Do not trust the number in a suspicious message.","security-training"],
  ["Unexpected MFA prompt","If you did not initiate a login, do not approve the request. Notify your IT contact through the agreed reporting channel.","security-check"]
];
export default function Page() {
  return <><PageIntro eyebrow="IT guide" title="IT security in everyday work." text="Clear advice for business owners and employees. Small steps can make a big difference."/><section className="section"><div className="container"><SectionHeading eyebrow="Practical tips" title="What you can do today."/><div className="values-grid">{tips.map(([title,text,slug])=><article className="value" key={slug}><h3>{title}</h3><p>{text}</p><Link className="text-link" href={"/en/services/"+slug}>Explore the related service →</Link></article>)}</div></div></section><section className="section section-soft"><div className="container narrow"><SectionHeading eyebrow="FAQ" title="Your questions – our answers."/><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section><ContactBand lang="en"/></>;
}
