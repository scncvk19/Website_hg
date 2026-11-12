import Link from "next/link";
import Icon from "@/components/Icon";
import {routes,type Language} from "@/lib/locale";
import styles from "./it-concept.module.css";

const stages = [
 {icon:"network",de:"Architektur erfassen",en:"Map your IT architecture",description:{de:"Systeme, Netzwerke, Datenflüsse und Abhängigkeiten dokumentieren.",en:"Document systems, networks, data flows and dependencies."}},
 {icon:"search",de:"Risiken erkennen",en:"Identify risks",description:{de:"Schwachstellen und Ausfallrisiken bewerten, Maßnahmen priorisieren.",en:"Assess weaknesses and operational risks, then prioritise measures."}},
 {icon:"shield",de:"Systeme absichern",en:"Secure systems",description:{de:"Systeme abhärten, Zugänge, Updates, Rechte und Datensicherung gezielt absichern.",en:"Harden systems, improve access controls, updates, permissions and backups."}},
 {icon:"workflow",de:"Prozesse optimieren",en:"Optimise processes",description:{de:"Daten nutzbar machen, Schnittstellen verbinden, Abläufe automatisieren.",en:"Make data useful, connect interfaces and automate workflows."}},
 {icon:"activity",de:"Betrieb weiterentwickeln",en:"Maintain and improve",description:{de:"Monitoring, Wartung und Support nach vereinbartem Umfang.",en:"Monitoring, maintenance and support within the agreed scope."}}
] as const;

export default function ITApproach({lang="de"}:{lang?:Language}){
 const de=lang==="de";
 return <section id="it-konzept" className={"section section-soft "+styles.approach}><div className="container feature-grid">
 <div className="feature-copy">
  <p className="eyebrow">{de?"Unser Vorgehen":"Our approach"}</p>
  <h2>{de?"Eine sichere IT braucht ein solides Fundament.":"Secure IT starts with a solid foundation."}</h2>
  <p>{de?"Am Anfang steht das Verständnis Ihrer bestehenden IT. Wir erfassen die Architektur, bewerten Risiken und vereinbaren gemeinsam, welche Maßnahmen für Ihren Betrieb sinnvoll sind. So entsteht ein nachvollziehbarer Plan statt einzelner, unkoordinierter Änderungen.":"We start by understanding your existing IT. We map the architecture, assess risks and agree which measures make sense for your business. The result is a clear plan rather than isolated, uncoordinated changes."}</p>
  <div className={styles.commitment}><Icon name="check"/><p>{de?"Änderungen erfolgen nach Abstimmung, mit geeigneten Sicherungen, Rückfallplan, Funktionsprüfung und dokumentierten Ergebnissen. Umfang und Zuständigkeiten werden vorab vereinbart.":"Changes are coordinated in advance, with appropriate backups, a rollback plan, functional checks and documented results. Scope and responsibilities are agreed beforehand."}</p></div>
  <p>{de?"Im unverbindlichen Erstgespräch klären wir Ihren Bedarf. Eine technische Bestandsaufnahme oder Sicherheitsprüfung erfolgt anschließend im vereinbarten, kostenpflichtigen Umfang.":"In an initial consultation without obligation, we clarify your needs. Technical inventory or security assessment then takes place within an agreed, paid scope."}</p>
  <div className={styles.approachActions}><Link className="button" href={routes.contact[lang]}>{de?"Erstgespräch vereinbaren":"Arrange a consultation"}<Icon name="arrow"/></Link><Link className="text-link" href={routes.security[lang]}>{de?"Zum Sicherheitscheck":"Explore the security assessment"}<Icon name="arrow"/></Link></div>
 </div>
 <figure className={styles.pyramid}>
  <figcaption><span>{de?"HG-SYSTEME · VORGEHENSMODELL":"HG-SYSTEME · APPROACH"}</span><small>{de?"Vom Fundament zum laufenden Betrieb":"From foundation to ongoing operations"}</small></figcaption>
  <ol className={styles.steps}>{stages.map((stage,i)=><li className={styles.step} key={stage.icon} data-stage={i+1} style={{width:(100-i*6)+"%"}}><span className={styles.stepNumber} aria-hidden="true">{String(i+1).padStart(2,"0")}</span><Icon name={stage.icon}/><div><strong>{stage[lang]}</strong><p>{stage.description[lang]}</p></div></li>)}</ol>
  <p className={styles.foundation}>{de?"Fundament: Transparenz über Ihre IT-Landschaft":"Foundation: visibility of your IT landscape"}</p>
 </figure>
 </div></section>;
}
