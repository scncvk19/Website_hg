# HG-Systeme – Website

Ich pflege die Firmenpräsenz unter https://www.hg-systeme.de mit Next.js, React, TypeScript und eigenem CSS. Die Website dient der Vorstellung unserer Leistungen, unseres Unternehmens und der Kontaktaufnahme. Deutsch ist Standardsprache, Englisch steht unter /en bereit.

## Produktiver Betrieb

- Maßgebliches Firmen-Repository: https://github.com/Hg-Systeme428/Website (main). Entwicklungsstand: https://github.com/scncvk19/Website_hg. Ich habe den geprüften Entwicklungsstand a116fab am 16.11.2026 mit dem Firmen-Repository durch den Merge-Commit 996cf1ab4d9e849d648cca4643ff939cccd47689 zusammengeführt. Der Nutzer bestätigte den erfolgreichen Push und anschließend den Firmenstand 57e7528 (nachfolgende Titelkorrektur).
- Hosting: Vercel. Der Nutzer meldet den Hostingpunkt als erledigt. Den konkreten geschäftlich zulässigen Tarif bestätige ich bei der Betriebsübergabe; die Vertragsprüfung bleibt eine separate betriebliche Aufgabe.
- Die Domain ist verbunden. Bestehende DNS-/Mail-Einträge bleiben unverändert.
- Kontaktformular über Web3Forms und hCaptcha: erfolgreicher Funktionstest durch den Nutzer bestätigt. Die technische Umsetzung bleibt unverändert. Empfänger info@hg-systeme.de und sieben Tage Aufbewahrung beim Formularanbieter sind bestätigt.
- Kein Tracking laut Nutzer; keine zusätzlichen Marketingdienste. Instagram-API bleibt zurückgestellt; Profilverlinkungen genügen.
- Impressum DE/EN: Firmenname HG-Systeme e.K., Amtsgericht Mannheim HRA 332816 und USt-ID DE164684637 bestätigt und zentral ergänzt. Ich spreche Geschäfts- und Privatkunden an; keine erfundenen Öffnungszeiten oder Gründungsjahre. Michael Gray (Inhaber) ist als Ansprechpartner für Datenschutz unter m.gray@hg-systeme.de bestätigt und DE/EN eingetragen. Ich verwende nicht die Bezeichnung Datenschutzbeauftragter, da der Inhaber seine eigenen Entscheidungen nicht unabhängig kontrollieren kann (Art. 38 Abs. 6 DSGVO). Die betrieblichen Fragen zur Benennungspflicht bleiben getrennt von der Website-Entwicklung in OFFENE-FRAGEN.md dokumentiert. Ich habe die Datenschutzerklärung DE/EN am 16.11.2026 auf den tatsächlichen Website-Betrieb ausgerichtet (Hosting, Kontakt, Web3Forms, hCaptcha, Maps, externe Links, Rechtsgrundlagen, Speicher-/Löschkriterien, Rechte und Aufsicht). Interne Entwurfshinweise sind aus den öffentlichen Rechtstexten entfernt. Die frühere Haftungs-/Urheberrechtsinformation steht im Impressum. Ich behandle die Anbietervereinbarungen, Drittlandgarantien und die betriebliche Löschpraxis außerhalb der aktiven Website-Aufgaben; eine rechtliche Freigabe behaupte ich nicht. Web3Forms-Aufbewahrung ist laut Nutzer auf sieben Tage eingestellt; ich habe beide Datenschutzfassungen entsprechend angepasst. Die öffentliche Datenschutzerklärung enthält auch Kriterien für die separate Aufbewahrung im Firmenpostfach. Eine W-IdNr. ist laut Nutzer nicht vorhanden; ich lasse sie im Impressum weg und ergänze sie erst bei einer Zuteilung.

## Lokale Entwicklung und Pflege

Voraussetzung: Node.js 22 oder neuer und npm. Im Firmen-Checkout:

```bash
npm ci
npm run build
npm run typecheck
npm run dev
```

Lokal unter http://localhost:3000. Ich verwende die eingecheckte package-lock.json und npm ci für reproduzierbare Installationen. GitHub Actions prüft die produktiven Abhängigkeiten per npm audit, Produktionsbuild, TypeScript, lokale Herstellerlogos, alle 36 Seiten einschließlich Dankeseiten, interne Links, Robots-Metadaten, Sitemap, HTTP-Sicherheitsheader und das Layout in Chrome bei 320, 390, 844, 1280 und 1440 px. Die Browserprüfung verwendet ein temporäres Testwerkzeug außerhalb der Anwendungsabhängigkeiten; keine echten Formularanfragen oder externen Dienste im Test. Ich ändere beide Sprachfassungen und prüfe die betroffenen Seiten. Keine Zugangsdaten oder Kundendaten einchecken.

### Docker-Testumgebung

```bash
git pull --ff-only
docker compose up -d --build
docker compose ps
```

Standardbindung 127.0.0.1:3000; auf der internen Debian-Test-VM verwende ich die freigegebene LAN-IP in der ignorierten .env. Dort ist das Bereitstellungsskript vorhanden:

```bash
cd ~/Website/Website_hg-main/Website_hg
git pull --ff-only
bash scripts/deploy-test.sh 192.168.17.54
```

Die lokale Testumgebung wurde erfolgreich bereitgestellt. Die IP ist die bestätigte interne Test-IP; die tatsächliche Freigabe und DHCP-Reservierung bleiben separat zu bestätigen. Kein öffentliches Portforwarding. Vorherige lokale Windows-Änderungen bleiben im Stash, bis sie geprüft sind.

## Struktur und Inhaltspflege

| Inhalt | Datei / Verzeichnis |
|---|---|
| Firmenname, Inhaber, Register, USt-ID, Anschrift, Telefon, E-Mail, LinkedIn | lib/content.ts → company |
| Deutsche Leistungen, FAQ | lib/content.ts |
| Englische Leistungen, FAQ | lib/content-en.ts |
| Startseite DE/EN | app/(de)/page.tsx, app/(en)/en/page.tsx |
| Über uns | components/AboutPage.tsx |
| Leistungsseiten | app/(de)/leistungen/, app/(en)/en/services/ |
| IT-Konzept / Neukundenmodell | components/ITConcept.tsx, components/ITApproach.tsx |
| Zertifikate und Hersteller | lib/credentials.ts, components/Credentials.tsx, TechnologyPartners.tsx, BrandMark.tsx |
| Navigation / Footer / Kontaktbanner | components/Site.tsx, navigation.module.css |
| Social-Profile | lib/social.ts, components/SocialLinks.tsx |
| Kontaktformular / Dankeseite | components/ContactPage.tsx, ContactForm.tsx, ContactThanks.tsx |
| Impressum | app/(de)/impressum/page.tsx, app/(en)/en/legal/page.tsx |
| Datenschutz | app/(de)/datenschutz/page.tsx, app/(en)/en/privacy/page.tsx |
| Standortkarte | components/LocationMap.tsx |
| Sprachen und Routen | lib/locale.ts, components/LanguageSwitch.tsx |
| SEO | lib/seo.ts, app/robots.ts, app/sitemap.ts, beide Root-Layouts, next.config.ts |
| Firmenlogo / Favicon | public/images/branding/ |
| Herstellerlogos | public/images/partners/; Quellen in README.md und lib/partner-logo-assets.json |
| Farben, Schrift, Abstände | app/globals.css |
| Docker und lokale Konfiguration | Dockerfile, compose.yaml, .env.example |
| Aufgaben / Freigaben | TODO.md, OFFENE-FRAGEN.md |

Historische Zertifikate bleiben ausdrücklich historisch. Ich zeige aktuell keine unbestätigten Partnerstufen und persönlichen Zertifizierungen; die Technologieübersicht bleibt bestehen. Nach bestätigter Gültigkeit können die Angaben in lib/credentials.ts wieder aktiviert werden. Herstellerlogos werden lokal ausgeliefert. Der manuelle Importworkflow verwendet scripts/import_partner_logos.py. Die alte Website und frühere Entwicklungsstände sind in der Git-Historie nachvollziehbar; die Weiterleitungen der alten STRATO-URLs sind laut Nutzer eingerichtet (16.11.2026). Eine separate STRATO-Sicherung und der DNS-/Mail-Rückweg sind noch nicht bestätigt. Ich lasse vorhandene Weiterleitungen unverändert und nehme keine DNS- oder Mail-Änderungen vor.

## Kontakt und externe Dienste

Ich verwende die vorhandene Produktionskonfiguration für Web3Forms. Die Variablen HG_CONTACT_FORM_ENABLED=true und HG_WEB3FORMS_ACCESS_KEY werden im Hosting gesetzt, nicht eingecheckt. Der Formularschlüssel ist ein öffentlicher Schlüssel, kein SMTP-Passwort. hCaptcha wird erst nach Bestätigung des Datenschutzhinweises geladen; Web3Forms muss die Prüfung serverseitig erzwingen. Die Dankeseite ist fest und enthält keine Formulardaten in der URL. Telefon und E-Mail bleiben als Alternativen verfügbar. Die Google-Maps-Karte bleibt auf Wunsch erhalten und lädt erst nach Klick. Die Instagram-Schnittstelle bleibt deaktiviert; die bisherige Implementierung und Anleitung sind in der Git-Historie erhalten.

## Bestätigte Unternehmensdarstellung

Ich biete ein kostenloses und unverbindliches Erstgespräch an; technische Prüfungen und weitere Leistungen werden gesondert vereinbart. Die Angabe von über 30 Jahren bezieht sich auf IT-Erfahrung, nicht auf das Unternehmensalter. Ich entferne interne Angebots- und Preisprüfvermerke aus den Kundentexten. Das Gründungsjahr und die Öffnungszeiten bleiben offen und werden nicht erfunden. Weitere betriebliche Rechtsfragen führe ich außerhalb der aktiven Website-Aufgaben in OFFENE-FRAGEN.md.

## Google und Suchmaschinen

Ich gebe die Indexierung ausschließlich in Produktion frei: Vercel setzt VERCEL_ENV=production. Bei einem späteren anderen Hosting kann ich HG_PUBLIC_INDEXING=true für den öffentlichen Build setzen; interne Builds bleiben standardmäßig noindex. Bei Vercel muss die automatische Bereitstellung der Systemvariablen aktiv sein. Vorschauen benötigen bei vertraulichen Inhalten zusätzlich echten Zugriffsschutz.

Die Sitemap enthält die öffentlichen DE-/EN-Routen mit Sprachalternativen, aber keine Dankeseiten. Die Produktions-robots.txt erlaubt Crawling; beide Root-Layouts und der HTTP-Header erlauben Indexierung. Dankeseiten behalten noindex. Die Live-Prüfung am 16.11.2026 bestätigte HTTP 200 für die Startseite und /sitemap.xml (application/xml), robots.txt mit Allow: / und Sitemap-Verweis, keinen X-Robots-Tag mit noindex auf der Startseite sowie die neue Permissions-Policy. Ich habe die Domain-Property hg-systeme.de in der Google Search Console eingerichtet und laut Nutzer über einen DNS-CNAME bei STRATO bestätigt. Die Sitemap https://www.hg-systeme.de/sitemap.xml ist eingereicht; nach anfänglichem Abruffehler bestätigte der Nutzer den Status Erfolgreich. Der technische Abruf lieferte HTTP 200 und gültiges XML mit 34 URLs. Als Nächstes prüfe ich die Startseite und beantrage ihre Indexierung. Die tatsächliche Aufnahme erfolgt durch Google und ist nicht garantiert.

## Status und Wartung

Ich halte die Website als schlanken Firmenauftritt ohne zusätzliche Plattformen. Die technische Abschlussprüfung (GitHub Actions [43859016499](https://github.com/scncvk19/Website_hg/actions/runs/43859016499), Commit 72882cd) war erfolgreich: Build, TypeScript, npm audit (keine bekannten Schwachstellen in produktiven Abhängigkeiten zum Prüfzeitpunkt), Logo-, Link- und Browserprüfung bestanden. Ich habe die dort erzeugte Lockdatei übernommen, Docker und CI auf npm ci umgestellt, die Kunden-FAQ DE/EN an die bestätigte Zielgruppe angepasst und die Sicherheitsheader um eine restriktive Permissions-Policy für Kamera, Mikrofon und Zahlungen ergänzt. Globale Tastatur-Fokusmarkierungen und Umbruch langer Überschriften sind verbessert. Die abschließende CI-Prüfung des Commits a116fab ([43859462170](https://github.com/scncvk19/Website_hg/actions/runs/43859462170)) war ebenfalls erfolgreich. Der Merge ins Firmen-Repository und die technische Live-Prüfung der Startseite, Sitemap und Indexierungsfreigabe sind bestätigt. Die Suchmaschinenaufnahme selbst prüfe ich noch in der Google Search Console. Die aktuelle Betriebsdokumentation ist im Entwicklungs-Repository nachgeführt; der Firmen-Stand enthält die zuvor übertragene Dokumentation. Weitere reine Dokumentationsänderungen übernehme ich bei Bedarf ohne erneuten Produktiv-Deploy. Die laufenden Aufgaben stehen in TODO.md, die noch zu bestätigenden Angaben in OFFENE-FRAGEN.md.
