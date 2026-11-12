# Zertifikatsbilder

Die Bildquellen und Dateinamen pflege ich in `lib/certificate-assets.json`. Die zwölf historischen Bilder stammen aus der alten Zertifikatsseite und dem EMC-Abzeichen der Startseite. Der Import lädt die dort verlinkten Bildfassungen (`picture-200`), keine nachgewiesenen höher aufgelösten Originale.

- `archive/`: historische Nachweise
- `microsoft/`: Azure-Abzeichen
- `itil/`: ITIL-Abzeichen

Ich importiere die historischen Dateien einmalig mit dem GitHub-Workflow oder lokal mit dem bestehenden PowerShell-Skript. Der Python-Import prüft Format und Größe und überspringt bereits vorhandene, gültige Dateien. Auf der Website werden ausschließlich lokale Dateien angezeigt; fehlende Bilder haben ein neutrales Ersatzsymbol. Vor Veröffentlichung prüfe ich die Rechte, personenbezogenen Angaben und die Gültigkeit persönlicher Zertifizierungen.
