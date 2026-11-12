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

## Struktur

```text
app/                   Next.js App Router, Seiten und globales CSS
app/leistungen/[slug]/  Statisch erzeugte Leistungsdetailseiten
components/            Navigation, Footer, Karten und SVG-Icons
lib/content.ts         Unternehmensdaten, Leistungen und FAQ
public/icon.svg         Temporäres textbasiertes Symbol
TODO.md                Aufgaben und Freigaben
```

## Design und Inhalte

Nach der ersten Designrückmeldung verwende ich Blau, Marineblau und helle Hintergründe. Die Startseite hat einen hellen Einstieg, dunklere Fließtexte und kontrastreiche Buttons. Die wichtigsten Text-Farb-Paare wurden rechnerisch geprüft (6,2:1 bis 15,3:1); eine vollständige Browser- und Barrierefreiheitsprüfung steht aus. Das Logo mit blauem Bogen stammt vorläufig aus dem [offiziellen LinkedIn-Unternehmensprofil](https://de.linkedin.com/company/hg-systeme-e-k) und wird als Bild mit Referrer-Policy no-referrer geladen. Die Originaldatei konnte ich im Arbeitsumfeld nicht herunterladen. Vor Veröffentlichung ersetze ich diese externe Bildquelle durch eine intern freigegebene lokale SVG- oder PNG-Datei und aktualisiere das provisorische Favicon. Ich bestätige Corporate Design, Fotos, Bildrechte, aktuelle Teamangaben und Referenzen. Keine fremden Logos oder erfundenen Kundenstimmen.

Die Inhalte basieren auf unserem [Wachstumskonzept](https://github.com/scncvk19/Startegie), insbesondere der Website-Analyse und den Dienstleistungsentwürfen. Ungeprüfte Preise, SLA, Registerangaben und neue Referenzen werden nicht behauptet. Die veröffentlichten Kontaktdaten der bestehenden [Impressumsseite](https://www.hg-systeme.de/IMPRESSUM/) dienen als Referenz und müssen vor Veröffentlichung bestätigt werden. Kostenlose Erstgespräche, konkrete neue Pakete und Workshopformate sind noch nicht freigegeben.

## Datenschutz und Betrieb

Keine Trackingbibliotheken, externen Schriftarten, Karten-Embeds, Web3Forms, hCaptcha oder Kontaktformular-Backend. Ausnahme im internen Entwurf: Das Logo wird vorläufig von LinkedIn geladen; dadurch entsteht eine externe Anfrage. Vor Veröffentlichung wird das Logo lokal eingebunden. Telefon- und E-Mail-Links führen zum vorhandenen Kontakt; der Supportweg für Bestandskunden bleibt wie vereinbart. Hosting, Serverprotokolle und Rechtsangaben müssen vor Freigabe fachlich geprüft werden. Kein echter Kundenvorgang wurde ausgelöst.

Vercel ist eine mögliche spätere Plattform wie bei OWA Labs. Noch kein Deployment, keine Domain-Änderung und kein Zugriff auf die produktive Website. Vor einer Vorschau auf Vercel Zugriffsschutz prüfen (privates GitHub-Repository schützt eine öffentliche Deployment-URL nicht); lokale Vorschau ist der sichere erste Schritt. Für eine öffentliche Freigabe müssen Entwurfsbanner, Noindex/robots und Rechtsseiten bewusst aktualisiert werden, kanonische Produktions-URL und Sitemap festgelegt und die Freigabe dokumentiert sein.

## Status

Quellcode und Seitenstruktur erstellt, GitHub-Commit und 13 Seitenrouten geprüft. Die statisch untersuchten internen Linkziele sind vorhanden. Build, Browserprüfung, Branding, Datenschutz, tatsächliche Leistungsfreigabe und Veröffentlichung sind offen. Siehe [TODO](TODO.md).
