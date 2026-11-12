# Zentrale To-do-Liste – Website HG-Systeme

Stand: 12.11.2026 · Interner Entwurf

| Aufgabe | Status |
|---|---|
| Vorhandenes Repository und OWA-Labs-Architektur geprüft | ✅ |
| Seitenstruktur, Inhalte und eigene Komponenten entwickelt | ✅ |
| Sechs Leistungsseiten, Startseite, Über uns, Ratgeber und Kontakt angelegt | ✅ |
| Responsive CSS, mobile Navigation, Tastatur-Fokus und lokale Icons implementiert | ✅ |
| Keine externen Tracker; Entwurfskennzeichnung und Noindex eingerichtet | ✅ |
| Quellcode im Repository bereitstellen; GitHub-Dateiliste und statische Linkziele prüfen | ✅ |
| Dockerfile, Compose und Docker-Anleitung für lokale Windows-Vorschau erstellen | ✅ |
| Docker Desktop auf Firmen-PC prüfen; ersten Docker-Build und lokalen Seitenaufruf bestätigen | 🔄 |
| npm-Installation, Lockdatei, Typecheck und Produktionsbuild tatsächlich ausführen | 🔄 |
| Deutsch/Englisch mit Sprachwechsel, lokalisierten Seiten, Leistungsbeschreibungen und FAQ implementieren | ✅ |
| Kontaktformular mit Web3Forms, hCaptcha, festem Erfolgsziel und deaktiviertem Standardversand implementieren | ✅ |
| Firmenpostfach und eigenen Web3Forms-Schlüssel festlegen; Anbieter/Datenschutz freigeben; Captcha serverseitig aktivieren | ⬜ |
| Beide Sprachfassungen, Sprachwechsel, Formular-Fehlerfälle und echte Testzustellung nach Freigabe prüfen | ⬜ |
| Browserprüfung Desktop, Smartphone und Querformat; Navigation, FAQ, Links und 404 prüfen | ⬜ |
| Farbkonzept auf Blau umstellen, wichtige Textkontraste rechnerisch prüfen und öffentliches Firmenlogo im Entwurf einbinden | ✅ |
| Hochgeladene transparente PNG lokal in Header und Footer (DE/EN) einbinden; externe Logoquelle entfernen | ✅ |
| Favicon aus Firmenlogo für Deutsch und Englisch einbinden | ✅ |
| Partner-, Technologie- und Qualifikationsübersicht mit lokalen Icons (DE/EN) auf Startseite und Über-uns-Seite ergänzen | ✅ |
| Öffentliche Zertifikatsseite erneut abgleichen; zweisprachiges Archiv mit elf Nachweisen und historischem EMC-Abzeichen erstellen | ✅ |
| AZ-104 und ITIL 4 Foundation konkret benennen, dezente Abzeichen und zwölf historische Bildquellen in DE/EN integrieren | ✅ |
| Zertifikatsseite mit „Zertifizierungen“ und „Veröffentlichte Nachweise“ strukturieren; externe Bild-Fallbacks entfernen | ✅ |
| Historische Bilddateien per GitHub-Import lokal ins Repository übernehmen und Ergebnis verifizieren | 🔄 |
| Azure-/ITIL-Abzeichen lokal importieren, Gültigkeit/Partnerstatus sowie Rechte und personenbezogene Angaben aller Bilder prüfen | ⬜ |
| Offene Freigaben und Entscheidungen in OFFENE-FRAGEN.md dokumentieren | ✅ |
| Darstellung und Kontrast von Logo, Favicon und Referenzkarten im Browser prüfen; Corporate Design, Teamfotos, Kundenreferenzen und Nutzungsrechte bestätigen | ⬜ |
| Unternehmensdaten, Registerangaben und Datenschutzerklärung vervollständigen und fachlich freigeben | ⬜ |
| Tatsächliche Leistungen, kostenloses Erstgespräch, Schulungsformate und Betreuungspakete durch Geschäftsleitung freigeben | ⬜ |
| Gegebenenfalls geschützte Vorschau über Vercel einrichten | ⬜ |
| Produktionshosting, DNS, Migration, alte URLs/Weiterleitungen und Rückweg planen | ⬜ |
| Veröffentlichung, Indexierung/Sitemap und Google-Unternehmensprofil erst nach Freigabe | ⬜ |

## Nächster Schritt

Ich prüfe das Projekt lokal bevorzugt mit Docker Desktop und docker compose up -d --build; alternativ mit npm install, npm run typecheck, npm run build. Danach folgen Browser-Tests einschließlich Sprachwechsel und Kontaktformular. Die externe Formularverarbeitung bleibt bis zur Freigabe und Konfiguration deaktiviert. Das Arbeitsumfeld konnte das npm-Registry nicht auflösen; deshalb ist kein Build-Erfolg bestätigt. Danach bespreche ich Design, Firmenangaben, rechtliche Texte und konkrete Leistungen mit der Geschäftsleitung. Die bestehende Firmenwebsite bleibt bis zu einer späteren ausdrücklich genehmigten Umstellung unverändert.
