import Link from "next/link";
import { ContactBand, SectionHeading, ServiceCards } from "@/components/Site";
import Icon from "@/components/Icon";
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
      <div className="hero-visual" aria-label="Illustration: Zusammenspiel der IT-Leistungsbereiche">
        <div className="visual-top"><span className="visual-label"><span className="eyebrow-dot"/> HG-SYSTEME · IT-KONZEPT</span><Icon name="network"/></div>
        <div className="network-art" aria-hidden="true"><div className="network-lines"/><div className="node node-a"><Icon name="database"/><span>Backup</span></div><div className="node node-b"><Icon name="network"/><span>Netzwerk</span></div><div className="node node-center"><Icon name="shield"/><span>Ihre Firmen-IT</span></div><div className="node node-c"><Icon name="support"/><span>Support</span></div><div className="node node-d"><Icon name="training"/><span>Awareness</span></div></div>
        <div className="visual-bottom"><span>Ein Ansprechpartner. Zusammenhängende Lösungen.</span><span className="visual-tag">REGIONAL</span></div>
      </div>
    </div></section>
    <div className="trust-strip"><div className="container trust-inner"><span>Erfahrung in der</span><strong>Medizin</strong><span className="trust-divider"/><strong>Automobilbranche</strong><span className="trust-divider"/><strong>Industrie</strong></div></div>
    <section className="section" id="leistungen"><div className="container"><SectionHeading eyebrow="Unsere Leistungen" title="Ihre IT. Gut betreut." text="Von der täglichen Unterstützung bis zur sicheren Infrastruktur: Wir stimmen die Leistungen auf Ihr Unternehmen ab."/><ServiceCards/></div></section>
    <section className="section section-soft"><div className="container feature-grid"><div className="feature-art"><span className="icon-tile feature-icon"><Icon name="shield"/></span><p className="eyebrow">IT-Sicherheitscheck</p><h3>Wissen, wo Sie stehen.</h3><div className="check-rows">{["Datensicherung & Restore","Firewall & Fernzugänge","Updates & Benutzerrechte","E-Mail & Notfallorganisation"].map(t=><div key={t}><Icon name="check"/>{t}</div>)}</div><p className="visual-note">Beispielhafte Prüffelder · keine Live-Bewertung</p></div><div className="feature-copy"><p className="eyebrow">Der erste Schritt</p><h2>Wie sicher ist Ihre Firmen-IT?</h2><p>Im kostenlosen Erstgespräch klären wir Ihre wichtigsten Fragen. Falls eine technische Prüfung sinnvoll ist, vereinbaren wir Umfang und Ergebnis vorab.</p><div className="steps-list"><div><span>01</span><div><h3>Kennenlernen</h3><p>20–30 Minuten für Ihre Fragen und eine erste Orientierung.</p></div></div><div><span>02</span><div><h3>Gezielt prüfen</h3><p>Kostenpflichtiger Business-Check mit vereinbarten Systemen und Nachweisen.</p></div></div><div><span>03</span><div><h3>Maßnahmen besprechen</h3><p>Konkrete Empfehlungen, verständlich erklärt.</p></div></div></div><Link href="/leistungen/sicherheitscheck" className="text-link">Sicherheitscheck kennenlernen <Icon name="arrow"/></Link></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Warum HG-Systeme" title="Technik mit persönlichem Ansprechpartner." text="Wir verbinden praktische IT-Erfahrung mit dem Blick auf Ihren laufenden Betrieb."/><div className="values-grid">{[["pin","Aus der Region","Eberbach und Rhein-Neckar – kurze Wege und persönliche Beratung."],["support","Verständlich und direkt","Wir erklären Möglichkeiten und Grenzen, statt Sie mit Fachbegriffen allein zu lassen."],["leaf","Wirtschaftlich gedacht","Vorhandene Technik sinnvoll nutzen, gezielt modernisieren und langfristig betreuen."]].map(([icon,title,text])=><article key={title} className="value"><Icon name={icon}/><h3>{title}</h3><p>{text}</p></article>)}</div><Link className="text-link" href="/ueber-uns">HG-Systeme kennenlernen <Icon name="arrow"/></Link></div></section>
    <section className="section section-soft"><div className="container narrow"><SectionHeading eyebrow="Gut zu wissen" title="Häufige Fragen"/><div className="faq-list">{faqs.slice(0,4).map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div><Link href="/ratgeber" className="text-link">Weitere Fragen und IT-Tipps <Icon name="arrow"/></Link></div></section>
    <ContactBand/>
  </>;
}
