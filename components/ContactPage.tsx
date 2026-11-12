import { PageIntro } from "@/components/Site";
import Icon from "@/components/Icon";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";
import type { Language } from "@/lib/locale";
const text={
 de:{eyebrow:"Kontakt",title:"Lernen wir uns kennen.",intro:"Sie haben Fragen zu Ihrer IT, planen ein Projekt oder benötigen Unterstützung? Wir freuen uns auf ein persönliches Gespräch.",heading:"Neue Kunden & Projektanfragen",lead:"Im unverbindlichen Erstgespräch besprechen wir Ihre Situation und den möglichen nächsten Schritt.",phone:"Rufen Sie uns an",email:"Schreiben Sie uns",subject:"Anfrage IT-Erstgespräch",note:"Der E-Mail-Link öffnet Ihr eigenes E-Mail-Programm.",existing:"Sie sind bereits Kunde?",support:"Nutzen Sie für Supportanfragen die bisher vereinbarten Kontaktwege und Servicezeiten. Bei Fragen können Sie uns unter der angegebenen Telefonnummer erreichen.",call:"Telefonischer Kontakt",country:"Deutschland",region:"Für Geschäftskunden in Eberbach, Sinsheim, Heidelberg und Umgebung. Persönliche Termine nach Vereinbarung.",linkedin:"Unternehmen auf LinkedIn"},
 en:{eyebrow:"Contact",title:"Let's get to know each other.",intro:"Have questions about your IT, planning a project or need support? We look forward to speaking with you.",heading:"New customers & project enquiries",lead:"In an initial consultation without obligation, we discuss your situation and the next steps.",phone:"Call us",email:"Email us",subject:"IT consultation enquiry",note:"The email link opens your own email application.",existing:"Already a customer?",support:"For support requests, use the previously agreed contact channels and service hours. If you have questions, call us on the number shown.",call:"Contact by phone",country:"Germany",region:"For business customers in Eberbach, Sinsheim, Heidelberg and nearby areas. In-person appointments by arrangement.",linkedin:"Company on LinkedIn"}
} as const;
export default function ContactPage({ lang }: { lang: Language }) {
  const t=text[lang];
  // Runtime configuration: disabled by default; public Web3Forms form key only.
  const key=process.env.HG_CONTACT_FORM_ENABLED==="true"?(process.env.HG_WEB3FORMS_ACCESS_KEY??"").trim():"";
  return <><PageIntro eyebrow={t.eyebrow} title={t.title} text={t.intro}/><section className="section"><div className="container detail-grid"><div>
    <h2>{t.heading}</h2><p className="lead">{t.lead}</p>
    <ContactForm lang={lang} accessKey={key}/>
    <div id="support" className="notice"><h2>{t.existing}</h2><p>{t.support}</p><a className="text-link" href={"tel:"+company.tel}>{t.call}<Icon name="arrow"/></a></div>
  </div><aside className="detail-aside"><span className="icon-tile"><Icon name="pin"/></span><h2>{company.name}</h2><address>{company.street}<br/>{company.city}<br/>{t.country}</address><p>{t.region}</p>
    <div className="contact-options"><a href={"tel:"+company.tel}><span className="icon-tile"><Icon name="phone"/></span><div><strong>{t.phone}</strong><span>{company.phone}</span></div></a><a href={"mailto:"+company.email+"?subject="+encodeURIComponent(t.subject)}><span className="icon-tile"><Icon name="mail"/></span><div><strong>{t.email}</strong><span>{company.email}</span></div></a></div><p className="small muted">{t.note}</p><SocialLinks lang={lang} labels/>
  </aside></div></section></>;
}
