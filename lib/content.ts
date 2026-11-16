// Redaktionelle Inhalte und bestätigte Unternehmensangaben zentral pflegen.
export const company = {
  name: "HG-Systeme e.K.",
  owner: "Michael Gray",
  registerCourt: "Amtsgericht Mannheim",
  registerNumber: "HRA 332816",
  vatId: "DE164684637",
  city: "69412 Eberbach",
  street: "Markgrafenstraße 3",
  phone: "06271 77 170",
  tel: "+49627177170",
  email: "info@hg-systeme.de",
  privacyEmail: "m.gray@hg-systeme.de",
  website: "https://www.hg-systeme.de/",
  linkedin: "https://de.linkedin.com/company/hg-systeme-e-k"
} as const;

export type Service = {
  slug: string; icon: string; title: string; subtitle: string; intro: string;
  features: string[]; benefit: string; limit: string; steps: string[];
};

export const services: Service[] = [
  {
    slug: "it-betreuung", icon: "support", title: "IT-Betreuung & Support",
    subtitle: "Persönliche Hilfe und planbare Betreuung für Ihre Firmen-IT.",
    intro: "Ob Arbeitsplatz, E-Mail, Drucker oder Server: Wir unterstützen Sie dabei, Ihre IT zuverlässig zu betreiben. Je nach Bedarf helfen wir per Fernsupport oder persönlich vor Ort.",
    features: ["Remote- und Vor-Ort-Support nach Vereinbarung", "Überwachung und regelmäßige Wartung vereinbarter Systeme", "Verständliche Monatsberichte und feste Ansprechpartner", "Individuelle Betreuungspakete mit definiertem Leistungsumfang"],
    benefit: "Sie behalten den Überblick über Ihre IT und wissen, an wen Sie sich bei Störungen wenden können.",
    limit: "Reaktionszeiten, Supportkontingente, betreute Geräte, Lizenzen und Vor-Ort-Einsätze werden individuell vereinbart. Kein pauschales Versprechen unbegrenzter Unterstützung.",
    steps: ["Bedarf und bestehende Infrastruktur besprechen", "Leistungsumfang und Zuständigkeiten vereinbaren", "Betreuung einrichten und regelmäßig auswerten"]
  },
  {
    slug: "sicherheitscheck", icon: "shield", title: "IT-Sicherheit & Sicherheitscheck",
    subtitle: "Risiken verstehen. Maßnahmen gezielt angehen.",
    intro: "Wie gut ist Ihre Firmen-IT auf Ausfälle und Cyberrisiken vorbereitet? Wir besprechen Ihre Situation und prüfen auf Wunsch einen klar vereinbarten technischen Umfang. Für die zentrale Passwortverwaltung bieten wir Netwrix Password Secure (ehemals Password Safe) als gesonderte Lösung an.",
    features: ["Backup-Status und vorhandene Wiederherstellungsnachweise", "Firewall, Netzwerk und sichere Fernzugänge", "Updates, Endgeräteschutz und administrative Rechte", "MFA, E-Mail-Sicherheit und Notfallorganisation", "Schriftlicher Maßnahmenplan und persönliche Ergebnisbesprechung"],
    benefit: "Sie erhalten nachvollziehbare Prioritäten statt einer unverständlichen Liste technischer Probleme.",
    limit: "Das kostenlose Erstgespräch ist eine Orientierung ohne technische Prüfung. Der kostenpflichtige Business-Check erfolgt nur mit schriftlich vereinbartem Umfang und Freigabe. Kein Penetrationstest, keine Zertifizierung und keine Garantie gegen Angriffe. Maßnahmen werden separat angeboten.",
    steps: ["Kostenloses, unverbindliches Erstgespräch (20–30 Minuten)", "Technischen Check nach Angebot beauftragen", "Befunde persönlich besprechen und Maßnahmen planen"]
  },
  {
    slug: "backup", icon: "database", title: "Backup & Wiederherstellung",
    subtitle: "Daten sichern und Wiederherstellbarkeit nachweisen.",
    intro: "Eine Datensicherung ist erst dann wirklich hilfreich, wenn wichtige Daten im Ernstfall wiederhergestellt werden können. Wir entwickeln ein Backup-Konzept passend zu Ihren betrieblichen Anforderungen.",
    features: ["Sicherungsumfang und Wiederanlaufziele abstimmen", "Geeignete lokale und externe Sicherungsziele planen", "Sicherungsjobs überwachen und Fehler nachvollziehen", "Vereinbarte Wiederherstellungstests und Statusberichte"],
    benefit: "Sie wissen, welche Systeme gesichert werden und welche Schritte im Ernstfall notwendig sind.",
    limit: "Speicher, Lizenzen, Aufbewahrung, Tests und Wiederanlaufziele werden separat vereinbart. Eine vollständige Notfallwiederherstellung ist kein automatisch enthaltenes Pauschalversprechen.",
    steps: ["Daten und kritische Anwendungen erfassen", "Sicherung und Alarmierung einrichten", "Wiederherstellung erproben und Betreuung vereinbaren"]
  },
  {
    slug: "archivierung", icon: "archive", title: "E-Mail- & Dokumentenarchivierung",
    subtitle: "Geschäftliche Informationen geordnet aufbewahren und schnell wiederfinden.",
    intro: "Mit inoxision ARCHIVE bieten wir Unternehmen eine Lösung zur zentralen Archivierung von E-Mails und Dokumenten. Gemeinsam stimmen wir ab, welche Informationen langfristig aufbewahrt werden müssen und wie das Archiv in Ihre bestehende IT und Ihre Arbeitsabläufe eingebunden werden kann.",
    features: ["Archivierung geschäftlicher E-Mails einschließlich Anhängen", "Strukturierte Ablage von Dokumenten und Belegen je nach gewähltem Modul", "Volltext- und Metadatensuche sowie nachvollziehbare Zugriffsrechte", "Anbindung an vorhandene E-Mail-Systeme und weitere Anwendungen nach technischer Prüfung", "Einrichtung, Aufbewahrungs- und Löschkonzept sowie Betreuung nach Vereinbarung"],
    benefit: "Relevante Informationen lassen sich zentral aufbewahren und gezielt wiederfinden. Das erleichtert die tägliche Arbeit, Auskunftsprozesse und die nachvollziehbare Dokumentation.",
    limit: "Produktedition, Module, Lizenzen, Hosting, Speicher, Schnittstellen und Leistungsumfang werden vorab abgestimmt. Die Software kann eine revisionssichere Archivierung unterstützen; die tatsächliche GoBD- und Datenschutzkonformität hängt auch von Konfiguration, betrieblichen Prozessen und rechtlichen Anforderungen ab. Ein Archiv ersetzt keine Datensicherung.",
    steps: ["Datenquellen, Aufbewahrung und Anforderungen erfassen", "Geeignete inoxision-Lösung und Berechtigungen auswählen", "Archivierung einrichten und Recherche sowie Ablage prüfen", "Betrieb dokumentieren und Betreuung vereinbaren"]
  },
  {
    slug: "firewall-netzwerk", icon: "network", title: "Firewall & Netzwerk",
    subtitle: "Sichere Verbindungen und gepflegte Infrastruktur.",
    intro: "Wir unterstützen Unternehmen bei Firewall, WLAN und Netzwerksicherheit. Gemeinsam planen wir eine nachvollziehbare Lösung, die zu Ihren Standorten und Arbeitsabläufen passt.",
    features: ["Firewall-Konfiguration und kontrollierte Freigaben", "VPN und abgesicherte Fernzugänge", "Netzwerksegmentierung und sicheres WLAN", "Wartung, Firmware-Updates und Konfigurationssicherung", "Firewall-Vermietung oder Betreuung nach individuellem Angebot"],
    benefit: "Ihre Netzwerkzugänge bleiben übersichtlich, und Änderungen werden geplant statt nebenbei vorgenommen.",
    limit: "Hardware, Lizenzumfang, Mietkonditionen, Wartungsfenster, Ersatz und größere Netzumbauten werden vorab vereinbart.",
    steps: ["Bestehendes Netzwerk und Anforderungen besprechen", "Lösung und Rückfallplan abstimmen", "Einrichten, prüfen und bei Bedarf laufend betreuen"]
  },
  {
    slug: "schulungen", icon: "training", title: "IT-Sicherheitsschulungen",
    subtitle: "Mitarbeiter fit machen für den sicheren Arbeitsalltag.",
    intro: "Verdächtige Nachrichten, gefälschte Rechnungen oder unerwartete MFA-Anfragen: Unsere Schulungsidee setzt auf verständliche Beispiele und richtige Reaktionen, nicht auf Schuldzuweisungen.",
    features: ["Grundlagen-Workshop: 90 Minuten für 5–15 Personen", "Phishing, Zahlungsbetrug, Passwörter und MFA", "Sicherer Umgang mit Dateien und vertraulichen Daten", "Praktische Übungen, Wissenscheck und Merkblatt", "Auffrischung (30 Minuten), Führungskräfte-Briefing (60 Minuten) oder Jahrespaket nach Vereinbarung"],
    benefit: "Ihre Mitarbeiter lernen, typische Risiken zu erkennen und verdächtige Situationen frühzeitig zu melden.",
    limit: "Inhalte, Termine und Gruppengröße stimmen wir individuell ab. Der Standardworkshop umfasst keine akkreditierte Zertifizierung, verdeckte Überwachung oder Phishing-Simulation.",
    steps: ["Zielgruppe und betriebliche Meldewege klären", "Persönlichen Workshop durchführen", "Erkenntnisse wiederholen und bei Bedarf auffrischen"]
  },
  {
    slug: "green-it", icon: "leaf", title: "Green IT & Infrastruktur",
    subtitle: "Vorhandene Technik sinnvoll und wirtschaftlich nutzen.",
    intro: "Nicht jede IT-Modernisierung erfordert neue Hardware. Wir prüfen, wann vorhandene Systeme weitergenutzt oder sinnvoll ersetzt werden können.",
    features: ["Bestandsaufnahme und wirtschaftliche Modernisierung", "Geeignete SSD-/RAM-Erweiterungen und Business-Hardware", "Refurbished-Hardware nach Eignung und Verfügbarkeit", "Supportstatus, Energiebedarf und Gesamtkosten berücksichtigen"],
    benefit: "Investitionen werden nachvollziehbar und an den tatsächlichen Bedarf angepasst.",
    limit: "Verfügbarkeit, Garantie, Kompatibilität und laufender Support werden vor der Beschaffung geprüft. Keine pauschalen Energie- oder Einspargarantien.",
    steps: ["Technischen Bestand und Anforderungen erfassen", "Weiterbetrieb, Aufrüstung und Ersatz vergleichen", "Geeignete Lösung planen und umsetzen"]
  },
  {
    slug: "automatisierung", icon: "workflow", title: "Automatisierung & Prozessoptimierung",
    subtitle: "Daten verbinden. Abläufe vereinfachen. Prozesse gezielt verbessern.",
    intro: "Viele Unternehmen erfassen Informationen in unterschiedlichen Systemen, übertragen Daten manuell oder müssen wiederkehrende Aufgaben mehrfach bearbeiten. Wir betrachten die vorhandenen Abläufe und unterstützen Sie dabei, Daten strukturiert zu erfassen, zu verarbeiten und für nachvollziehbare Entscheidungen und Prozesssteuerung zu nutzen. Besonders im industriellen Umfeld ist eine verlässliche Verbindung zwischen IT, Anwendungen und betrieblichen Daten wichtig.",
    features: ["Bestehende Abläufe, Datenquellen und Schnittstellen erfassen", "Daten strukturiert aufbereiten, zusammenführen und auswerten", "Wiederkehrende Aufgaben und Informationsflüsse automatisieren", "Anwendungen über geeignete Schnittstellen verbinden", "Prozessstatus sichtbar machen und definierte softwarebasierte Abläufe steuern", "Fehlerbehandlung, Zugriffsrechte, Dokumentation und sichere Wiederanlaufmöglichkeiten berücksichtigen"],
    benefit: "Weniger manuelle Übertragungen, nachvollziehbare Datenflüsse und bessere Entscheidungsgrundlagen. Gemeinsam identifizieren wir sinnvolle Automatisierungsmöglichkeiten anhand des tatsächlichen Nutzens.",
    limit: "Jedes Projekt wird nach Bestand, Schnittstellen, Datenqualität und betrieblichen Anforderungen bewertet. Änderungen an Produktionsanlagen, SPS oder sicherheitskritischen Steuerungen sind nicht Teil eines pauschalen IT-Angebots und erfordern eine gesonderte fachliche Prüfung, Autorisierung und gegebenenfalls spezialisierte Partner. Keine Eingriffe in laufende Produktionssysteme ohne Freigabe.",
    steps: ["Prozesse und Datenflüsse gemeinsam erfassen", "Geeignete Schnittstellen und Ziele definieren", "Abgegrenzte Lösung entwickeln und außerhalb des Produktivbetriebs prüfen", "Freigeben, dokumentieren und bei Bedarf betreuen"]
  }
];

export const faqs = [
  ["Für welche Unternehmen sind Sie da?", "Wir richten uns an Geschäftskunden aus Eberbach, Sinsheim, Heidelberg und dem erreichbaren Umland. Die passende Betreuung richtet sich nach Ihrer IT und unserem gemeinsam vereinbarten Leistungsumfang, nicht nach einer festen Unternehmensgröße."],
  ["Was beinhaltet das kostenlose Erstgespräch?", "Wir besprechen Ihre Situation, wichtige Fragen und sinnvolle nächste Schritte. Es handelt sich um eine unverbindliche Orientierung, nicht um einen technischen Sicherheitscheck."],
  ["Kann ich einzelne Leistungen buchen?", "Ja. Sicherheitscheck, Backup, Archivierung, Firewall, Schulung oder Automatisierung können als abgegrenzte Leistungen vereinbart werden. Eine laufende Betreuung ist optional."],
  ["Bieten Sie Remote- und Vor-Ort-Support an?", "Ja, abhängig vom Anliegen und der Vereinbarung. Remote-Support und Vor-Ort-Einsätze werden unterschiedlich abgerechnet. Die Konditionen klären wir vor der Beauftragung."],
  ["Ist ein Sicherheitscheck ein Penetrationstest?", "Nein. Wir prüfen vereinbarte Einstellungen und Nachweise. Ein Penetrationstest ist ein eigenständiger, autorisierter Prüfauftrag und nicht Teil unseres Standardchecks."],
  ["Was kostet die IT-Betreuung?", "Das hängt von den betreuten Systemen, dem gewünschten Umfang und den vereinbarten Serviceleistungen ab. Sie erhalten ein individuelles Angebot."]
] as const;
