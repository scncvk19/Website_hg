# HG-Systeme – Website

Interner Entwurf für einen neuen Firmenauftritt von HG-Systeme e.K., Eberbach. Ich orientiere mich an meiner OWA-Labs-Website: Next.js, React, TypeScript, wiederverwendbare Komponenten und eine klare Projektstruktur. Für diesen Auftritt verwende ich bewusst eigenes CSS statt zusätzlicher UI- oder Animationsbibliotheken. Die bestehende Website hg-systeme.de wird nicht verändert.

## Was enthalten ist

- Startseite mit regionaler Positionierung, Leistungsübersicht und Sicherheitscheck als Einstieg.
- Sechs eigene Leistungsseiten: IT-Betreuung, Sicherheitscheck, Backup, Firewall/Netzwerk, Schulungen und Green IT.
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

Ich pinne Next.js und React auf die bei Erstellung (12.11.2026) recherchierten stabilen Versionen. Next.js 16.4.6, React 19.3.1, TypeScript 5.9.3. Die lokale Abfrage des npm-Registrys im Arbeitscontainer scheiterte an der DNS-Auflösung; eine Installation und ein Build waren deshalb nicht möglich. Der tatsächliche Build und die Lockdatei stehen deshalb noch aus. Nach erfolgreichem npm install package-lock.json committen und weitere Installationen mit npm ci durchführen. Vor Veröffentlichung Abhängigkeiten auf Aktualität prüfen.

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

Der Dockerfile baut Next.js und startet als nicht privilegierter Benutzer. Da noch keine package-lock.json vorhanden ist, verwendet der erste Build npm install; bei vorhandener Lockdatei wird npm ci verwendet. Der erste Docker-Build ist noch nicht getestet. Die produktive Firmenwebsite, DNS und bestehende Container bleiben unverändert. Docker Desktop muss für die geschäftliche Nutzung freigegeben sein.

## Struktur

```text
app/                   Next.js App Router, Seiten und globales CSS
app/leistungen/[slug]/  Statisch erzeugte Leistungsdetailseiten
components/            Navigation, Footer, Karten und SVG-Icons
lib/content.ts         Unternehmensdaten, Leistungen und FAQ
public/images/branding/ Firmenlogo als transparente PNG
public/images/branding/hg-systeme-favicon.png  Favicon aus Firmenlogo
TODO.md                Aufgaben und Freigaben
```

## Design und Inhalte

Nach der ersten Designrückmeldung verwende ich Blau, Marineblau und helle Hintergründe. Die Startseite hat einen hellen Einstieg, dunklere Fließtexte und kontrastreiche Buttons. Die wichtigsten Text-Farb-Paare wurden rechnerisch geprüft (6,2:1 bis 15,3:1); eine vollständige Browser- und Barrierefreiheitsprüfung steht aus. Ich verwende die hochgeladene transparente PNG-Datei unverändert unter `public/images/branding/hg-systeme-logo.png` für Header und Footer auf allen Seiten (DE/EN). Die externe LinkedIn-Bildquelle entfällt. Das Logo wird unverzerrt dargestellt; im dunklen Footer erhöhe ich die Helligkeit nur per CSS für die Lesbarkeit. Ich verwende auch ein 64×64-PNG-Favicon aus dem Firmenlogo; die endgültige Markenfreigabe bleibt offen. Ich bestätige Corporate Design, Fotos, Bildrechte, aktuelle Teamangaben und Referenzen. Keine fremden Logos oder erfundenen Kundenstimmen.

Die Inhalte basieren auf unserem [Wachstumskonzept](https://github.com/scncvk19/Startegie), insbesondere der Website-Analyse und den Dienstleistungsentwürfen. Ungeprüfte Preise, SLA, Registerangaben und neue Referenzen werden nicht behauptet. Die veröffentlichten Kontaktdaten der bestehenden [Impressumsseite](https://www.hg-systeme.de/IMPRESSUM/) dienen als Referenz und müssen vor Veröffentlichung bestätigt werden. Kostenlose Erstgespräche, konkrete neue Pakete und Workshopformate sind noch nicht freigegeben.

## Datenschutz und Betrieb

Keine Trackingbibliotheken, externen Schriftarten oder Karten-Embeds. Das Kontaktformular ist vorbereitet, aber standardmäßig deaktiviert. Bei Freigabe verwende ich Web3Forms und hCaptcha; beide Dienste sind externe Datenempfänger. Das Firmenlogo wird lokal ausgeliefert; für das Bild ist keine Verbindung zu LinkedIn erforderlich. Telefon- und E-Mail-Links führen zum vorhandenen Kontakt; der Supportweg für Bestandskunden bleibt wie vereinbart. Hosting, Serverprotokolle und Rechtsangaben müssen vor Freigabe fachlich geprüft werden. Kein echter Kundenvorgang wurde ausgelöst.

Vercel ist eine mögliche spätere Plattform wie bei OWA Labs. Noch kein Deployment, keine Domain-Änderung und kein Zugriff auf die produktive Website. Vor einer Vorschau auf Vercel Zugriffsschutz prüfen (privates GitHub-Repository schützt eine öffentliche Deployment-URL nicht); lokale Vorschau ist der sichere erste Schritt. Für eine öffentliche Freigabe müssen Entwurfsbanner, Noindex/robots und Rechtsseiten bewusst aktualisiert werden, kanonische Produktions-URL und Sitemap festgelegt und die Freigabe dokumentiert sein.

## Status

Quellcode und Seitenstruktur erstellt, GitHub-Commit und 13 Seitenrouten geprüft. Die statisch untersuchten internen Linkziele sind vorhanden. Build, Browserprüfung, Branding, Datenschutz, tatsächliche Leistungsfreigabe und Veröffentlichung sind offen. Die englische Fassung und das vorbereitete Kontaktformular sind implementiert; Live-Versand ist nicht aktiviert. Siehe [TODO](TODO.md).

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

Ich habe eine zentrale Übersicht in `lib/credentials.ts` und `components/Credentials.tsx` ergänzt. Sie erscheint auf Startseite und Über-uns-Seite in beiden Sprachen. Lokale, neutrale SVG-Icons machen die Themen erkennbar, ohne ungeprüfte Herstellersiegel zu verwenden. Azure Administrator Associate (AZ-104) und ITIL 4 Foundation sind im Projektauftrag konkret benannt; die persönlichen Gültigkeiten und der Dell-Partnerstatus bleiben vor Veröffentlichung zu bestätigen. Microsoft, WatchGuard, Passwordsafe und Datenschutzqualifikationen sind im öffentlichen Unternehmensprofil beschrieben. Die frühere Website-Analyse dokumentiert historische Windows-Server-Schulungen und Herstellerbilder (2017–2020); daraus leite ich keine aktuellen Zertifizierungen ab.

Quellen: [Über uns](https://www.hg-systeme.de/UeBER-UNS/), [Zertifikate](https://www.hg-systeme.de/Zertifikate/), [Unternehmensprofil](https://de.linkedin.com/company/hg-systeme-e-k), [bisherige Website-Analyse](https://github.com/scncvk19/Startegie/blob/main/03_Marketing/Website-Analyse.md). Beim ersten Abruf waren Startseite und Zertifikatsseite nicht erreichbar. Beim erneuten Abruf am 12.11.2026 konnte ich die öffentlichen Bildtitel der Zertifikatsseite und das EMC Authorized Partner-Abzeichen auf der Startseite auslesen. Die Bilddateien selbst konnte ich nicht herunterladen; die konkreten Azure-/ITIL-Zertifikate sind dort nicht genannt. Die Unternehmensgeschichte und Branchenerfahrung sind auf der öffentlich indexierten Über-uns-Seite belegt. Ich veröffentliche keine Kundennamen, Partnerstufen oder Zertifikatssiegel ohne Bestätigung und Nutzungsfreigabe. Originale Zertifikate und offizielle Herstellerlogos ergänze ich erst nach Prüfung.

Das Favicon `public/images/branding/hg-systeme-favicon.png` ist ein quadratisches 64×64-PNG aus der vorhandenen transparenten Originaldatei, mit proportionaler Verkleinerung und transparentem Rand. Beide Root-Layouts referenzieren dieses Symbol.

### Zertifikatsarchiv

Ich habe eine eigene zweisprachige Seite unter /zertifikate und /en/certificates ergänzt. Sie enthält alle elf öffentlich bezeichneten Nachweise (Kaspersky, Samsung Knox, terra cloud, Password Safe 2017/2020, medidoc, macmon Partner und macmon 2018, Windows Server 2019 Grundkurs, Sway Grundkurs, KFZ-Gewerbe 2018) sowie das historische EMC-Partnerabzeichen der Startseite. Die Einträge stehen zentral in lib/credentials.ts. Die Seite verlinkt auf die ursprüngliche öffentliche Quelle. AZ-104 und ITIL 4 Foundation sind jetzt konkret benannt. Dell bleibt als Partnerangabe mit offener Stufe separat. Die zwölf historischen Bildquellen und zwei Abzeichen sind zentral in lib/certificate-assets.json hinterlegt. Die Vorschau bevorzugt lokal importierte Dateien, nutzt andernfalls die öffentlichen Bild-URLs mit no-referrer und zeigt bei Ladefehlern ein neutrales Symbol. Der Microsoft-Learn-Associate-Badge ist ein allgemeines Zertifizierungsabzeichen; der ITIL-Badge stammt aus der PeopleCert-Ausstellerseite bei Credly. Keine fremden persönlichen Verifikationslinks.

### Zertifikatsbilder lokal übernehmen (Windows)

Im Repository-Ordner in PowerShell: `powershell -NoProfile -File .\scripts\import-certificate-images.ps1` (falls erforderlich nach lokaler Richtlinienfreigabe). Das Skript lädt 14 öffentlich referenzierte Bilder in public/images/certificates und prüft Format und Größe. Ich kontrolliere Bilder, Rechte und personenbezogene Informationen vor dem Commit. Danach baue ich Docker neu. Der direkte Binärdownload war im Arbeitsumfeld nicht möglich; der Import und die Browserdarstellung sind noch nicht verifiziert. Externe Bildquellen sind nur als Übergang für den internen Entwurf vorgesehen. Vor Veröffentlichung alle freigegebenen Bilder lokal einbinden, verbleibende externe Fallbacks entfernen bzw. deaktivieren und Datenschutz aktualisieren.
