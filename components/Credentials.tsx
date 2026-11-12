import Link from "next/link";
import Icon from "@/components/Icon";
import FeaturedCertificates from "@/components/FeaturedCertificates";
import { SectionHeading } from "@/components/Site";
import { credentials } from "@/lib/credentials";
import { routes, type Language } from "@/lib/locale";

const text = {
  de: { eyebrow:"Partner & Qualifikationen", title:"Kompetenz, auf die Sie bauen können.", intro:"Wir verbinden Branchenerfahrung mit bewährten IT-Technologien und kontinuierlicher Weiterbildung.", technologies:"Technologien und Hersteller", qualifications:"Qualifikationen und Erfahrung", more:"Mehr über unsere Qualifikationen", confirmed:"Intern benannte Qualifikation", requested:"Angabe zur internen Bestätigung", profile:"Laut Unternehmensprofil", historical:"Historischer Schulungsnachweis", website:"Auf der Firmenwebsite beschrieben", notice:"Interner Entwurf: Die Zertifikatstitel AZ-104 und ITIL 4 Foundation sind intern benannt; persönliche Gültigkeit, Dell-Partnerstatus und historische Nachweise werden vor Veröffentlichung geprüft. Herstellerbezeichnungen sind keine Kundennamen oder Zertifizierungssiegel.", historyTitle:"Erfahrung aus realen IT-Projekten", history:"Bereits 1998 war die Vernetzung medizinischer Diagnosesysteme in einer Kinderklinik in Katar Teil der Unternehmensgeschichte. Seit über 20 Jahren unterstützt HG-Systeme Unternehmen aus Medizin, Automobil und Industrie. Das Team hält sein Fachwissen durch regelmäßige Weiterbildungen aktuell." },
  en: { eyebrow:"Partners & qualifications", title:"Expertise you can build on.", intro:"We combine industry experience with established IT technologies and continuous professional development.", technologies:"Technologies and vendors", qualifications:"Qualifications and experience", more:"Learn more about our qualifications", confirmed:"Internally identified qualification", requested:"Pending internal confirmation", profile:"According to company profile", historical:"Historical training record", website:"Described on company website", notice:"Internal draft: AZ-104 and ITIL 4 Foundation have been identified internally; individual validity, Dell partner status and historical records must be reviewed before publication. Vendor names do not represent customer endorsements or certification badges.", historyTitle:"Experience from real IT projects", history:"The company's history includes a 1998 project connecting medical diagnostic systems at a children's hospital in Qatar. For over 20 years, HG-Systeme has supported businesses in healthcare, automotive and industry. The team keeps its expertise up to date through regular training." }
} as const;

export default function Credentials({ lang, detailed = false }: { lang: Language; detailed?: boolean }) {
  const t = text[lang];
  const visible = credentials.filter(c => c.evidence!=="confirmed" && (detailed || ["dell","watchguard","privacy","microsoft"].includes(c.id)));
  return <section id="qualifications" className="section section-soft credentials-section"><div className="container">
    <SectionHeading eyebrow={t.eyebrow} title={t.title} text={t.intro}/>
    <div className="credential-group"><h3>{lang==="de"?"Zertifizierungen":"Certifications"}</h3><FeaturedCertificates lang={lang}/></div>
    {(["technology","qualification"] as const).map(category => <div className="credential-group" key={category}>
      <h3>{category==="technology"?t.technologies:t.qualifications}</h3>
      <div className="credential-grid">{visible.filter(item=>item.category===category).map(item=><article className="credential-card" key={item.id}>
        <span className="icon-tile"><Icon name={item.icon}/></span>
        <h4>{item.id==="privacy"?(lang==="de"?"Datenschutz":"Data protection"):item.name}</h4>
        <p>{item.description[lang]}</p>
        <span className="credential-source">{t[item.evidence]}</span>
      </article>)}</div>
    </div>)}
    {detailed&&<div className="credential-history"><h3>{t.historyTitle}</h3><p>{t.history}</p></div>}
    <Link className="text-link" href={routes.certificates[lang]}>{lang==="de"?"Zertifikate und Nachweise ansehen":"View certificates and credentials"} <Icon name="arrow"/></Link>
    <p className="credential-note small muted">{t.notice}</p>
  </div></section>;
}
