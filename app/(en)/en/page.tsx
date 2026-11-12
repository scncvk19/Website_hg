import Link from "next/link";
import { ContactBand, SectionHeading, ServiceCards } from "@/components/Site";
import Icon from "@/components/Icon";
import Credentials from "@/components/Credentials";
import { faqsEn as faqs } from "@/lib/content-en";

export default function Home() {
  return <>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot"/> IT partner for Eberbach & Rhine-Neckar</p>
        <h1>IT that works.<br/><span>Personal and secure.</span></h1>
        <p>We support your business IT, protect your data and help identify risks early. On site and remotely, so you can focus on your business.</p>
        <div className="actions"><Link className="button" href="/en/contact">Free initial consultation <Icon name="arrow"/></Link><Link className="button button-outline" href="/en/services">Our services</Link></div>
        <div className="hero-points"><span><Icon name="check"/> Local point of contact</span><span><Icon name="check"/> Clear advice</span><span><Icon name="check"/> Tailored solutions</span></div>
      </div>
      <div className="hero-visual" aria-label="Illustration: how our IT services work together">
        <div className="visual-top"><span className="visual-label"><span className="eyebrow-dot"/> HG-SYSTEME · IT CONCEPT</span><Icon name="network"/></div>
        <div className="network-art" aria-hidden="true"><div className="network-lines"/><div className="node node-a"><Icon name="database"/><span>Backup</span></div><div className="node node-b"><Icon name="network"/><span>Network</span></div><div className="node node-center"><Icon name="shield"/><span>Your business IT</span></div><div className="node node-c"><Icon name="support"/><span>Support</span></div><div className="node node-d"><Icon name="training"/><span>Awareness</span></div></div>
        <div className="visual-bottom"><span>One point of contact. Connected solutions.</span><span className="visual-tag">LOCAL</span></div>
      </div>
    </div></section>
    <div className="trust-strip"><div className="container trust-inner"><span>Experience in</span><strong>Healthcare</strong><span className="trust-divider"/><strong>Automotive</strong><span className="trust-divider"/><strong>Industry</strong></div></div>
    <section className="section" id="services"><div className="container"><SectionHeading eyebrow="Our services" title="Your IT. In good hands." text="From day-to-day support to secure infrastructure, we tailor our services to your business."/><ServiceCards lang="en"/></div></section>
    <section className="section section-soft"><div className="container feature-grid"><div className="feature-art"><span className="icon-tile feature-icon"><Icon name="shield"/></span><p className="eyebrow">IT security assessment</p><h3>Know where you stand.</h3><div className="check-rows">{["Backup & recovery","Firewall & remote access","Updates & user permissions","Email & incident procedures"].map(t=><div key={t}><Icon name="check"/>{t}</div>)}</div><p className="visual-note">Example assessment areas · not a live evaluation</p></div><div className="feature-copy"><p className="eyebrow">The first step</p><h2>How secure is your business IT?</h2><p>In a free initial consultation we clarify your key questions. If a technical assessment is useful, we agree its scope and deliverables in advance.</p><div className="steps-list"><div><span>01</span><div><h3>Get to know each other</h3><p>20–30 minutes for your questions and an initial orientation.</p></div></div><div><span>02</span><div><h3>Assess specific areas</h3><p>Paid business assessment covering agreed systems and evidence.</p></div></div><div><span>03</span><div><h3>Discuss measures</h3><p>Practical recommendations explained clearly.</p></div></div></div><Link href="/en/services/security-check" className="text-link">Explore the security assessment <Icon name="arrow"/></Link></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Why HG-Systeme" title="Technology with a personal point of contact." text="We combine practical IT experience with attention to your day-to-day operations."/><div className="values-grid">{[["pin","Local to you","Eberbach and Rhine-Neckar – nearby, with personal advice."],["support","Clear and direct","We explain options and limitations instead of leaving you with technical jargon."],["leaf","Economical thinking","Use existing technology wisely, modernise where it matters and provide long-term support."]].map(([icon,title,text])=><article key={title} className="value"><Icon name={icon}/><h3>{title}</h3><p>{text}</p></article>)}</div><Link className="text-link" href="/en/about">Get to know HG-Systeme <Icon name="arrow"/></Link></div></section>
    <section className="section section-soft"><div className="container narrow"><SectionHeading eyebrow="Good to know" title="Frequently asked questions"/><div className="faq-list">{faqs.slice(0,4).map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div><Link href="/en/guide" className="text-link">More questions and IT tips <Icon name="arrow"/></Link></div></section>
    <Credentials lang="en" /><ContactBand lang="en"/>
  </>;
}
