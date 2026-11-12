import Link from "next/link";
import { company, services } from "@/lib/content";
import Icon from "@/components/Icon";

// Vorläufige Bildquelle: öffentliches HG-Systeme-Unternehmensprofil. Vor Veröffentlichung durch freigegebene lokale Originaldatei ersetzen.
const logoUrl = "https://media.licdn.com/dms/image/v2/C4E0BAQECcN-vw3kdCg/company-logo_200_200/company-logo_200_200/0/1660038328244/hg_systeme_e_k_logo?e=2147483647&t=Jmf5pOW-VHLtiCgVRzWtGSJDbv9GvDDKAUefrBLwVDg&v=beta";

const navigation = [["Leistungen", "/leistungen"], ["Über uns", "/ueber-uns"], ["Ratgeber", "/ratgeber"], ["Kontakt", "/kontakt"]] as const;

export function Brand() {
  return <Link href="/" className="brand" aria-label="HG-Systeme – Startseite">
    <img className="official-logo" src={logoUrl} alt="HG-Systeme" width={180} height={82} referrerPolicy="no-referrer" />
  </Link>;
}
export function Header() {
  return <>
    <div className="preview-bar">Interner Website-Entwurf · Noch nicht zur Veröffentlichung freigegeben</div>
    <header className="site-header"><div className="container header-inner">
      <Brand/>
      <nav className="desktop-nav" aria-label="Hauptnavigation">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="button button-small header-cta" href="/kontakt">Erstgespräch <Icon name="arrow"/></Link>
      <details className="mobile-nav"><summary aria-label="Navigation öffnen"><Icon name="menu"/> Menü</summary><nav aria-label="Mobile Navigation">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="/kontakt#support">Bestandskunden-Support</a></nav></details>
    </div></header>
  </>;
}
export function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-grid">
      <div><Brand/><p>Mit uns immer sicher vernetzt!<br/>IT-Dienstleistungen aus Eberbach.</p></div>
      <div><h2>Leistungen</h2>{services.map(s => <Link key={s.slug} href={"/leistungen/" + s.slug}>{s.title}</Link>)}</div>
      <div><h2>Unternehmen</h2><Link href="/ueber-uns">Über uns</Link><Link href="/ratgeber">Ratgeber & FAQ</Link><Link href="/kontakt">Kontakt</Link><Link href="/kontakt#support">Bestandskunden</Link><a href={company.linkedin} rel="noopener noreferrer">LinkedIn</a></div>
      <div><h2>Kontakt</h2><address>{company.name}<br/>{company.street}<br/>{company.city}</address><a href={"tel:" + company.tel}>{company.phone}</a><a href={"mailto:" + company.email}>{company.email}</a></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} HG-Systeme e.K. · Interner Entwurf</span><div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div></div>
  </div></footer>;
}
export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="muted">{text}</p>}</div>;
}
export function ServiceCards() {
  return <div className="service-grid">{services.map(s => <Link className="service-card" href={"/leistungen/" + s.slug} key={s.slug}>
    <span className="icon-tile"><Icon name={s.icon}/></span><h3>{s.title}</h3><p>{s.subtitle}</p><span className="card-link">Mehr erfahren <Icon name="arrow"/></span>
  </Link>)}</div>;
}
export function ContactBand() {
  return <section className="section"><div className="container"><div className="contact-band">
    <div><p className="eyebrow">Persönlich. Regional. Verständlich.</p><h2>Was können wir für Ihre IT tun?</h2><p>Erzählen Sie uns, was Sie beschäftigt. Gemeinsam finden wir einen sinnvollen nächsten Schritt.</p></div>
    <Link href="/kontakt" className="button button-light">Erstgespräch vereinbaren <Icon name="arrow"/></Link>
  </div></div></section>;
}
export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}
