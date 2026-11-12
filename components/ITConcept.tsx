import Link from "next/link";
import Icon from "@/components/Icon";
import {routes,type Language} from "@/lib/locale";
import styles from "./it-concept.module.css";

const areas = [
 {icon:"database",de:"Backup",en:"Backup",route:routes.backup},
 {icon:"network",de:"Netzwerk",en:"Network",route:routes.network},
 {icon:"shield",de:"Sicherheit",en:"Security",route:routes.security},
 {icon:"support",de:"Support",en:"Support",route:routes.support},
 {icon:"training",de:"Awareness",en:"Awareness",route:routes.training},
 {icon:"workflow",de:"Automatisierung",en:"Automation",route:routes.automation}
] as const;

export default function ITConcept({lang="de"}:{lang?:Language}){
 const de=lang==="de";
 return <div className={"hero-visual "+styles.concept}>
  <div className="visual-top"><span className="visual-label"><span className="eyebrow-dot"/>HG-SYSTEME · {de?"IT-KONZEPT":"IT CONCEPT"}</span><Icon name="network"/></div>
  <div className={styles.diagram}>
   {areas.map((area,i)=><Link key={area.icon} className={styles.area} href={area.route[lang]} style={{gridColumn:(i%3)+1,gridRow:i<3?1:3}}><Icon name={area.icon}/><span>{area[lang]}</span></Link>)}
   <div className={styles.center}><Icon name="monitor"/><strong>{de?"Ihre Firmen-IT":"Your business IT"}</strong><span>{de?"Sicher. Vernetzt. Effizient.":"Secure. Connected. Efficient."}</span></div>
  </div>
  <div className="visual-bottom"><span>{de?"Ein Ansprechpartner. Zusammenhängende Lösungen.":"One point of contact. Connected solutions."}</span></div>
 </div>;
}
