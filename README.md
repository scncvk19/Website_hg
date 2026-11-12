# HG-Systeme – Website

Interner Entwurf für einen neuen Firmenauftritt von HG-Systeme e.K., Eberbach. Ich orientiere mich an meiner OWA-Labs-Website: Next.js, React, TypeScript, wiederverwendbare Komponenten und eine klare Projektstruktur. Für diesen Auftritt verwende ich bewusst eigenes CSS statt zusätzlicher UI- oder Animationsbibliotheken. Die bestehende Website hg-systeme.de wird nicht verändert.

## Was enthalten ist

- Startseite mit regionaler Positionierung, verlinktem IT-Konzept und fünfstufigem Neukundenmodell.
- Sieben eigene Leistungsseiten: IT-Betreuung, Sicherheitscheck, Backup, Firewall/Netzwerk, Schulungen, Green IT und Automatisierung.
- Über uns mit öffentlich beschriebener Branchenerfahrung (Medizin, Automobil, Industrie).
- Ratgeber, FAQ und getrennte Kontaktwege für Interessenten und Bestandskunden.
- Responsive Navigation, mobile Kartenlayouts, lokale SVG-Illustration und Fokusmarkierungen.
- Impressum- und Datenschutzentwürfe mit offenen Pflichtangaben.
- Noindex-Metadaten, X-Robots-Tag und robots.txt für die interne Vorschau. **Noindex ist kein Zugriffsschutz.** Kein öffentlicher Betrieb ohne Freigabe.

## Lokal starten

Voraussetzung: Node.js 22 oder neuer mit npm.

```bash
git clone https://github.com/scncvk19/Website_hg.git
cd Website_hg
npm install
npm run dev
```

Dann http://localhost:3000 öffnen. Für eine Produktionsprüfung nach erfolgreicher Installation:

```bash
npm run typecheck
npm run build
npm run start
```

Ich pinne Next.js und React auf die bei Erstellung (12.11.2026) recherchierten stabilen Versionen. Next.js 16.4.6, React 19.3.1, TypeScript 5.9.3. Die Installation, der Next.js-Produktionsbuild und der TypeScript-Check waren am 12.11.2026 in [GitHub Actions](https://github.com/scncvk19/Website_hg/actions/runs/43207107291) erfolgreich. Eine Lockdatei ist noch nicht eingecheckt. Nach erfolgreichem npm install package-lock.json committen und weitere Installationen mit npm ci durchführen. Vor Veröffentlichung Abhängigkeiten auf Aktualität prüfen.

## Lokale Vorschau mit Docker Desktop (Windows)

Ich kann die Website alternativ in einem Linux-Container unter Docker Desktop mit WSL 2 betreiben. Git und ein laufendes, für den Firmen-PC freigegebenes Docker Desktop sind erforderlich; Node.js muss nicht unter Windows installiert werden.

Im bereits geklonten Repository in PowerShell:

```powershell
git status
git pull --ff-only
docker compose up -d --build
docker compose ps
```

Ich öffne anschließend http://localhost:3000. Der Port wird nur an 127.0.0.1 gebunden. Das Image website-hg:local wird lokal aus dem privaten Repository gebaut; das Basisimage node:22-bookworm-slim stammt von Docker Hub. Ich veröffentliche kein Firmenimage. Bei Problemen nutze ich `docker compose logs --tail=100 website`; zum Beenden `docker compose down`.

Der Dockerfile baut Next.js und startet als nicht privilegierter Benutzer. Da noch keine package-lock.json vorhanden ist, verwendet der erste Build npm install; bei vorhandener Lockdatei wird npm ci verwendet. Der aktuelle Stand muss nach der Codebereinigung noch lokal mit Docker Desktop geprüft werden. Die produktive Firmenwebsite, DNS und bestehende Container bleiben unverändert. Docker Desktop muss für die geschäftliche Nutzung freigegeben sein.

## Struktur und Inhaltspflege

Ich pflege die Texte in den vorhandenen Dateien. Deutsch und Englisch bleiben getrennt, gemeinsame Firmenangaben und Komponenten verwende ich nur einmal.

| Inhalt | Datei / Verzeichnis |
|---|---|
| Firmenname, Anschrift, Telefon, E-Mail, LinkedIn | `lib/content.ts` → `company` |
| GitHub, Instagram, LinkedIn | `lib/social.ts` → `socialProfiles`; LinkedIn übernimmt `company.linkedin` |
| Deutsche Leistungen, Leistungsumfang, FAQ | `lib/content.ts` → `services`, `faqs` |
| Englische Leistungen und FAQ | `lib/content-en.ts` → `servicesEn`, `faqsEn` |
| Startseite, Überschrift, Einleitung | `app/(de)/page.tsx`, `app/(en)/en/page.tsx` |
| Branchen und Unternehmensbeschreibung | `app/(de)/ueber-uns/page.tsx`, `app/(en)/en/about/page.tsx` |
| Leistungsübersichten und Detailseiten | `app/(de)/leistungen/`, `app/(en)/en/services/`; Inhalte zentral in den Leistungsdateien |
| IT-Konzept und sechs verlinkte Bereiche | `components/ITConcept.tsx` |
| Neukundenmodell und fünf Prozessstufen | `components/ITApproach.tsx` |
| Zertifikate, Partner, Herstellerlinks und historische Nachweise | `lib/credentials.ts` |
| Darstellung der Qualifikationen | `components/Credentials.tsx`, `FeaturedCertificates.tsx`, `TechnologyPartners.tsx`, `CertificatesPage.tsx`, `BrandMark.tsx` |
| Navigation, Footer, Slogan, Kontaktbanner | `components/Site.tsx` → `copy`, `Header`, `Footer`, `ContactBand` |
| Social-Media-Icons | `components/SocialLinks.tsx` |
| Kontaktseite, Formular- und Bestätigungstexte | `components/ContactPage.tsx`, `ContactForm.tsx`, `ContactThanks.tsx` |
| Ratgeber | `app/(de)/ratgeber/page.tsx`, `app/(en)/en/guide/page.tsx`; FAQ in `lib/content*.ts` |
| Impressum | `app/(de)/impressum/page.tsx`, `app/(en)/en/legal/page.tsx` |
| Datenschutz | `app/(de)/datenschutz/page.tsx`, `app/(en)/en/privacy/page.tsx` |
| Sprachen und URL-Paare | `lib/locale.ts`, `components/LanguageSwitch.tsx` |
| Firmenlogo und Favicon | `public/images/branding/`; Metadaten in `app/(de)/layout.tsx`, `app/(en)/layout.tsx` |
| Herstellerlogos | `public/images/partners/`; Zuordnung in `components/BrandMark.tsx` |
| Farben, Schrift und Abstände | `app/globals.css` (CSS-Variablen in `:root`) |
| Navigation, Social Media und Footer-Design | `components/navigation.module.css` |
| Grafiken und Qualifikationsdesign | `components/it-concept.module.css`, `components/credentials.module.css` |
| Docker und lokale Konfiguration | `Dockerfile`, `compose.yaml`, `.env.example`; echte Werte nur in lokaler `.env` |
| Aufgaben und Freigaben | `TODO.md`, `OFFENE-FRAGEN.md` |

### Beispiel: Firmenprofile ändern

In `lib/social.ts` trage ich bei GitHub und Instagram die vollständige HTTPS-Adresse des freigegebenen HG-Systeme-Firmenprofils ein. LinkedIn wird über `company.linkedin` gepflegt. Leere URLs werden nicht angezeigt. Header, mobiles Menü, Footer und Kontaktseite verwenden dieselbe zentrale Liste. Ich verlinke keine privaten Accounts oder Repositories als Firmenprofile.

### Änderungen prüfen und übernehmen

Ich ändere beide Sprachfassungen, prüfe mit `git diff`, baue die lokale Vorschau mit `docker compose up -d --build` neu und kontrolliere die betroffenen Seiten im Browser. Bei Slug-Änderungen aktualisiere ich auch `lib/locale.ts` und plane gegebenenfalls Weiterleitungen. Keine Zugangsdaten oder internen Kundendaten einchecken.

## Design und Inhalte

Nach der ersten Designrückmeldung verwende ich Blau, Marineblau und helle Hintergründe. Die Startseite hat einen hellen Einstieg, dunklere Fließtexte und kontrastreiche Buttons. Die wichtigsten Text-Farb-Paare wurden rechnerisch geprüft (6,2:1 bis 15,3:1); eine vollständige Browser- und Barrierefreiheitsprüfung steht aus. Ich verwende die hochgeladene transparente PNG-Datei unverändert unter `public/images/branding/hg-systeme-logo.png` für Header und Footer auf allen Seiten (DE/EN). Die externe LinkedIn-Bildquelle entfällt. Das Logo wird unverzerrt dargestellt. Der helle Footer verwendet das transparente Logo ohne Helligkeitsfilter. Ich verwende auch ein 64×64-PNG-Favicon aus dem Firmenlogo; die endgültige Markenfreigabe bleibt offen. Ich bestätige Corporate Design, Fotos, Bildrechte, aktuelle Teamangaben und Referenzen. Keine fremden Logos oder erfundenen Kundenstimmen.

Die Inhalte basieren auf unserem [Wachstumskonzept](https://github.com/scncvk19/Startegie), insbesondere der Website-Analyse und den Dienstleistungsentwürfen. Ungeprüfte Preise, SLA, Registerangaben und neue Referenzen werden nicht behauptet. Die veröffentlichten Kontaktdaten der bestehenden [Impressumsseite](https://www.hg-systeme.de/IMPRESSUM/) dienen als Referenz und müssen vor Veröffentlichung bestätigt werden. Kostenlose Erstgespräche, konkrete neue Pakete und Workshopformate sind noch nicht freigegeben.

## Datenschutz und Betrieb

Keine Trackingbibliotheken, externen Schriftarten oder Karten-Embeds. Das Kontaktformular ist vorbereitet, aber standardmäßig deaktiviert. Bei Freigabe verwende ich Web3Forms und hCaptcha; beide Dienste sind externe Datenempfänger. Das Firmenlogo wird lokal ausgeliefert; für das Bild ist keine Verbindung zu LinkedIn erforderlich. Telefon- und E-Mail-Links führen zum vorhandenen Kontakt; der Supportweg für Bestandskunden bleibt wie vereinbart. Hosting, Serverprotokolle und Rechtsangaben müssen vor Freigabe fachlich geprüft werden. Kein echter Kundenvorgang wurde ausgelöst.

Vercel ist eine mögliche spätere Plattform wie bei OWA Labs. Noch kein Deployment, keine Domain-Änderung und kein Zugriff auf die produktive Website. Vor einer Vorschau auf Vercel Zugriffsschutz prüfen (privates GitHub-Repository schützt eine öffentliche Deployment-URL nicht); lokale Vorschau ist der sichere erste Schritt. Für eine öffentliche Freigabe müssen Entwurfsbanner, Noindex/robots und Rechtsseiten bewusst aktualisiert werden, kanonische Produktions-URL und Sitemap festgelegt und die Freigabe dokumentiert sein.

## Status

Quellcode und Seitenstruktur erstellt; die deutschen und englischen Routen werden gemeinsam gepflegt. Die statisch untersuchten internen Linkziele sind vorhanden. Browserprüfung, Branding, Datenschutz, tatsächliche Leistungsfreigabe und Veröffentlichung sind offen. Die englische Fassung und das vorbereitete Kontaktformular sind implementiert; Live-Versand ist nicht aktiviert. Siehe [TODO](TODO.md).

## Deutsch / Englisch und Kontaktformular

Ich habe die Website auf Deutsch und Englisch aufgebaut. Die bisherigen deutschen URLs bleiben unverändert, die englischen Seiten beginnen mit /en. Die Sprachauswahl verlinkt auf die entsprechende Seite der anderen Sprache. Beide Sprachen nutzen das gleiche Layout, dieselben Unternehmensdaten und das gleiche CSS; englische Leistungsbeschreibungen und FAQ pflege ich in lib/content-en.ts. Die beiden Route-Gruppen haben eigene Root-Layouts für korrektes HTML-lang. Der Wechsel zwischen den Sprachen lädt das Dokument neu.

Das Formular verwendet Web3Forms nach dem Vorbild von OWA Labs. Der Empfänger ist an den eigenen HG-Systeme-Formularschlüssel gebunden. Ich übertrage ausschließlich definierte Felder per HTTPS an den festen Web3Forms-Endpunkt. Das Captcha wird erst nach Bestätigung der Datenschutzhinweise geladen. Der erfolgreiche Versand führt auf eine feste interne Dankeseite, ohne personenbezogene Angaben in der URL. Die deutsche und englische Kontaktseite bleiben auch ohne Formularversand per Telefon und E-Mail nutzbar.

### Aktivierung (erst nach Freigabe)

1. Eigenes Web3Forms-Formular für ein bestätigtes Firmenpostfach anlegen. Keinen OWA-Labs-Schlüssel verwenden.
2. hCaptcha in den Web3Forms-Formulareinstellungen verbindlich aktivieren (serverseitige Prüfung). Bei einem geeigneten Tarif zusätzlich die produktive Domain beschränken.
3. Datenschutz, Auftragsverarbeitung, Drittlandtransfer, Empfänger, Aufbewahrung und Anbieterbedingungen fachlich prüfen und freigeben lassen. Web3Forms nennt US-Server; hCaptcha ist ebenfalls ein externer Anbieter. Wenn diese Anbieter nicht freigegeben werden, verwende ich stattdessen einen betrieblich freigegebenen Maildienst.
4. .env.example nach .env kopieren, den HG-Systeme-Formularschlüssel lokal eintragen und HG_CONTACT_FORM_ENABLED=true setzen. Bei Docker Compose wird die Konfiguration zur Laufzeit übernommen; nach Änderung docker compose up -d ausführen. Für npm lokal .env verwenden. .env wird nicht eingecheckt oder in das Docker-Image kopiert.
5. Nach Freigabe mit Testdaten auf einer zugelassenen HTTPS-Umgebung prüfen: fehlendes/ungültiges Captcha muss abgewiesen werden, erfolgreiche Zustellung an das richtige Postfach, Antwortadresse, Fehlerfall, beide Sprachen und interne Dankeseite. Der öffentliche Web3Forms-Formularschlüssel ist im Browser sichtbar; er ist kein vertrauliches SMTP-Passwort.

Ich habe keine realen Kontaktanfragen ausgelöst und keinen produktiven Formulardienst aktiviert. Keine Weiterleitung oder Weitergabe an OWA Labs. Ohne eigene Konfiguration bleibt der Versand deaktiviert. Die Angaben zu Datenschutz und Leistungen sind weiterhin interne Entwürfe.

## Partner, Qualifikationen und Referenzen

Ich pflege die Zertifizierungen, Hersteller und zwölf veröffentlichten Nachweise zentral in `lib/credentials.ts`. Die Seite steht unter /zertifikate und /en/certificates zur Verfügung. Auf Startseite und Über-uns-Seite verwende ich eine reduzierte Übersicht.

- Microsoft Certified: Azure Administrator Associate (AZ-104) und ITIL 4 Foundation sind intern konkret benannt. Persönliche Gültigkeit vor Veröffentlichung prüfen.
- G DATA CyberDefense ist intern als Silver Partner benannt. Dell ist als Partner ohne Stufe aufgeführt, WatchGuard ohne unbestätigte Partnerstufe.
- Historische Nachweise: Kaspersky, Samsung Knox, terra cloud, Password Safe 2017/2020, medidoc, macmon und macmon Partner 2018, Windows Server 2019 Grundkurs, Microsoft Sway Grundkurs, KFZ-Gewerbe 2018 sowie EMC Authorized Partner. Sie werden nur namentlich, mit bekannten Jahren und Herstellerlinks dargestellt; keine Aussage über aktuelle Zertifizierung.

Quellen: [Über uns](https://www.hg-systeme.de/UeBER-UNS/), [Zertifikate](https://www.hg-systeme.de/Zertifikate/), [Unternehmensprofil](https://de.linkedin.com/company/hg-systeme-e-k), [Website-Analyse](https://github.com/scncvk19/Startegie/blob/main/03_Marketing/Website-Analyse.md). Die alte Zertifikatsseite wurde am 12.11.2026 abgeglichen. Die früher importierten Urkundenbilder und ihre Bildquellen bleiben in der privaten Git-Historie, werden aber nicht mehr ausgeliefert oder heruntergeladen.

### Herstellerlogos

Microsoft, PeopleCert, Dell und WatchGuard liegen lokal in `public/images/partners/`. G DATA und Password Safe erscheinen bis zur Freigabe geeigneter Logo-Dateien als Text. Die Zuordnung steht in `components/BrandMark.tsx`, die Importquellen in `lib/partner-logo-assets.json`. Der manuelle GitHub-Workflow `Import partner logos` nutzt ausschließlich `scripts/import_partner_logos.py`, das SVG und PNG prüft und vorhandene gültige Dateien beibehält. Kein automatischer Bilderimport im Betrieb, keine externen Bildanfragen. Markenrechte und Partnerstatus vor Veröffentlichung bestätigen.

### IT-Konzept, Neukunden und Automatisierung

Ich habe die Branchenleiste zwischen dem Einstieg und dem Neukundenmodell entfernt. Die Startseite führt direkt vom IT-Konzept zum Vorgehensmodell. Die Branchenbeschreibung bleibt unter Über uns in beiden Sprachen erhalten.

Ich habe die bestehende IT-Konzept-Grafik in einer gemeinsamen DE/EN-Komponente erweitert. Sechs verlinkte Leistungsbereiche führen direkt zu Backup, Netzwerk, Sicherheit, Support, Awareness und Automatisierung. Die neue Stufenpyramide auf beiden Startseiten erklärt die Arbeitsweise vom Erfassen der Architektur über Risikobewertung und Abhärtung bis zu Prozessoptimierung und laufendem Betrieb. Die fünf Schritte sind im Quelltext chronologisch, visuell vom Fundament nach oben angeordnet; auf kleinen Geräten erscheinen gleich breite Stufen. Sie ersetzt den bisherigen wiederholten Sicherheitscheck-Block und verweist weiter auf die bestehende Sicherheitscheck-Seite. Änderungen erfolgen nach Vereinbarung, mit geeigneter Sicherung und Prüfung. 

Für Industrie habe ich Datenerfassung, Datenverarbeitung, Schnittstellen und softwarebasierte Prozesssteuerung konkretisiert. Die siebte Leistungsseite `/leistungen/automatisierung` bzw. `/en/services/automation` ist über die vorhandene zentrale Leistungsstruktur, die Startseite, den Footer und die Sprachauswahl erreichbar. Ich grenze Produktionsanlagen, SPS und sicherheitskritische Steuerungen bewusst ab: kein pauschales OT-Angebot oder Eingriff ohne separate fachliche Prüfung und Freigabe. Die neuen Inhalte sind interne Angebotsentwürfe und werden vor Veröffentlichung fachlich bestätigt. Die Grafiken sind lokale React-/CSS-Komponenten, keine Bilder oder externen Bibliotheken. Der Produktionsbuild ist erfolgreich geprüft; die Browserdarstellung steht noch aus.


### Navigation und kompakter Footer

Nach dem Vorbild meiner OWA-Labs-Website verwende ich kleine lokale SVG-Social-Icons im Desktop-Header, im mobilen Menü, auf der Kontaktseite und im Footer. Das bestätigte HG-Systeme-LinkedIn-Profil ist aktiv. GitHub und Instagram bleiben bis zur Bestätigung der öffentlichen Firmenprofile ausgeblendet. Keine privaten OWA-Labs-Adressen, Platzhalterlinks, Social-Media-Embeds oder Tracking-Skripte. Der helle Footer zeigt Logo, Slogan, Telefon und Social-Links; Leistungen, Unternehmen und Kontakt sind standardmäßig geschlossene native details-Elemente. Impressum und Datenschutz bleiben direkt sichtbar. Die responsive Darstellung und Bedienung sind noch im Browser zu prüfen.


### Codeprüfung

Ich habe die nicht mehr genutzten globalen CSS-Regeln für die ursprüngliche Grafik, Branchenleiste, Sicherheitscheck-Grafik, alten Footer und Zertifikatsgalerie entfernt. Überholte Icon-Definitionen und alte Zertifikats-Downloadfunktionen sind bereinigt. Die noch benötigte Dateivalidierung ist direkt im Herstellerlogo-Import enthalten. Die historischen Quellen bleiben nachvollziehbar; die öffentliche Website enthält keine Urkundenbilder. Beide Sprachen und die aktuellen Funktionen bleiben unverändert. Der GitHub-Workflow `Website checks` prüft TypeScript und den Next.js-Produktionsbuild bei Änderungen am Code; er verwendet keine Zugangsdaten und führt keine Bereitstellung aus.

Prüfergebnis 12.11.2026: [Website checks #43207107291](https://github.com/scncvk19/Website_hg/actions/runs/43207107291) erfolgreich für Commit 573ee61. npm-Installation, Produktionsbuild (33 statisch generierte Seiten), `npm run typecheck` und Validierung der vier vorhandenen Herstellerlogos ohne Netzwerkzugriff bestanden. Die Warnungen zu punycode und zur Node-20-Laufzeit der GitHub-Actions sind nicht blockierend; Actions-Versionen bei der nächsten planmäßigen Abhängigkeitspflege aktualisieren. Keine produktive Bereitstellung. Lokale Docker- und Browserprüfung sowie Lockdatei bleiben offen.
