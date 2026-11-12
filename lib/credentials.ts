import type { Language } from "./locale";

// Angaben zu Azure, ITIL und Dell stammen aus dem Projektauftrag.
// Partnerlevel, persönliche Zertifikatstitel, Laufzeiten und Markenrechte sind vor Veröffentlichung zu prüfen.
type Copy = Record<Language, string>;
type Credential = { id: string; name: string; category: "technology" | "qualification"; description: Copy; evidence: "confirmed" | "requested" | "profile" | "historical" | "website" };
export const credentials: Credential[] = [
  { id:"azure", name:"Microsoft Certified: Azure Administrator Associate (AZ-104)", category:"qualification", description:{de:"Verwaltung, Absicherung und Überwachung von Azure-Umgebungen.",en:"Administration, security and monitoring of Azure environments."}, evidence:"confirmed" },
  { id:"dell", name:"Dell Technologies", category:"technology", description:{de:"Business-Hardware und Server-Infrastruktur.",en:"Business hardware and server infrastructure."}, evidence:"requested" },
  { id:"watchguard", name:"WatchGuard", category:"technology", description:{de:"Firewalls und Netzwerksicherheit.",en:"Firewalls and network security."}, evidence:"profile" },
  { id:"gdata", name:"G DATA CyberDefense", category:"technology", description:{de:"Endpoint-Sicherheit und Cybersecurity.",en:"Endpoint security and cybersecurity."}, evidence:"requested" },
  { id:"microsoft", name:"Microsoft", category:"technology", description:{de:"Microsoft-Technologien und IT-Infrastruktur.",en:"Microsoft technologies and IT infrastructure."}, evidence:"profile" },
  { id:"passwordsafe", name:"Passwordsafe", category:"technology", description:{de:"Passwortmanagement und sichere Zugangsdaten.",en:"Password management and secure credentials."}, evidence:"profile" },
  { id:"itil", name:"ITIL® 4 Foundation", category:"qualification", description:{de:"Grundlagen des IT-Service-Managements nach ITIL 4.",en:"Foundation-level IT service management knowledge based on ITIL 4."}, evidence:"confirmed" },
  { id:"privacy", name:"Datenschutz / Data protection", category:"qualification", description:{de:"Datenschutzqualifikationen laut Unternehmensprofil.",en:"Data protection qualifications listed in the company profile."}, evidence:"profile" },
  { id:"windows", name:"Windows Server", category:"qualification", description:{de:"Historisch dokumentierte Schulungen zur Server-Administration.",en:"Historically documented server administration training."}, evidence:"historical" },
  { id:"security", name:"IT-Security & Awareness", category:"qualification", description:{de:"Regelmäßige Fortbildung und Sicherheitsbewusstsein im Arbeitsalltag.",en:"Ongoing professional development and security awareness at work."}, evidence:"website" }
];


// Die Bildtitel der öffentlichen Zertifikatsseite wurden am 12.11.2026 erneut abgeglichen.
// Ein historisch veröffentlichter Nachweis ist keine Aussage über eine heute gültige Zertifizierung.
export const certificateSources = {
  archive: "https://www.hg-systeme.de/Zertifikate/",
  emc: "https://www.hg-systeme.de/STARTSEITE/"
} as const;
type CertificateRecord = { id: string; title: string; year?: string; description: Copy; source: keyof typeof certificateSources };
export const certificateRecords: CertificateRecord[] = [
  {id:"kaspersky",title:"Kaspersky",description:{de:"Nachweis auf der bisherigen Zertifikatsseite; genaue Bezeichnung und Datum nicht ausgewiesen.",en:"Record on the previous certificates page; exact title and date not specified."},source:"archive"},
  {id:"knox",title:"Samsung Knox",description:{de:"Veröffentlichter Nachweis zu Samsung Knox.",en:"Published Samsung Knox record."},source:"archive"},
  {id:"terra",title:"terra cloud",year:"2020",description:{de:"Historisch veröffentlichter terra-cloud-Nachweis.",en:"Historically published terra cloud record."},source:"archive"},
  {id:"passwordsafe-2020",title:"Password Safe",year:"2020",description:{de:"Veröffentlichter Nachweis aus 2020.",en:"Published record from 2020."},source:"archive"},
  {id:"passwordsafe-2017",title:"Password Safe",year:"2017",description:{de:"Veröffentlichter Nachweis aus 2017.",en:"Published record from 2017."},source:"archive"},
  {id:"medidoc",title:"medidoc",year:"2018",description:{de:"Historischer Nachweis für medidoc.",en:"Historical medidoc record."},source:"archive"},
  {id:"macmon-partner",title:"macmon Partner",year:"2018",description:{de:"Historisch veröffentlichter Partnernachweis; aktueller Partnerstatus offen.",en:"Historically published partner record; current status unverified."},source:"archive"},
  {id:"macmon",title:"macmon",year:"2018",description:{de:"Historischer Nachweis zu macmon.",en:"Historical macmon record."},source:"archive"},
  {id:"windows-2019",title:"Windows Server 2019",description:{de:"Abschlusszertifikat: Grundkurs Grundlagen, Installation und Konfiguration.",en:"Course completion certificate: fundamentals, installation and configuration."},source:"archive"},
  {id:"sway",title:"Microsoft Sway",description:{de:"Abschlusszertifikat: Sway-Grundkurs.",en:"Course completion certificate: introductory Sway course."},source:"archive"},
  {id:"automotive",title:"KFZ-Gewerbe",year:"2018",description:{de:"Veröffentlichter Nachweis im Bereich KFZ-Gewerbe.",en:"Published record relating to the automotive trade."},source:"archive"},
  {id:"emc",title:"EMC Authorized Partner",description:{de:"Auf der bisherigen Startseite veröffentlichtes Partnerabzeichen; kein Nachweis eines aktuellen Dell-Partnerlevels.",en:"Partner badge published on the previous homepage; not proof of a current Dell partner tier."},source:"emc"}
];

// Die beiden persönlichen Qualifikationen wurden im Projektauftrag konkret bestätigt.
export const featuredCertificates = credentials.filter(item => item.category === "qualification" && item.evidence === "confirmed");

// Partnerangaben: G DATA Silver Partner intern benannt, Dell und WatchGuard ohne unbestätigte Stufe.
export const partnerLabels: Record<string,string> = {gdata:"Silver Partner",dell:"Partner"};
export const brandLinks: Record<string,string> = {
  azure:"https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",itil:"https://www.peoplecert.org/",dell:"https://www.dell.com/",watchguard:"https://www.watchguard.com/",gdata:"https://www.gdata.de/",microsoft:"https://www.microsoft.com/",passwordsafe:"https://www.passwordsafe.de/",kaspersky:"https://www.kaspersky.com/",knox:"https://www.samsungknox.com/",terra:"https://www.terracloud.de/","passwordsafe-2020":"https://www.passwordsafe.de/","passwordsafe-2017":"https://www.passwordsafe.de/",medidoc:"https://www.medidok.de/","macmon-partner":"https://www.macmon.eu/",macmon:"https://www.macmon.eu/","windows-2019":"https://www.microsoft.com/windows-server",sway:"https://sway.cloud.microsoft/",emc:"https://www.dell.com/"
};
