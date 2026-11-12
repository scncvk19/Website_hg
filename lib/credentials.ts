import type { Language } from "./locale";

// Angaben zu Azure, ITIL und Dell stammen aus dem Projektauftrag.
// Partnerlevel, persönliche Zertifikatstitel, Laufzeiten und Markenrechte sind vor Veröffentlichung zu prüfen.
type Copy = Record<Language, string>;
type Credential = { id: string; icon: string; name: string; category: "technology" | "qualification"; description: Copy; evidence: "requested" | "profile" | "historical" | "website" };
export const credentials: Credential[] = [
  { id:"azure", icon:"cloud", name:"Microsoft Azure", category:"technology", description:{de:"Cloud-Technologie und hybride Infrastruktur.",en:"Cloud technology and hybrid infrastructure."}, evidence:"requested" },
  { id:"dell", icon:"server", name:"Dell Partner", category:"technology", description:{de:"Business-Hardware und Server-Infrastruktur.",en:"Business hardware and server infrastructure."}, evidence:"requested" },
  { id:"watchguard", icon:"shield", name:"WatchGuard", category:"technology", description:{de:"Firewalls und Netzwerksicherheit.",en:"Firewalls and network security."}, evidence:"profile" },
  { id:"microsoft", icon:"monitor", name:"Microsoft", category:"technology", description:{de:"Microsoft-Technologien und IT-Infrastruktur.",en:"Microsoft technologies and IT infrastructure."}, evidence:"profile" },
  { id:"passwordsafe", icon:"key", name:"Passwordsafe", category:"technology", description:{de:"Passwortmanagement und sichere Zugangsdaten.",en:"Password management and secure credentials."}, evidence:"profile" },
  { id:"itil", icon:"award", name:"ITIL", category:"qualification", description:{de:"Strukturierte IT-Service-Prozesse und Service-Management.",en:"Structured IT service processes and service management."}, evidence:"requested" },
  { id:"privacy", icon:"shield", name:"Datenschutz / Data protection", category:"qualification", description:{de:"Datenschutzqualifikationen laut Unternehmensprofil.",en:"Data protection qualifications listed in the company profile."}, evidence:"profile" },
  { id:"windows", icon:"training", name:"Windows Server", category:"qualification", description:{de:"Historisch dokumentierte Schulungen zur Server-Administration.",en:"Historically documented server administration training."}, evidence:"historical" },
  { id:"security", icon:"training", name:"IT-Security & Awareness", category:"qualification", description:{de:"Regelmäßige Fortbildung und Sicherheitsbewusstsein im Arbeitsalltag.",en:"Ongoing professional development and security awareness at work."}, evidence:"website" }
];
