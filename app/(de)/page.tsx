import Link from "next/link";
import { ContactBand, SectionHeading, ServiceCards } from "@/components/Site";
import Icon from "@/components/Icon";
import Credentials from "@/components/Credentials";
import ITConcept from "@/components/ITConcept";
import ITApproach from "@/components/ITApproach";
import { faqs } from "@/lib/content";

export default function Home() {
  return <>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot"/> IT-Partner für Eberbach & Rhein-Neckar</p>
        <h1>IT, die funktioniert.<br/><span>Persönlich und sicher.</span></h1>
        <p>Wir betreuen Ihre Firmen-IT, schützen Ihre Daten und helfen, Risiken frühzeitig zu erkennen. Persönlich vor Ort und per Fernsupport – damit Sie sich auf Ihr Geschäft konzentrieren können.</p>
        <div className="actions"><Link className="button" href="/kontakt">Kostenloses Erstgespräch <Icon name="arrow"/></Link><Link className="button button-outline" href="/leistungen">Unsere Leistungen</Link></div>
        <div className="hero-points"><span><Icon name="check"/> Regionaler Ansprechpartner</span><span><Icon name="check"/> Verständliche Beratung</span><span><Icon name="check"/> Individuelle Lösungen</span></div>
      </div>
      <ITConcept lang="de"/>
    </div></section>
    <ITApproach lang="de"/>
    <section className="section" id="leistungen"><div className="container"><SectionHeading eyebrow="Unsere Leistungen" title="Ihre IT. Gut betreut." text="Von der täglichen Unterstützung bis zur sicheren Infrastruktur: Wir stimmen die Leistungen auf Ihr Unternehmen ab."/><ServiceCards/></div></section>
    
    <section className="section"><div className="container"><SectionHeading eyebrow="Warum HG-Systeme" title="Technik mit persönlichem Ansprechpartner." text="Wir verbinden praktische IT-Erfahrung mit dem Blick auf Ihren laufenden Betrieb."/><div className="values-grid">{[["pin","Aus der Region","Eberbach und Rhein-Neckar – kurze Wege und persönliche Beratung."],["support","Verständlich und direkt","Wir erklären Möglichkeiten und Grenzen, statt Sie mit Fachbegriffen allein zu lassen."],["leaf","Wirtschaftlich gedacht","Vorhandene Technik sinnvoll nutzen, gezielt modernisieren und langfristig betreuen."]].map(([icon,title,text])=><article key={title} className="value"><Icon name={icon}/><h3>{title}</h3><p>{text}</p></article>)}</div><Link className="text-link" href="/ueber-uns">HG-Systeme kennenlernen <Icon name="arrow"/></Link></div></section>
    <section className="section section-soft"><div className="container narrow"><SectionHeading eyebrow="Gut zu wissen" title="Häufige Fragen"/><div className="faq-list">{faqs.slice(0,4).map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div><Link href="/ratgeber" className="text-link">Weitere Fragen und IT-Tipps <Icon name="arrow"/></Link></div></section>
    <Credentials lang="de" /><ContactBand/>
  </>;
}
