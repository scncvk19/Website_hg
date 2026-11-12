import Link from "next/link";
import FeaturedCertificates from "@/components/FeaturedCertificates";
import TechnologyPartners from "@/components/TechnologyPartners";
import {routes,type Language} from "@/lib/locale";
import styles from "./credentials.module.css";
export default function Credentials({lang="de",detailed=false}:{lang?:Language;detailed?:boolean}){
 const de=lang==="de";
 return <section id="qualifications" className={"section "+styles.root}><div className="container">
 <div className="quiet-heading"><h2>{de?"Partner & Qualifikationen":"Partners & qualifications"}</h2><p>{de?"Fachliche Weiterbildung und bewährte Technologielösungen bilden die Grundlage unserer Arbeit.":"Professional development and established technology solutions underpin our work."}</p></div>
 <div className="quiet-group"><h3>{de?"Zertifizierungen":"Certifications"}</h3><FeaturedCertificates lang={lang}/></div>
 <div className="quiet-group"><h3>{de?"Technologien & Hersteller":"Technologies & vendors"}</h3><TechnologyPartners lang={lang} compact={!detailed}/></div>
 {detailed&&<div className="quiet-group"><h3>{de?"Erfahrung & Weiterbildung":"Experience & professional development"}</h3><p className="quiet-description">{de?"Seit über 20 Jahren unterstützen wir Unternehmen aus Medizin, Automobil und Industrie. Unsere Unternehmensgeschichte umfasst bereits 1998 ein Projekt zur Vernetzung medizinischer Diagnosesysteme in einer Kinderklinik in Katar. Regelmäßige Weiterbildung, IT-Sicherheit und Datenschutz ergänzen unsere praktische Erfahrung.":"For over 20 years, we have supported businesses in healthcare, automotive and industry. Our history includes a 1998 project connecting medical diagnostic systems at a children’s hospital in Qatar. Ongoing professional development, IT security and data protection complement our practical experience."}</p></div>}
 <Link className="quiet-link" href={routes.certificates[lang]}>{de?"Alle Qualifikationen und veröffentlichten Nachweise":"All qualifications and published records"}</Link>
 </div></section>;
}
