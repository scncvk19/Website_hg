# HG-Systeme – Website

Ich pflege die Firmenpräsenz unter https://www.hg-systeme.de mit Next.js, React, TypeScript und eigenem CSS. Die Website dient der Vorstellung unserer Leistungen, unseres Unternehmens und der Kontaktaufnahme. Deutsch ist Standardsprache, Englisch steht unter /en bereit.

## Produktiver Betrieb

- Maßgebliches Firmen-Repository: https://github.com/Hg-Systeme428/Website (main). Entwicklungsstand: https://github.com/scncvk19/Website_hg. Die Übertragung des SEO-Commits 8f92892 ins Firmen-Repository wurde am 16.11.2026 vom Nutzer bestätigt.
- Hosting: Vercel, laut Nutzer aktuell Hobby. Die geschäftliche Verwendung ist im Hobby-Tarif nicht zulässig; geeigneten Tarif oder kommerziell zulässiges Hosting kläre ich mit der Geschäftsleitung.
- Die Domain ist verbunden. Bestehende DNS-/Mail-Einträge bleiben unverändert.
- Kontaktformular über Web3Forms und hCaptcha: erfolgreicher Funktionstest durch den Nutzer bestätigt. Die technische Umsetzung bleibt unverändert. Empfänger info@hg-systeme.de ist bestätigt; Auftragsverarbeitung, Datenübermittlungen und Löschfristen separat bestätigen.
- Kein Tracking laut Nutzer; keine zusätzlichen Marketingdienste. Instagram-API bleibt zurückgestellt; Profilverlinkungen genügen.
- Impressum DE/EN: Firmenname HG-Systeme e.K., Amtsgericht Mannheim HRA 332816 und USt-ID DE164684637 bestätigt und zentral ergänzt. Ich spreche Geschäfts- und Privatkunden an; keine erfundenen Öffnungszeiten oder Gründungsjahre. Michael Gray (Inhaber) ist als Ansprechpartner für Datenschutz unter m.gray@hg-systeme.de bestätigt und DE/EN eingetragen. Ich verwende nicht die Bezeichnung Datenschutzbeauftragter, da der Inhaber seine eigenen Entscheidungen nicht unabhängig kontrollieren kann (Art. 38 Abs. 6 DSGVO). Die Benennungspflicht nach Art. 37 DSGVO und § 38 BDSG sowie eine etwaige frühere formelle Benennung kläre ich gesondert. Die Datenschutztexte sind noch nicht abschließend vervollständigt. W-IdNr. bleibt zu klären.

## Lokale Entwicklung und Pflege

Voraussetzung: Node.js 22 oder neuer und npm. Im Firmen-Checkout:

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

Lokal unter http://localhost:3000. Nach dem Erstellen und Einchecken einer Lockdatei verwende ich npm ci. Der GitHub-Workflow Website checks prüft TypeScript und den Produktionsbuild. Ich ändere beide Sprachfassungen und prüfe die betroffenen Seiten vor dem Push. Keine Zugangsdaten oder Kundendaten einchecken.

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

Historische Zertifikate bleiben ausdrücklich historisch; aktuelle Partnerstufen und Zertifikatsgültigkeit müssen bestätigt sein. Herstellerlogos werden lokal ausgeliefert. Der manuelle Importworkflow verwendet scripts/import_partner_logos.py. Die alte Website und frühere Entwicklungsstände sind in der Git-Historie nachvollziehbar; eine separate STRATO-Sicherung ist noch nicht bestätigt.

## Kontakt und externe Dienste

Ich verwende die vorhandene Produktionskonfiguration für Web3Forms. Die Variablen HG_CONTACT_FORM_ENABLED=true und HG_WEB3FORMS_ACCESS_KEY werden im Hosting gesetzt, nicht eingecheckt. Der Formularschlüssel ist ein öffentlicher Schlüssel, kein SMTP-Passwort. hCaptcha wird erst nach Bestätigung des Datenschutzhinweises geladen; Web3Forms muss die Prüfung serverseitig erzwingen. Die Dankeseite ist fest und enthält keine Formulardaten in der URL. Telefon und E-Mail bleiben als Alternativen verfügbar. Die optionale Google-Maps-Karte lädt erst nach Klick. Die Instagram-Schnittstelle bleibt deaktiviert; die bisherige Implementierung und Anleitung sind in der Git-Historie erhalten.

## Google und Suchmaschinen

Ich gebe die Indexierung ausschließlich in Produktion frei: Vercel setzt VERCEL_ENV=production. Bei einem späteren anderen Hosting kann ich HG_PUBLIC_INDEXING=true für den öffentlichen Build setzen; interne Builds bleiben standardmäßig noindex. Bei Vercel muss die automatische Bereitstellung der Systemvariablen aktiv sein. Vorschauen benötigen bei vertraulichen Inhalten zusätzlich echten Zugriffsschutz.

Die Sitemap enthält die öffentlichen DE-/EN-Routen mit Sprachalternativen, aber keine Dankeseiten. Die Produktions-robots.txt erlaubt Crawling; beide Root-Layouts und der HTTP-Header erlauben Indexierung. Dankeseiten behalten noindex. Nach Übernahme ins Firmen-Repository und erfolgreichem Produktionsdeployment prüfe ich /robots.txt, /sitemap.xml und die HTTP-Header. Google Search Console: Domain verifizieren, https://www.hg-systeme.de/sitemap.xml einreichen und Startseite zur Indexierung beantragen. Die tatsächliche Aufnahme erfolgt durch Google und ist nicht garantiert.

## Status und Wartung

Ich halte die Website als schlanken Firmenauftritt ohne zusätzliche Plattformen. Der SEO-Quellcode wurde laut Nutzer ins Firmen-Repository übertragen; Live-Deployment und Suchmaschinenaufnahme werden separat bestätigt. Die laufenden Aufgaben stehen in TODO.md, die noch zu bestätigenden Angaben in OFFENE-FRAGEN.md.
