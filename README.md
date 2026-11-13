# HG-Systeme – Website

Interner Entwurf für einen neuen Firmenauftritt von HG-Systeme e.K., Eberbach. Ich orientiere mich an meiner OWA-Labs-Website: Next.js, React, TypeScript, wiederverwendbare Komponenten und eine klare Projektstruktur. Für diesen Auftritt verwende ich bewusst eigenes CSS statt zusätzlicher UI- oder Animationsbibliotheken. Die bestehende Website hg-systeme.de wird nicht verändert.

## Was enthalten ist

- Startseite mit regionaler Positionierung, verlinktem IT-Konzept und fünfstufigem Neukundenmodell.
- Acht eigene Leistungsseiten: IT-Betreuung, Sicherheitscheck, Backup, E-Mail- und Dokumentenarchivierung (inoxision), Firewall/Netzwerk, Schulungen, Green IT und Automatisierung.
- Über uns mit Philosophie, IT-Security (Abwehr, Prävention, Reaktion), Gründer- und Unternehmensgeschichte, Branchen, Qualifikationen und drei Mitarbeitern.
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

Ich öffne anschließend http://localhost:3000. Standardmäßig wird der Port nur an 127.0.0.1 gebunden. Die lokale Variable `HG_WEBSITE_BIND_IP` kann auf einer freigegebenen internen Test-VM auf deren feste LAN-IP gesetzt werden. Das Image website-hg:local wird lokal aus dem privaten Repository gebaut; das Basisimage node:22-bookworm-slim stammt von Docker Hub. Ich veröffentliche kein Firmenimage. Bei Problemen nutze ich `docker compose logs --tail=100 website`; zum Beenden `docker compose down`.

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

In `lib/social.ts` pflege ich die bestätigten GitHub- und Instagram-Firmenprofile. LinkedIn wird über `company.linkedin` gepflegt. Leere URLs werden nicht angezeigt. Header, mobiles Menü, Footer und Kontaktseite verwenden dieselbe zentrale Liste. Ich verlinke keine privaten Accounts oder Repositories als Firmenprofile.

### Änderungen prüfen und übernehmen

Ich ändere beide Sprachfassungen, prüfe mit `git diff`, baue die lokale Vorschau mit `docker compose up -d --build` neu und kontrolliere die betroffenen Seiten im Browser. Bei Slug-Änderungen aktualisiere ich auch `lib/locale.ts` und plane gegebenenfalls Weiterleitungen. Keine Zugangsdaten oder internen Kundendaten einchecken.

## Design und Inhalte

Nach der ersten Designrückmeldung verwende ich Blau, Marineblau und helle Hintergründe. Die Startseite hat einen hellen Einstieg, dunklere Fließtexte und kontrastreiche Buttons. Die wichtigsten Text-Farb-Paare wurden rechnerisch geprüft (6,2:1 bis 15,3:1); eine vollständige Browser- und Barrierefreiheitsprüfung steht aus. Ich verwende die hochgeladene transparente PNG-Datei unverändert unter `public/images/branding/hg-systeme-logo.png` für Header und Footer auf allen Seiten (DE/EN). Die externe LinkedIn-Bildquelle entfällt. Das Logo wird unverzerrt dargestellt. Der helle Footer verwendet das transparente Logo ohne Helligkeitsfilter. Ich verwende auch ein 64×64-PNG-Favicon aus dem Firmenlogo; die endgültige Markenfreigabe bleibt offen. Ich bestätige Corporate Design, Fotos, Bildrechte, aktuelle Teamangaben und Referenzen. Keine fremden Logos oder erfundenen Kundenstimmen.

Die Inhalte basieren auf unserem [Wachstumskonzept](https://github.com/scncvk19/Startegie), insbesondere der Website-Analyse und den Dienstleistungsentwürfen. Ungeprüfte Preise, SLA, Registerangaben und neue Referenzen werden nicht behauptet. Die veröffentlichten Kontaktdaten der bestehenden [Impressumsseite](https://www.hg-systeme.de/IMPRESSUM/) dienen als Referenz und müssen vor Veröffentlichung bestätigt werden. Kostenlose Erstgespräche, konkrete neue Pakete und Workshopformate sind noch nicht freigegeben.

## Datenschutz und Betrieb

Keine Trackingbibliotheken oder externen Schriftarten. Die Standortkarte im Impressum lädt Google Maps erst nach ausdrücklichem Klick; ohne diesen erfolgt keine Kartenanfrage. Das Kontaktformular ist vorbereitet, aber standardmäßig deaktiviert. Bei Freigabe verwende ich Web3Forms und hCaptcha; beide Dienste sind externe Datenempfänger. Das Firmenlogo wird lokal ausgeliefert; für das Bild ist keine Verbindung zu LinkedIn erforderlich. Telefon- und E-Mail-Links führen zum vorhandenen Kontakt; der Supportweg für Bestandskunden bleibt wie vereinbart. Hosting, Serverprotokolle und Rechtsangaben müssen vor Freigabe fachlich geprüft werden. Kein echter Kundenvorgang wurde ausgelöst.

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

Microsoft, PeopleCert, Dell und WatchGuard liegen lokal in `public/images/partners/`. G DATA erscheint bis zur Freigabe eines geeigneten Logos als Text. Netwrix, inoxision und mediDOK sind als lokale Herstellerlogos ergänzt. Die Zuordnung steht in `components/BrandMark.tsx`, die Importquellen in `lib/partner-logo-assets.json`. Der manuelle GitHub-Workflow `Import partner logos` nutzt ausschließlich `scripts/import_partner_logos.py`, das SVG und PNG prüft und vorhandene gültige Dateien beibehält. Kein automatischer Bilderimport im Betrieb, keine externen Bildanfragen. Markenrechte und Partnerstatus vor Veröffentlichung bestätigen.

### IT-Konzept, Neukunden und Automatisierung

Ich habe die Branchenleiste zwischen dem Einstieg und dem Neukundenmodell entfernt. Die Startseite führt direkt vom IT-Konzept zum Vorgehensmodell. Die Branchenbeschreibung bleibt unter Über uns in beiden Sprachen erhalten.

Ich habe die bestehende IT-Konzept-Grafik in einer gemeinsamen DE/EN-Komponente erweitert. Sechs verlinkte Leistungsbereiche führen direkt zu Backup, Netzwerk, Sicherheit, Support, Awareness und Automatisierung. Die neue Stufenpyramide auf beiden Startseiten erklärt die Arbeitsweise vom Erfassen der Architektur über Risikobewertung und Abhärtung bis zu Prozessoptimierung und laufendem Betrieb. Die fünf Schritte sind im Quelltext chronologisch, visuell vom Fundament nach oben angeordnet; auf kleinen Geräten erscheinen gleich breite Stufen. Sie ersetzt den bisherigen wiederholten Sicherheitscheck-Block und verweist weiter auf die bestehende Sicherheitscheck-Seite. Änderungen erfolgen nach Vereinbarung, mit geeigneter Sicherung und Prüfung. 

Für Industrie habe ich Datenerfassung, Datenverarbeitung, Schnittstellen und softwarebasierte Prozesssteuerung konkretisiert. Die siebte Leistungsseite `/leistungen/automatisierung` bzw. `/en/services/automation` ist über die vorhandene zentrale Leistungsstruktur, die Startseite, den Footer und die Sprachauswahl erreichbar. Ich grenze Produktionsanlagen, SPS und sicherheitskritische Steuerungen bewusst ab: kein pauschales OT-Angebot oder Eingriff ohne separate fachliche Prüfung und Freigabe. Die neuen Inhalte sind interne Angebotsentwürfe und werden vor Veröffentlichung fachlich bestätigt. Die Grafiken sind lokale React-/CSS-Komponenten, keine Bilder oder externen Bibliotheken. Der Produktionsbuild ist erfolgreich geprüft; die Browserdarstellung steht noch aus.


### Navigation und kompakter Footer

Nach dem Vorbild meiner OWA-Labs-Website verwende ich kleine lokale SVG-Social-Icons im Desktop-Header, im mobilen Menü, auf der Kontaktseite und im Footer. Die bestätigten Firmenprofile GitHub, Instagram und LinkedIn sind aktiv. Instagram wird über die kanonische Profiladresse ohne den mitgelieferten xtok-Parameter verlinkt. Keine privaten OWA-Labs-Adressen, Platzhalterlinks, Social-Media-Embeds oder Tracking-Skripte. Der helle Footer zeigt Logo, Slogan, Telefon und Social-Links; Leistungen, Unternehmen und Kontakt sind standardmäßig geschlossene native details-Elemente. Impressum und Datenschutz bleiben direkt sichtbar. Die Aufklapppfeile stehen mit 6 px Abstand direkt hinter den Überschriften; die gesamte Summary-Zeile bleibt anklickbar und der Pfeil dreht sich beim Öffnen. Ich verwende dafür die vorhandene Footer-CSS-Regel in `components/navigation.module.css`. Die responsive Darstellung und Bedienung sind noch im Browser zu prüfen.


### Codeprüfung

Ich habe die nicht mehr genutzten globalen CSS-Regeln für die ursprüngliche Grafik, Branchenleiste, Sicherheitscheck-Grafik, alten Footer und Zertifikatsgalerie entfernt. Überholte Icon-Definitionen und alte Zertifikats-Downloadfunktionen sind bereinigt. Die noch benötigte Dateivalidierung ist direkt im Herstellerlogo-Import enthalten. Die historischen Quellen bleiben nachvollziehbar; die öffentliche Website enthält keine Urkundenbilder. Beide Sprachen und die aktuellen Funktionen bleiben unverändert. Der GitHub-Workflow `Website checks` prüft TypeScript und den Next.js-Produktionsbuild bei Änderungen am Code; er verwendet keine Zugangsdaten und führt keine Bereitstellung aus.

Prüfergebnis 12.11.2026: [Website checks #43207107291](https://github.com/scncvk19/Website_hg/actions/runs/43207107291) erfolgreich für Commit 573ee61. npm-Installation, Produktionsbuild (33 statisch generierte Seiten), `npm run typecheck` und Validierung der vier vorhandenen Herstellerlogos ohne Netzwerkzugriff bestanden. Die Warnungen zu punycode und zur Node-20-Laufzeit der GitHub-Actions sind nicht blockierend; Actions-Versionen bei der nächsten planmäßigen Abhängigkeitspflege aktualisieren. Keine produktive Bereitstellung. Lokale Docker- und Browserprüfung sowie Lockdatei bleiben offen.

### Impressum, Datenschutz, Standort und Kontaktdaten

Ich habe die öffentlich abrufbaren Unternehmensangaben aus dem [bisherigen Impressum](https://www.hg-systeme.de/IMPRESSUM/) übernommen: HG-Systeme e.K., Inhaber Michael Gray (verantwortlich nach § 18 MStV), Markgrafenstraße 3, 69412 Eberbach, Telefonnummer. Die zentrale Adresse in `lib/content.ts` lautet auf Wunsch info@hg-systeme.de. Sie wird in beiden Sprachen, im Footer, Kontakt und den Rechtsseiten verwendet. Die tatsächliche Zustelladresse des vorbereiteten Web3Forms-Formulars wird separat beim Anbieter festgelegt; kein Versand aktiviert oder getestet.

Ich habe die vier Themen der [bisherigen Datenschutzseite](https://www.hg-systeme.de/Datenschutz/) (Inhaltshaftung, Linkhaftung, Urheberrecht, Datenschutz/unverlangte Werbung) vollständig thematisch in eigenen Formulierungen übernommen und ins Englische übertragen. Die bestehenden Angaben zur neuen Website, optionalem Formular und den erforderlichen Datenschutzprüfungen bleiben erhalten. Veraltete TMG-Verweise werden nicht als geltendes Recht übernommen. Ich behaupte keine vollständige oder rechtlich geprüfte Datenschutzerklärung; Registerangaben, Hosting, tatsächliche Datenempfänger, Rechtsgrundlagen, Fristen und weitere Pflichtangaben vor Veröffentlichung bestätigen.

`components/LocationMap.tsx` und `components/location-map.module.css` enthalten die Standortkarte DE/EN. Die Firmenadresse wird aus `lib/content.ts` gebildet. Google Maps wird erst auf ausdrücklichen Klick geladen; die Karte kann wieder ausgeblendet werden. Ein separater externer Kartenlink bleibt verfügbar. Vor öffentlichem Einsatz prüfe ich Kartenfunktion, Einwilligung, mögliche Cookies, Datenempfänger, Drittlandübermittlung und Datenschutzhinweise. Ohne Klick wird kein Google-Maps-Iframe erzeugt. Keine API-Schlüssel erforderlich. Kein öffentliches Deployment.

Die Hauptnavigation enthält „Willkommen“ bzw. „Welcome“ als ersten Eintrag. Bei einer Fensterbreite bis 1120 px bleibt der Startseitenlink zusätzlich außerhalb des mobilen Menüs sichtbar; bis 480 px erhält er eine eigene kurze Zeile. Er führt in DE auf / und in EN auf /en. Logo, Links und der kompakte Footer bleiben erhalten. Die Breakpoints wurden für den zusätzlichen Menüpunkt und die drei Social-Icons angepasst. Offizielle Profile: https://github.com/Hg-Systeme428, https://www.instagram.com/hgsysteme/ und das bestehende LinkedIn-Profil. Aktualisierung der Linkziele, Karte, Navigation und E-Mail in beiden Sprachen implementiert; tatsächliche Browserprüfung bleibt offen.

### Beiträge / Instagram-Feed

Status: Die Darstellung der überarbeiteten Website wurde am 13.11.2026 vom Nutzer bestätigt. Die gesonderte Prüfung beider Sprachfassungen, Mobilansicht und Profil-Linkziele bleibt offen. Die Anbindung an Meta ist auf Wunsch zurückgestellt. Ich nutze die Beitragsseite zunächst als zentrale Übersicht mit zwei Karten für Instagram und LinkedIn, lokalen Icons, kurzen Beschreibungen und Links zu den bestätigten Firmenprofilen aus `lib/social.ts`. Bei deaktivierter API erscheint keine Fehlermeldung und kein leerer Feed. Die vorbereitete Schnittstelle bleibt erhalten und standardmäßig deaktiviert. Ich setze die Einrichtung erst nach erneuter Freigabe fort. Für die Redaktion plane ich einen gemeinsamen Beitrag (Grafik und Kerntext) für beide Plattformen, zunächst als Vorschlag einmal wöchentlich. Plattformabhängige Links und Hashtags passe ich bei Bedarf an. Veröffentlichung und Terminplanung erfolgen zunächst nach Freigabe über die jeweiligen Plattformen; kein neuer Dienst und keine automatische Veröffentlichung eingerichtet.

Ich habe die Seiten `/beitraege` und `/en/news` mit gemeinsamer Komponente `components/InstagramFeed.tsx`, Navigation, Footer-Link und Sprachwechsel ergänzt. Die Seiten verwenden die vorhandene Gestaltung. Die Links zu Instagram und LinkedIn bleiben unabhängig von der API verfügbar. Ohne aktivierte Konfiguration wird der gesamte Feed-Bereich ausgeblendet; bei aktiviertem Feed ohne Inhalte bleiben die Profilkarten als Rückfalloption. Keine erfundenen Posts, keine Widgets und keine zusätzliche Bibliothek.

Die offizielle [Instagram API with Instagram Login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/) benötigt ein professionelles Business-/Creator-Konto. Ich verwende für eigene Beiträge ausschließlich den Lesezugriff `instagram_business_basic`; keine Veröffentlichung, Kommentare oder Nachrichten. Vor dem Abruf prüft der Server den Kontonamen hgsysteme. Aus der zurückgegebenen Medienliste (bis zu 25 Einträge) werden bis zu neun gültige Beiträge nach Datum sortiert angezeigt. Reels erhalten nur Vorschaubilder; bei Galerien wird das Titelbild angezeigt. Texte bleiben in ihrer Originalsprache. Die API-Version ist konfigurierbar (Vorgabe v25.0).

#### Aktivierung – erst nach Firmen- und Datenschutzfreigabe

1. In [Meta for Developers](https://developers.facebook.com/apps/) eine Firmen-App erstellen bzw. eine geeignete vorhandene App verwenden. Instagram API mit Instagram Login hinzufügen, das professionelle Konto @hgsysteme verbinden und den Lesezugriff für eigene Medien autorisieren. Je nach App-Modus und Zugriffsstufe müssen App-Rollen, Kontozugriff und gegebenenfalls weitere Meta-Freigaben bestätigt werden.
2. Einen gültigen langlebigen Instagram-User-Access-Token für dieses Konto erzeugen. Token nicht per Chat, Screenshot, Terminalausgabe oder GitHub weitergeben.
3. Die bereits vorhandene lokale `.env` ergänzen (bestehende Formular-Konfiguration beibehalten; wenn keine vorhanden ist, `.env.example` als Vorlage verwenden). Nur lokal `HG_INSTAGRAM_ENABLED=true`, `HG_INSTAGRAM_ACCESS_TOKEN` mit dem eigenen Token und gegebenenfalls `HG_INSTAGRAM_API_VERSION` setzen. Die Datei ist ignoriert und vom Docker-Build ausgeschlossen. Auf Linux mit chmod 600 schützen; auf Windows Dateizugriff auf berechtigte Benutzer beschränken. Token ist ausschließlich serverseitig, kein NEXT_PUBLIC-Präfix.
4. `docker compose up -d --build` ausführen, danach /beitraege und /en/news aufrufen. Bei späteren Änderungen ausschließlich der Laufzeitkonfiguration reicht `docker compose up -d`. Prüfen, dass tatsächlich @hgsysteme angezeigt wird, Vorschaubilder und Links funktionieren und bei ungültigem Token die Seite ohne Details zur API-Störung nutzbar bleibt.
5. Langlebige Instagram-Tokens sind zeitlich befristet (typischerweise 60 Tage); Ablaufdatum im Betrieb erfassen und vor Ablauf erneuern. Diese Implementierung enthält noch keine automatische Token-Erneuerung. Nur der eigene autorisierte Administrator darf den Zugang verlängern oder ersetzen.

#### Technik, Datenschutz und Wartung

`lib/instagram.ts` lädt die Medien serverseitig. Die Daten einschließlich Bildverweise werden je Serverprozess bis zu einer Stunde im Arbeitsspeicher zwischengespeichert. Beim nächsten Seitenabruf nach Ablauf erfolgt automatisch eine neue Anfrage (kein dauernder Hintergrunddienst). Bei Fehlern erfolgt frühestens nach fünf Minuten ein neuer Versuch. Abgelaufene Daten werden bei einem fehlgeschlagenen Abruf nicht weiter angezeigt. Die Bildroute `app/api/instagram/image/[id]/route.ts` liefert nur Vorschaubilder der aktuellen Feed-Einträge, akzeptiert ausschließlich HTTPS-Bildquellen auf Meta-CDN-Domains, keine Weiterleitungen, begrenzt den Abruf auf zehn Sekunden und acht MiB und erlaubt ausschließlich bekannte Rasterbildformate. Es werden keine frei vom Browser übergebenen Ziel-URLs abgerufen. Vorschaubilder werden nicht dauerhaft gespeichert; sie werden serverseitig abgerufen und dürfen im Browser fünf Minuten gecacht werden. Keine Zugangsdaten in der Bildroute oder im Browser; keine externen Instagram-Skripte oder direkten CDN-Aufrufe durch Besucher beim Anzeigen. Beim Klick auf das Profil oder Original wird Instagram direkt geöffnet.

Ich habe beide Datenschutzentwürfe entsprechend ergänzt. Vor Aktivierung prüfe ich die Nutzungsrechte an Bildern und Videos, Meta-Bedingungen, Speicherfristen, Löschanforderungen, Datenschutz und notwendige Zugriffsberechtigungen. Keine Analyse der Instagram-Nutzer, kein Scraping und kein zusätzlicher kostenpflichtiger Feed-Dienst. Der aktuelle Stand ist ein deaktivierter, noch nicht mit Meta verbundener Entwurf. Ein neuer Build und Live-API-Test sind noch offen.

### Git-Abgleich und Navigation

Auf dem Firmen-PC war der alte Checkout e4b6926 wegen lokaler Änderungen blockiert. Die Änderungen wurden im Stash gesichert; der Git Pull auf 09e32f2 wurde anhand der Terminalausgabe bestätigt. Der anschließende Screenshot zeigt Willkommen in der laufenden lokalen Website. Keine erneute Layoutkorrektur erforderlich. Ich lasse den Stash erhalten, bis die zusätzlichen lokalen Dateien und Unterschiede abschließend verglichen sind. Die separate Debian-Test-VM enthält inzwischen einen Git-Checkout unter `~/Website/Website_hg-main/Website_hg`. Am 13.11.2026 wurden erfolgreicher Pull, aktueller main-Stand und unverändertes Arbeitsverzeichnis anhand der Terminalausgabe bestätigt. Der alte ZIP-Ordner bleibt erhalten. Die feste IPv4-Adresse wurde laut Rückmeldung des Nutzers in Debian statisch gesetzt. Ich lasse die Freigabe der Adresse außerhalb des dynamischen DHCP-Bereichs beziehungsweise die DHCP-Reservierung durch den Netzwerkverantwortlichen bestätigen. Die Compose-Portbindung ist über `HG_WEBSITE_BIND_IP` konfigurierbar, mit sicherem Standard 127.0.0.1. Auf der VM trage ich ausschließlich die tatsächlich zugewiesene, freigegebene LAN-IP in der lokalen, ignorierten `.env` ein und erhalte vorhandene Einträge. Ich starte den Container im Git-Checkout mit `docker compose up -d --build` (bei Bedarf mit Root-Rechten) und prüfe `docker compose ps` sowie die Website von einem Mitarbeiter-PC unter http://<VM-LAN-IP>:3000. Vorhandene Container bleiben erhalten; einen Portkonflikt kläre ich gezielt statt andere Dienste zu stoppen. Für Updates führe ich als Checkout-Eigentümer `git pull --ff-only` und anschließend `docker compose up -d --build` mit den erforderlichen Docker-Rechten aus. Keine Änderung an Router-Portweiterleitungen oder öffentlichem DNS. Eine LAN-IP-Bindung allein ist keine Quellnetz-Zugriffskontrolle; Zugriff aus anderen Netzen muss durch vorhandene Netz-/Firewallregeln ausgeschlossen sein. Nach der statischen IP-Konfiguration trat beim Git Pull der Fehler `Could not resolve host: github.com` auf. Der Ping auf eine externe IP funktionierte nach Korrektur des Gateways. Die DNS-Störung wurde laut Rückmeldung des Nutzers behoben. Ich verwende jetzt das versionierte Bereitstellungsskript `scripts/deploy-test.sh` für die interne Debian-Test-VM. Die Bereitstellung per Skript wurde anschließend vom Nutzer als erfolgreich bestätigt (13.11.2026). Ein separater protokollierter LAN-/Neustarttest liegt nicht vor.

### Netwrix und inoxision

Ich habe die aktuelle Herstellerbezeichnung [Netwrix Password Secure](https://netwrix.com/de/products/password-secure/) (ehemals Password Safe von MATESO) übernommen. Die historischen Nachweise 2017 und 2020 behalten ihre ursprünglichen Titel und sind ausdrücklich historisch gekennzeichnet. Netwrix erscheint unter IT-Sicherheit und in der Herstellerübersicht. Auf Wunsch habe ich [inoxision ARCHIVE](https://inoxision.de/) als bereits angebotene Archivierungslösung ergänzt: Herstellerübersicht und eigene Leistungsseite `/leistungen/archivierung` bzw. `/en/services/archiving`. Die Servicekarten, Footer-Leistungen und der Sprachwechsel verwenden die zentralen Daten und Routen. Edition, Module, Lizenzen, tatsächlicher Leistungsumfang und Archivierungskonzept werden im konkreten Angebot abgestimmt; keine pauschale GoBD-Konformitätsgarantie. Quellen: [Herstellerdokumentation zur Umbenennung](https://helpcenter-be.netwrix.com/bundle/PasswordSecure_8.15.1_de/raw/resource/enus/Netwrix_PasswordSecure_8.15.1_de.pdf), [inoxision ARCHIVE](https://inoxision.de/inoxision-archive-ng/). Keine neuen Partnerstufen oder Zertifizierungen behauptet. Die lokale Logo-Einbindung wird im folgenden Abschnitt ergänzt. Code und Inhalte ergänzt; neuer Build und Browserprüfung noch offen.

### Herstellerlogos und mediDOK

Ich ergänze mediDOK als Technologie für medizinische Bild- und Dokumentenarchivierung (DE/EN), mit Herstellerlink und ohne behauptete Partnerstufe. Der historische Nachweis von 2018 bleibt unverändert. Netwrix (aktuelles dunkles SVG direkt aus der offiziellen Herstellerdokumentation), inoxision (Herstellerlogo aus der ADEMIS-Herstellerübersicht) und mediDOK (Logo von der Herstellerwebsite) werden über das bestehende lokale Importmanifest eingebunden. `components/BrandMark.tsx` nutzt netwrix.svg, inoxision.png und medidok.png; die bestehende Gestaltung skaliert die Bilder proportional. Der Importworkflow startet bei Änderungen am Manifest und speichert validierte Bilder im Repository; keine externen Logoabrufe durch Website-Besucher. Der erste Netwrix-JPEG-Import schlug fehl; ich habe stattdessen das originale SVG aus dem offiziellen Repository netwrix/docs übernommen. Die beiden PNG-Dateien wurden über den Importworkflow gespeichert. Dateipfade und Import sind bestätigt; Markenfreigaben und Browserdarstellung bleiben offen. Quellen und Status stehen in `public/images/partners/README.md`.


### Interne Test-VM: Bereitstellung und Updates per Skript

Ich führe als Besitzer des Git-Checkouts aus:

```bash
cd ~/Website/Website_hg-main/Website_hg &&
git pull --ff-only &&
bash scripts/deploy-test.sh 192.168.17.54
```

Die IP ist das Beispiel für unsere aktuell konfigurierte Test-VM; bei einer anderen VM verwende ich deren tatsächlich zugewiesene und freigegebene private IPv4-Adresse. Das Skript prüft diese Adresse, Docker und die Projektdateien, ergänzt ausschließlich die lokale Portbindung in der ignorierten `.env` (Dateimodus 600), baut und startet nur den Website-Dienst und zeigt dessen Status. Falls der Benutzer keinen Docker-Zugriff hat, meldet es sich über `su` mit Root-Rechten an; Git bleibt beim Checkout-Besitzer. Es prüft die lokale HTTP-Antwort mit curl, sofern vorhanden. Danach prüfe ich die Erreichbarkeit vom Mitarbeiter-PC. Keine Router- oder Firewalländerung, kein Entfernen bestehender Container oder Daten, keine automatische Paketinstallation, keine Ausgabe von Zugangsdaten. Bei einem Portkonflikt oder fehlender IP bricht die Bereitstellung ab. Ein vorhandener Container eines anderen Projekts wird nicht gestoppt. Ich bestätige DHCP-Ausschluss und Zugriffsbeschränkungen separat. Der automatische Neustart des Containers nach VM-Neustart bleibt offen. Das Skript wird mit bash aufgerufen und benötigt kein executable-Bit.


### Über-uns-Seite: Unternehmensphilosophie und Geschichte

Ich habe die bisherige [Über-uns-Seite](https://www.hg-systeme.de/UeBER-UNS/) am 13.11.2026 abgeglichen und ihre Kernaussagen in die neue Gestaltung übernommen. Die gemeinsame Komponente `components/AboutPage.tsx` enthält die deutschen und englischen Texte zu Philosophie, IT-Security, dem Stufenprogramm Abwehr/Prävention/Reaktion, Michael Gray als Gründer und seiner Erfahrung in Medizin und Automobil sowie zur regionalen Betreuung. Die Geschichte des Katar-Projekts 1998 ist jetzt im Gründerabschnitt enthalten; die Qualifikationsübersicht wiederholt diese Geschichte nicht. Branchenbeschreibungen, Automatisierungslink, Herstellerkarten und Kontaktbereich bleiben erhalten. Am Ende der Seite steht das Team mit drei Mitarbeitern statt vier, entsprechend der bestätigten Vorgabe. Ich habe die alten Aussagen sinngemäß neu formuliert und verzichte auf unbestätigte Alleinstellungs- und Ausfallzeitversprechen sowie zusätzliche Fotos. Die historische Projektbeschreibung stammt aus der bisherigen Firmenwebsite. Der neue Build und die Darstellung der überarbeiteten Über-uns-Seite sind noch zu prüfen; die öffentliche Altwebsite bleibt unverändert.
