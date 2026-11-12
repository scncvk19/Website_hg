import Link from "next/link";
import FeaturedCertificates from "@/components/FeaturedCertificates";
import TechnologyPartners from "@/components/TechnologyPartners";
import {PageIntro,ContactBand} from "@/components/Site";
import {certificateRecords,brandLinks} from "@/lib/credentials";
import {routes,type Language} from "@/lib/locale";
import styles from "./credentials.module.css";
export default function CertificatesPage({lang}:{lang:Language}){
 const de=lang==="de";
 return <><PageIntro eyebrow={de?"Fachkompetenz":"Expertise"} title={de?"Zertifikate & Qualifikationen":"Certificates & qualifications"} text={de?"Weiterbildung, technische Erfahrung und bewährte Technologielösungen.":"Professional development, technical experience and established technology solutions."}/>
 <section className={"section "+styles.root}><div className="container">
 <Link className="quiet-link" href={routes.about[lang]+"#qualifications"}>{de?"Zur Unternehmensübersicht":"Back to company overview"}</Link>
 <div className="quiet-group"><h2>{de?"Zertifizierungen":"Certifications"}</h2><FeaturedCertificates lang={lang}/></div>
 <div className="quiet-group"><h2>{de?"Technologien & Hersteller":"Technologies & vendors"}</h2><TechnologyPartners lang={lang}/></div>
 <div className="quiet-group"><h2>{de?"Veröffentlichte Nachweise":"Published records"}</h2><p className="quiet-description">{de?"Die folgenden Nachweise dokumentieren frühere Schulungen und Herstellerqualifikationen. Jahresangaben beziehen sich auf den damaligen Stand und belegen keine aktuell gültige Zertifizierung.":"These records document earlier training and vendor qualifications. Dates describe the historical record, not current certification validity."}</p>
 <div className="quiet-records">{certificateRecords.map(item=><div className="quiet-record" key={item.id}><div><strong>{brandLinks[item.id]?<a href={brandLinks[item.id]} target="_blank" rel="noopener noreferrer">{item.title}</a>:item.title}</strong>{item.year&&<span>{item.year}</span>}</div><p>{item.description[lang]}</p></div>)}</div></div>
 <p className="quiet-description">{de?"ITIL® ist eine eingetragene Marke der PeopleCert-Gruppe. Herstellerlogos bezeichnen die jeweiligen Unternehmen.":"ITIL® is a registered trademark of the PeopleCert group. Vendor logos identify their respective companies."}</p>
 </div></section><ContactBand lang={lang}/></>;
}
