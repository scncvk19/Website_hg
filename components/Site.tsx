import Link from "next/link";
import { company, services } from "@/lib/content";
import { servicesEn } from "@/lib/content-en";
import { routes, type Language } from "@/lib/locale";
import Icon from "@/components/Icon";
import LanguageSwitch from "@/components/LanguageSwitch";

// Lokales Firmenlogo für beide Sprachen und alle Seiten.
const logoUrl = "/images/branding/hg-systeme-logo.png";
const copy = {
 de: { nav:["Leistungen","Über uns","Ratgeber","Kontakt"], preview:"Interner Website-Entwurf · Noch nicht zur Veröffentlichung freigegeben", brand:"HG-Systeme – Startseite", navigation:"Hauptnavigation", mobile:"Mobile Navigation", menu:"Menü", open:"Navigation öffnen", consultation:"Erstgespräch", existing:"Bestandskunden-Support", tagline:"Mit uns immer sicher vernetzt!", region:"IT-Dienstleistungen aus Eberbach.", company:"Unternehmen", guide:"Ratgeber & FAQ", customers:"Bestandskunden", legal:"Impressum", privacy:"Datenschutz", draft:"Interner Entwurf", more:"Mehr erfahren", bandLabel:"Persönlich. Regional. Verständlich.", bandTitle:"Was können wir für Ihre IT tun?", bandText:"Erzählen Sie uns, was Sie beschäftigt. Gemeinsam finden wir einen sinnvollen nächsten Schritt.", bandButton:"Erstgespräch vereinbaren" },
 en: { nav:["Services","About us","IT guide","Contact"], preview:"Internal website draft · Not approved for publication", brand:"HG-Systeme – Home", navigation:"Main navigation", mobile:"Mobile navigation", menu:"Menu", open:"Open navigation", consultation:"Initial consultation", existing:"Existing customer support", tagline:"Stay securely connected with us!", region:"IT services from Eberbach.", company:"Company", guide:"IT guide & FAQ", customers:"Existing customers", legal:"Legal notice", privacy:"Privacy", draft:"Internal draft", more:"Learn more", bandLabel:"Personal. Regional. Clear.", bandTitle:"How can we help with your IT?", bandText:"Tell us what you need. Together we will find a sensible next step.", bandButton:"Arrange a consultation" }
} as const;
const navRoutes = [routes.services, routes.about, routes.guide, routes.contact];
export function Brand({ lang = "de" }: { lang?: Language }) {
  return <Link href={routes.home[lang]} className="brand" aria-label={copy[lang].brand}><img className="official-logo" src={logoUrl} alt="HG-Systeme" width={2172} height={724}/></Link>;
}
export function Header({ lang = "de" }: { lang?: Language }) {
  const t = copy[lang];
  return <><div className="preview-bar">{t.preview}</div><header className="site-header"><div className="container header-inner"><Brand lang={lang}/>
    <nav className="desktop-nav" aria-label={t.navigation}>{navRoutes.map((r,i)=><Link key={r[lang]} href={r[lang]}>{t.nav[i]}</Link>)}</nav>
    <Link className="button button-small header-cta" href={routes.contact[lang]}>{t.consultation}<Icon name="arrow"/></Link>
    <LanguageSwitch lang={lang}/>
    <details className="mobile-nav"><summary aria-label={t.open}><Icon name="menu"/> {t.menu}</summary><nav aria-label={t.mobile}>{navRoutes.map((r,i)=><Link key={r[lang]} href={r[lang]}>{t.nav[i]}</Link>)}<Link href={routes.contact[lang]+"#support"}>{t.existing}</Link></nav></details>
  </div></header></>;
}
export function Footer({ lang = "de" }: { lang?: Language }) {
  const t=copy[lang], items=lang==="de"?services:servicesEn;
  return <footer className="footer"><div className="container"><div className="footer-grid">
    <div><Brand lang={lang}/><p>{t.tagline}<br/>{t.region}</p></div>
    <div><h2>{t.nav[0]}</h2>{items.map(s=><Link key={s.slug} href={routes.services[lang]+"/"+s.slug}>{s.title}</Link>)}</div>
    <div><h2>{t.company}</h2><Link href={routes.about[lang]}>{t.nav[1]}</Link><Link href={routes.certificates[lang]}>{lang==="de"?"Zertifikate":"Certificates"}</Link><Link href={routes.guide[lang]}>{t.guide}</Link><Link href={routes.contact[lang]}>{t.nav[3]}</Link><Link href={routes.contact[lang]+"#support"}>{t.customers}</Link><a href={company.linkedin} rel="noopener noreferrer">LinkedIn</a></div>
    <div><h2>{t.nav[3]}</h2><address>{company.name}<br/>{company.street}<br/>{company.city}</address><a href={"tel:"+company.tel}>{company.phone}</a><a href={"mailto:"+company.email}>{company.email}</a></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} HG-Systeme e.K. · {t.draft}</span><div><Link href={routes.legal[lang]}>{t.legal}</Link><Link href={routes.privacy[lang]}>{t.privacy}</Link></div></div></div></footer>;
}
export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text&&<p className="muted">{text}</p>}</div>;
}
export function ServiceCards({ lang = "de" }: { lang?: Language }) {
  return <div className="service-grid">{(lang==="de"?services:servicesEn).map(s=><Link className="service-card" href={routes.services[lang]+"/"+s.slug} key={s.slug}><span className="icon-tile"><Icon name={s.icon}/></span><h3>{s.title}</h3><p>{s.subtitle}</p><span className="card-link">{copy[lang].more}<Icon name="arrow"/></span></Link>)}</div>;
}
export function ContactBand({ lang = "de" }: { lang?: Language }) {
  const t=copy[lang];
  return <section className="section"><div className="container"><div className="contact-band"><div><p className="eyebrow">{t.bandLabel}</p><h2>{t.bandTitle}</h2><p>{t.bandText}</p></div><Link href={routes.contact[lang]} className="button button-light">{t.bandButton}<Icon name="arrow"/></Link></div></div></section>;
}
export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}
