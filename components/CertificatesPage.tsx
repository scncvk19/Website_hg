import Link from "next/link";
import CertificateImage from "@/components/CertificateImage";
import FeaturedCertificates from "@/components/FeaturedCertificates";
import { PageIntro, SectionHeading, ContactBand } from "@/components/Site";
import { certificateRecords } from "@/lib/credentials";
import { routes, type Language } from "@/lib/locale";

const copy = {
  de:{ title:"Zertifikate und Qualifikationen",intro:"Weiterbildung, technische Erfahrung und nachvollziehbare Nachweise gehören zu unserer Arbeit.", eyebrow:"Fachkompetenz", current:"Zertifizierungen", currentText:"Unsere benannten Qualifikationen in Azure-Administration und IT-Service-Management. Die persönliche Gültigkeit wird vor Veröffentlichung geprüft.", pending:"Originalnachweis ausstehend", archive:"Veröffentlichte Nachweise", archiveText:"Zertifikate, Schulungsnachweise und Partnerabzeichen aus unserer bisherigen Unternehmenswebsite. Die Jahresangaben dokumentieren den damaligen Stand.", year:"Dokumentiertes Jahr", source:"Originalseite ansehen", back:"Zur Unternehmensübersicht", notice:"Interner Entwurf: Abzeichen zeigen den Zertifikatstyp, nicht die persönliche Verifikation. Dell-Partnerstufe, Gültigkeit, personenbezogene Angaben und Nutzungsrechte vor Veröffentlichung prüfen." },
  en:{ title:"Certificates and qualifications",intro:"Professional development, technical experience and verifiable records are part of our work.", eyebrow:"Technical expertise", current:"Certifications",currentText:"Our identified qualifications in Azure administration and IT service management. Individual validity will be verified before publication.",pending:"Original evidence pending",archive:"Published records",archiveText:"Certificates, training records and partner badges from our previous company website. The years document the historical status.",year:"Documented year",source:"View original page",back:"Back to company overview",notice:"Internal draft: Badges illustrate the credential type and do not verify individual credentials. Review Dell partner tier, validity, personal data and usage rights before publication." }
} as const;
export default function CertificatesPage({lang}:{lang:Language}){
  const t=copy[lang];
  return <><PageIntro eyebrow={t.eyebrow} title={t.title} text={t.intro}/>
  <section className="section"><div className="container">
    <Link className="back-link" href={routes.about[lang]+"#qualifications"}>← {t.back}</Link>
    <SectionHeading eyebrow={t.eyebrow} title={t.current} text={t.currentText}/>
    <FeaturedCertificates lang={lang}/>
    <p className="credential-note small muted"><strong>Dell Technologies Partner</strong> · {lang==="de"?"Partnerstufe noch zu bestätigen":"Partner tier to be confirmed"}</p>
    <p className="credential-note muted small">{t.notice}</p>
  </div></section>
  <section className="section section-soft"><div className="container">
    <SectionHeading eyebrow={t.eyebrow} title={t.archive} text={t.archiveText}/>
    <div className="credential-grid">{certificateRecords.map(item=><article className="credential-card" key={item.id}><CertificateImage id={item.id} alt={item.title+(item.year?" "+item.year:"")} icon={item.icon} kind="archive"/><h4>{item.title}{item.year?" · "+item.year:""}</h4><p>{item.description[lang]}</p>{item.year&&<p className="small">{t.year}: {item.year}</p>}</article>)}</div>
  </div></section><ContactBand lang={lang}/></>;
}
