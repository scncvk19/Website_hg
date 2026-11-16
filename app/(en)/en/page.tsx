import Link from "next/link";
import { ContactBand, SectionHeading, ServiceCards } from "@/components/Site";
import Icon from "@/components/Icon";
import Credentials from "@/components/Credentials";
import ITConcept from "@/components/ITConcept";
import ITApproach from "@/components/ITApproach";
import { faqsEn as faqs } from "@/lib/content-en";

export default function Home() {
  return <>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot"/> IT partner for Eberbach & Rhine-Neckar</p>
        <h1>IT that works.<br/><span>Personal and secure.</span></h1>
        <p>We support businesses and private customers with their IT, protect data and help identify risks early. On site and remotely, with solutions tailored to your needs.</p>
        <div className="actions"><Link className="button" href="/en/contact">Free initial consultation <Icon name="arrow"/></Link><Link className="button button-outline" href="/en/services">Our services</Link></div>
        <div className="hero-points"><span><Icon name="check"/> Local point of contact</span><span><Icon name="check"/> Clear advice</span><span><Icon name="check"/> Tailored solutions</span></div>
      </div>
      <ITConcept lang="en"/>
    </div></section>
    <ITApproach lang="en"/>
    <section className="section" id="services"><div className="container"><SectionHeading eyebrow="Our services" title="Your IT. In good hands." text="From day-to-day support to secure infrastructure, we tailor our services to your needs."/><ServiceCards lang="en"/></div></section>
    
    <section className="section"><div className="container"><SectionHeading eyebrow="Why HG-Systeme" title="Technology with a personal point of contact." text="We combine practical IT experience with attention to your day-to-day operations."/><div className="values-grid">{[["pin","Local to you","Eberbach and Rhine-Neckar – nearby, with personal advice."],["support","Clear and direct","We explain options and limitations instead of leaving you with technical jargon."],["leaf","Economical thinking","Use existing technology wisely, modernise where it matters and provide long-term support."]].map(([icon,title,text])=><article key={title} className="value"><Icon name={icon}/><h3>{title}</h3><p>{text}</p></article>)}</div><Link className="text-link" href="/en/about">Get to know HG-Systeme <Icon name="arrow"/></Link></div></section>
    <section className="section section-soft"><div className="container narrow"><SectionHeading eyebrow="Good to know" title="Frequently asked questions"/><div className="faq-list">{faqs.slice(0,4).map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div><Link href="/en/guide" className="text-link">More questions and IT tips <Icon name="arrow"/></Link></div></section>
    <Credentials lang="en" /><ContactBand lang="en"/>
  </>;
}
