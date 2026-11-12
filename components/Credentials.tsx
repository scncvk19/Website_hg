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
 <Link className="quiet-link" href={routes.certificates[lang]}>{de?"Alle Qualifikationen und veröffentlichten Nachweise":"All qualifications and published records"}</Link>
 </div></section>;
}
