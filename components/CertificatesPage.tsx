import Link from "next/link";
import Icon from "@/components/Icon";
import { PageIntro, SectionHeading, ContactBand } from "@/components/Site";
import { certificateRecords, certificateSources } from "@/lib/credentials";
import { routes, type Language } from "@/lib/locale";

const copy = {
  de:{ title:"Zertifikate und Qualifikationen",intro:"Weiterbildung, technische Erfahrung und nachvollziehbare Nachweise gehören zu unserer Arbeit.", eyebrow:"Fachkompetenz", current:"Aktuelle Nachweise", currentText:"Azure- und ITIL-Zertifikate sowie der Dell-Partnerstatus werden mit den konkreten Originalnachweisen ergänzt. Die genauen Zertifikatstitel, Gültigkeitsdaten und Partnerstufen sind noch nicht bestätigt.", pending:"Originalnachweis ausstehend", archive:"Veröffentlichte Nachweise", archiveText:"Auf der bisherigen HG-Systeme-Website dokumentierte Zertifikate, Schulungen und Partnerabzeichen. Historische Nachweise werden nicht als heute gültige Zertifizierungen ausgegeben.", year:"Dokumentiertes Jahr", source:"Originalseite ansehen", back:"Zur Unternehmensübersicht", notice:"Interner Entwurf: Original-Zertifikatsbilder und offizielle Abzeichen werden nach Prüfung der Nachweise, personenbezogenen Angaben und Nutzungsrechte lokal eingebunden." },
  en:{ title:"Certificates and qualifications",intro:"Professional development, technical experience and verifiable records are part of our work.", eyebrow:"Technical expertise", current:"Current credentials",currentText:"Specific original Azure and ITIL certificates and evidence of Dell partner status will be added. Exact credential titles, validity dates and partner tiers have not yet been confirmed.",pending:"Original evidence pending",archive:"Published records",archiveText:"Certificates, training and partner badges documented on the previous HG-Systeme website. Historical records are not presented as currently valid certifications.",year:"Documented year",source:"View original page",back:"Back to company overview",notice:"Internal draft: Original certificate images and official badges will be added locally after verifying the credentials, personal data and usage rights." }
} as const;
export default function CertificatesPage({lang}:{lang:Language}){
  const t=copy[lang];
  return <><PageIntro eyebrow={t.eyebrow} title={t.title} text={t.intro}/>
  <section className="section"><div className="container">
    <Link className="back-link" href={routes.about[lang]+"#qualifications"}>← {t.back}</Link>
    <SectionHeading eyebrow={t.eyebrow} title={t.current} text={t.currentText}/>
    <div className="credential-grid">{[{name:"Microsoft Azure",icon:"cloud"},{name:"ITIL",icon:"award"},{name:"Dell Technologies Partner",icon:"server"}].map(item=><article className="credential-card" key={item.name}><span className="icon-tile"><Icon name={item.icon}/></span><h4>{item.name}</h4><span className="credential-source">{t.pending}</span></article>)}</div>
    <p className="credential-note muted small">{t.notice}</p>
  </div></section>
  <section className="section section-soft"><div className="container">
    <SectionHeading eyebrow={t.eyebrow} title={t.archive} text={t.archiveText}/>
    <div className="credential-grid">{certificateRecords.map(item=><article className="credential-card" key={item.id}><span className="icon-tile"><Icon name={item.icon}/></span><h4>{item.title}{item.year?" · "+item.year:""}</h4><p>{item.description[lang]}</p>{item.year&&<p className="small">{t.year}: {item.year}</p>}<a className="credential-source text-link" href={certificateSources[item.source]} target="_blank" rel="noopener noreferrer">{t.source} <Icon name="arrow"/></a></article>)}</div>
  </div></section><ContactBand lang={lang}/></>;
}
