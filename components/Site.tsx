import Link from "next/link";
import { company, services } from "@/lib/content";
import { servicesEn } from "@/lib/content-en";
import { routes, type Language } from "@/lib/locale";
import Icon from "@/components/Icon";
import LanguageSwitch from "@/components/LanguageSwitch";
import SocialLinks from "@/components/SocialLinks";
import styles from "./navigation.module.css";

// Lokales Firmenlogo für beide Sprachen und alle Seiten.
const logoUrl = "/images/branding/hg-systeme-logo.png";
const copy = {
 de: { nav:["Willkommen","Leistungen","Über uns","Beiträge","Ratgeber","Kontakt"], brand:"HG-Systeme – Startseite", navigation:"Hauptnavigation", mobile:"Mobile Navigation", menu:"Menü", open:"Navigation öffnen", consultation:"Erstgespräch", existing:"Bestandskunden-Support", tagline:"Mit uns immer sicher vernetzt!", region:"IT-Dienstleistungen aus Eberbach.", company:"Unternehmen", guide:"Ratgeber & FAQ", customers:"Bestandskunden", legal:"Impressum", privacy:"Datenschutz", more:"Mehr erfahren", bandLabel:"Persönlich. Regional. Verständlich.", bandTitle:"Was können wir für Ihre IT tun?", bandText:"Erzählen Sie uns, was Sie beschäftigt. Gemeinsam finden wir einen sinnvollen nächsten Schritt.", bandButton:"Erstgespräch vereinbaren" },
 en: { nav:["Welcome","Services","About us","News","IT guide","Contact"], brand:"HG-Systeme – Home", navigation:"Main navigation", mobile:"Mobile navigation", menu:"Menu", open:"Open navigation", consultation:"Initial consultation", existing:"Existing customer support", tagline:"Stay securely connected with us!", region:"IT services from Eberbach.", company:"Company", guide:"IT guide & FAQ", customers:"Existing customers", legal:"Legal notice", privacy:"Privacy", more:"Learn more", bandLabel:"Personal. Regional. Clear.", bandTitle:"How can we help with your IT?", bandText:"Tell us what you need. Together we will find a sensible next step.", bandButton:"Arrange a consultation" }
} as const;
const navRoutes = [routes.home, routes.services, routes.about, routes.news, routes.guide, routes.contact];
export function Brand({ lang = "de" }: { lang?: Language }) {
  return <Link href={routes.home[lang]} className="brand" aria-label={copy[lang].brand}><img className="official-logo" src={logoUrl} alt="HG-Systeme" width={2172} height={724}/></Link>;
}
export function Header({ lang = "de" }: { lang?: Language }) {
  const t = copy[lang];
  return <header className={"site-header "+styles.header}><div className="container header-inner"><Brand lang={lang}/>
    <nav className="desktop-nav" aria-label={t.navigation}>{navRoutes.map((r,i)=><Link key={r[lang]} href={r[lang]}>{t.nav[i]}</Link>)}</nav>
    <Link className={styles.mobileHome} href={routes.home[lang]}>{t.nav[0]}</Link>
    <div className={styles.desktopSocial}><SocialLinks lang={lang}/></div>
    <Link className="button button-small header-cta" href={routes.contact[lang]}>{t.consultation}<Icon name="arrow"/></Link>
    <LanguageSwitch lang={lang}/>
    <details className="mobile-nav"><summary aria-label={t.open}><Icon name="menu"/> {t.menu}</summary><nav aria-label={t.mobile}>{navRoutes.map((r,i)=><Link key={r[lang]} href={r[lang]}>{t.nav[i]}</Link>)}<Link href={routes.contact[lang]+"#support"}>{t.existing}</Link><div className={styles.mobileSocial}><SocialLinks lang={lang} labels/></div></nav></details>
  </div></header>;
}
export function Footer({ lang = "de" }: { lang?: Language }) {
  const t=copy[lang], items=lang==="de"?services:servicesEn;
  const de=lang==="de";
  return <footer className={styles.footer}><div className="container">
    <div className={styles.footerIntro}>
      <div className={styles.footerBrand}><Brand lang={lang}/><p>{t.tagline}<br/>{t.region}</p></div>
      <div className={styles.footerQuick}>
        <a className={styles.quickPhone} href={"tel:"+company.tel}><Icon name="phone"/>{company.phone}</a>
        <SocialLinks lang={lang}/>
      </div>
    </div>
    <div className={styles.footerGroups}>
      <details className={styles.footerGroup}>
        <summary>{t.nav[1]}<Icon name="chevron-down"/></summary>
        <div className={styles.footerLinks}>{items.map(s=><Link key={s.slug} href={routes.services[lang]+"/"+s.slug}>{s.title}</Link>)}</div>
      </details>
      <details className={styles.footerGroup}>
        <summary>{t.company}<Icon name="chevron-down"/></summary>
        <div className={styles.footerLinks}><Link href={routes.home[lang]}>{t.nav[0]}</Link><Link href={routes.about[lang]}>{t.nav[2]}</Link><Link href={routes.certificates[lang]}>{de?"Partner & Qualifikationen":"Partners & qualifications"}</Link><Link href={routes.news[lang]}>{t.nav[3]}</Link><Link href={routes.guide[lang]}>{t.guide}</Link></div>
      </details>
      <details className={styles.footerGroup}>
        <summary>{t.nav[5]}<Icon name="chevron-down"/></summary>
        <div className={styles.footerLinks}>
          <address>{company.name}<br/>{company.street}<br/>{company.city}</address>
          <a href={"mailto:"+company.email}>{company.email}</a>
          <Link href={routes.contact[lang]}>{de?"Kontaktformular":"Contact form"}</Link>
          <Link href={routes.contact[lang]+"#support"}>{t.customers}</Link>
        </div>
      </details>
    </div>
    <div className={styles.footerBottom}>
      <span>© {new Date().getFullYear()} {company.name}</span>
      <nav aria-label={de?"Rechtliche Informationen":"Legal information"}><Link href={routes.legal[lang]}>{t.legal}</Link><Link href={routes.privacy[lang]}>{t.privacy}</Link></nav>
    </div>
  </div></footer>;
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
