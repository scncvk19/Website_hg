import type { Metadata } from "next";
import { PageIntro } from "@/components/Site";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website von HG-Systeme."
};

export default function Page() {
  return <>
    <PageIntro eyebrow="Rechtliche Informationen" title="Datenschutzerklärung" text="Informationen zur Verarbeitung Ihrer personenbezogenen Daten bei der Nutzung unserer Website und bei der Kontaktaufnahme."/>
    <section className="section"><div className="container narrow prose">
      <p className="small muted">Stand: 16. November 2026</p>
      <h2>1. Verantwortlicher und Datenschutzkontakt</h2>
      <p><strong>{company.name}</strong><br/>
        Inhaber: {company.owner}<br/>
        {company.street}<br/>{company.city}<br/>Deutschland
      </p>
      <p>Telefon: <a href={"tel:"+company.tel}>{company.phone}</a><br/>
        E-Mail: <a href={"mailto:"+company.email}>{company.email}</a></p>
      <p>Bei Fragen zum Datenschutz und zur Ausübung Ihrer Rechte wenden Sie sich bitte an {company.owner} (Inhaber), E-Mail: <a href={"mailto:"+company.privacyEmail}>{company.privacyEmail}</a>, oder an die oben genannte Postanschrift.</p>

      <h2>2. Bereitstellung der Website und Hosting</h2>
      <p>Unsere Website wird über die Plattform Vercel der Vercel Inc., USA, bereitgestellt. Beim Abruf werden technisch notwendige Daten verarbeitet, insbesondere IP-Adresse, Zeitpunkt und Ziel des Abrufs, Angaben zu Browser und Gerät, gegebenenfalls Referrer und technische Fehler- und Verbindungsinformationen. Die Verarbeitung ermöglicht die Auslieferung der Website, die Sicherstellung ihrer Verfügbarkeit sowie die Erkennung und Behebung technischer Störungen und Sicherheitsrisiken.</p>
      <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in einem sicheren, zuverlässigen und funktionsfähigen Internetauftritt. Die Übermittlung technischer Verbindungsdaten ist für den Abruf der Website erforderlich.</p>
      <p>Technische Protokolldaten werden entsprechend ihrem Zweck und den Aufbewahrungsregeln des Hostinganbieters gespeichert. Die Dauer der verfügbaren Laufzeitprotokolle ist tarifabhängig. Vercel verarbeitet Daten auch außerhalb des Europäischen Wirtschaftsraums (EWR), insbesondere in den USA. Die Datenschutzhinweise und die veröffentlichten Regelungen zur Auftragsverarbeitung und zu Drittlandübermittlungen finden Sie unter <a href="https://vercel.com/legal/privacy-notice">Vercel Privacy Notice</a> und <a href="https://vercel.com/legal/dpa">Vercel Data Processing Addendum</a>.</p>

      <h2>3. Kontaktaufnahme per E-Mail, Telefon und Kontaktformular</h2>
      <p>Wenn Sie uns kontaktieren, verarbeiten wir Ihre Kontaktdaten, Ihre Nachricht und weitere von Ihnen mitgeteilte Angaben zur Bearbeitung Ihrer Anfrage, zur Kommunikation mit Ihnen und gegebenenfalls zur Vorbereitung oder Durchführung eines Auftrags.</p>
      <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen auf Ihre Veranlassung gerichtet ist. Bei sonstigen Anfragen und der Kommunikation mit Ansprechpartnern von Geschäftskunden stützen wir die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist die sachgerechte Beantwortung von Anfragen und die Pflege geschäftlicher Kontakte. Gesetzliche Aufbewahrungspflichten können eine weitere Verarbeitung nach Art. 6 Abs. 1 lit. c DSGVO erfordern.</p>
      <p>Im Kontaktformular sind Name, E-Mail-Adresse, Betreff und Nachricht erforderlich, damit wir die Anfrage bearbeiten können. Firmenname und Telefonnummer sind freiwillig. Sie können uns alternativ direkt per Telefon oder E-Mail kontaktieren. Eine gesetzliche Pflicht zur Nutzung des Formulars besteht nicht. Bitte übermitteln Sie auf diesem Weg keine Passwörter, vertraulichen Protokolle oder besonders sensiblen personenbezogenen Daten.</p>
      <h3>Web3Forms</h3>
      <p>Für die Entgegennahme und Weiterleitung von Formularanfragen nutzen wir Web3Forms, betrieben von Web3Creative, Indien. Beim Absenden werden Ihre Formularangaben, die gewählte Sprache, ein Nachweis der Sicherheitsprüfung und technische Übermittlungsdaten an die Schnittstelle des Anbieters übermittelt. Die Anfrage wird an unser Firmenpostfach <a href={"mailto:"+company.email}>{company.email}</a> weitergeleitet. Die Website betreibt keine eigene Datenbank für Kontaktanfragen.</p>
      <p>Web3Forms verarbeitet und speichert Formulareingaben auf seiner Infrastruktur. Nach Angaben des Anbieters beträgt die standardmäßige Aufbewahrung bis zu drei Jahre; die konkrete Dauer richtet sich nach der Konfiguration und dem Tarif. Eine kürzere Aufbewahrung und frühere Löschung sind möglich. Der Anbieter setzt weitere Infrastruktur- und E-Mail-Dienstleister ein, darunter Amazon Web Services, Cloudflare und Hetzner. Eine Verarbeitung außerhalb des EWR ist möglich, insbesondere in Indien und den USA.</p>
      <p>Die Rechtsgrundlagen entsprechen den oben für Kontaktanfragen genannten Rechtsgrundlagen. Informationen zu Empfängern, Aufbewahrung und den vom Anbieter vorgesehenen Standardvertragsklauseln finden Sie in der <a href="https://web3forms.com/privacy">Datenschutzerklärung von Web3Forms</a> und dem <a href="https://web3forms.com/dpa">Data Processing Agreement</a>.</p>
      <h3>hCaptcha</h3>
      <p>Zum Schutz des Kontaktformulars vor automatisierten Eingaben und Missbrauch nutzen wir hCaptcha von Intuition Machines, Inc., USA. Die Sicherheitsprüfung wird geladen, wenn Sie den entsprechenden Datenschutzhinweis im Formular bestätigen. Dabei können insbesondere IP-Adresse, Geräte- und Browsermerkmale, Zeitpunkt und Informationen über Ihre Interaktion mit der Prüfung verarbeitet werden. Beim Absenden wird ein Prüf-Token zur Kontrolle an Web3Forms übermittelt.</p>
      <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht darin, Spam, Missbrauch und automatisierte Angriffe auf das Kontaktformular zu verhindern. Soweit ein Zugriff auf das Endgerät oder eine Speicherung von Informationen für die ausdrücklich angeforderte, sichere Formularfunktion unbedingt erforderlich ist, gilt § 25 Abs. 2 Nr. 2 TDDDG. Nicht unbedingt erforderliche Zugriffe bedürfen einer Einwilligung. Die Bestätigung der Datenschutzhinweise ist keine Einwilligung in darüber hinausgehende Verarbeitungen.</p>
      <p>hCaptcha verarbeitet Daten nach eigenen Angaben unter anderem in den USA und beschreibt die Begrenzung der Speicherung anhand des Verarbeitungszwecks. Der Anbieter nennt das EU-US Data Privacy Framework und Standardvertragsklauseln als Übermittlungsmechanismen. Weitere Informationen: <a href="https://www.hcaptcha.com/privacy">Datenschutzhinweise von hCaptcha</a>. Sie können auf das Formular verzichten und uns direkt per E-Mail oder Telefon erreichen.</p>

      <h2>4. Google Maps</h2>
      <p>Im Impressum können Sie freiwillig eine Standortkarte von Google Maps laden. Für Nutzer im EWR ist Google Ireland Limited, Irland, der Anbieter des Google-Dienstes. Die Karte wird nicht automatisch beim Aufruf der Seite geladen. Erst mit Ihrer Auswahl von „Google Maps laden“ wird eine Verbindung zu Google hergestellt.</p>
      <p>Google kann dabei insbesondere IP-Adresse, Browser- und Geräteinformationen sowie Informationen zur Nutzung der Karte verarbeiten. Je nach Dienst und Einstellungen können Cookies oder andere Speichertechniken zum Einsatz kommen. Daten können auch in den USA oder anderen Staaten außerhalb des EWR verarbeitet werden. Zweck der Einbindung ist die Anzeige unseres Standorts und die Orientierung bei der Anreise.</p>
      <p>Die Einbindung erfolgt auf Grundlage Ihrer freiwilligen Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und, soweit Informationen auf dem Endgerät gespeichert oder ausgelesen werden, § 25 Abs. 1 TDDDG. Sie können die Karte jederzeit wieder ausblenden und damit die Einwilligung für künftige Abrufe widerrufen. Die Rechtmäßigkeit der bereits erfolgten Verarbeitung bleibt unberührt. Bereits gespeicherte Informationen können Sie zusätzlich über die Einstellungen Ihres Browsers entfernen. Die Adresse ist auch ohne Kartenaktivierung sichtbar. Ein separater externer Kartenlink führt direkt zu Google Maps.</p>
      <p>Informationen zur Verarbeitung, Speicherdauer und zu internationalen Übermittlungen finden Sie in den <a href="https://policies.google.com/privacy?hl=de">Datenschutzhinweisen von Google</a> und den <a href="https://policies.google.com/privacy/frameworks?hl=de">Informationen zu Datenübermittlungen</a>.</p>

      <h2>5. Cookies, externe Links und Social Media</h2>
      <p>Wir verwenden auf unserer Website keine eigenen Analyse- oder Marketing-Trackingdienste. Logos, Schriftarten und Herstellerbilder werden lokal ausgeliefert. Für die technische Bereitstellung können notwendige Speicher- und Zugriffsvorgänge auf dem Endgerät erforderlich sein (§ 25 Abs. 2 TDDDG). Die optionalen bzw. formularbezogenen Dienste sind in den vorstehenden Abschnitten beschrieben.</p>
      <p>Unsere Website enthält Links zu Instagram, LinkedIn, GitHub und weiteren externen Websites. Es werden keine Social-Media-Widgets oder aktiven Instagram-Feeds eingebunden. Durch die bloße Darstellung eines solchen Links werden keine Daten an den jeweiligen Anbieter übermittelt. Erst wenn Sie den Link öffnen, gelten die Datenschutzinformationen der besuchten Website. Die Verlinkung dient der Information über unser Unternehmen und unsere Leistungen; Rechtsgrundlage für eine damit verbundene Verarbeitung durch uns ist Art. 6 Abs. 1 lit. f DSGVO (Interesse an der Unternehmenskommunikation).</p>

      <h2>6. Empfänger, internationale Übermittlungen und Speicherdauer</h2>
      <p>Personenbezogene Daten erhalten diejenigen Personen in unserem Unternehmen, die sie zur Erfüllung ihrer Aufgaben benötigen, sowie die für Hosting, Formularverarbeitung, E-Mail-Kommunikation und Sicherheit eingesetzten Dienstleister. Soweit gesetzlich erforderlich, können Daten an zuständige Behörden oder andere berechtigte Empfänger übermittelt werden.</p>
      <p>Bei den oben beschriebenen Diensten kann eine Verarbeitung außerhalb des EWR stattfinden. Die veröffentlichten Datenschutzvereinbarungen von Vercel und Web3Forms sehen für relevante Übermittlungen die Standardvertragsklauseln der EU-Kommission vor; hCaptcha nennt außerdem seine Teilnahme am EU-US Data Privacy Framework. Bei Google sind die jeweils für den Dienst geltenden Übermittlungsmechanismen maßgeblich. Auskünfte über die anwendbaren Garantien und eine Kopie der maßgeblichen Garantien können Sie über unseren Datenschutzkontakt anfordern.</p>
      <p>Wir bewahren Anfragen und zugehörige personenbezogene Daten im Unternehmen nur so lange auf, wie dies zur Bearbeitung der Anfrage, zur Durchführung eines Vertrags oder zur Geltendmachung, Ausübung und Verteidigung von Rechtsansprüchen erforderlich ist. Gesetzliche Aufbewahrungspflichten, beispielsweise für Geschäftsbriefe oder steuerlich relevante Unterlagen, bleiben unberührt. Die Speicherzeiten der externen Dienste richten sich zusätzlich nach den vorstehend beschriebenen Verarbeitungszwecken und Anbieterregelungen. Nach Wegfall des jeweiligen Zwecks und Ablauf einschlägiger Pflichten sind die Daten zu löschen.</p>

      <h2>7. Ihre Rechte</h2>
      <p>Nach Maßgabe der DSGVO stehen Ihnen folgende Rechte zu:</p>
      <ul>
        <li>Auskunft über die zu Ihrer Person verarbeiteten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit unter den gesetzlichen Voraussetzungen (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen eine Verarbeitung aufgrund berechtigter Interessen aus Gründen Ihrer besonderen Situation (Art. 21 Abs. 1 DSGVO); gegen Direktwerbung können Sie jederzeit ohne Begründung widersprechen.</li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>Über Ihre Kontaktanfragen treffen wir keine ausschließlich automatisierten Entscheidungen mit rechtlicher oder vergleichbar erheblicher Wirkung im Sinne des Art. 22 DSGVO. Die Spam-Sicherheitsprüfung dient ausschließlich dem Schutz des Formulars. Zur Ausübung Ihrer Rechte können Sie sich an den unter Abschnitt 1 genannten Datenschutzkontakt wenden.</p>
      <h3>Beschwerderecht bei einer Aufsichtsbehörde</h3>
      <p>Sie können sich nach Art. 77 DSGVO bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere an Ihrem Aufenthaltsort, Arbeitsplatz oder am Ort eines mutmaßlichen Verstoßes. Die für uns zuständige Landesaufsicht ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg. Informationen und Beschwerdemöglichkeiten: <a href="https://www.baden-wuerttemberg.datenschutz.de/beschwerde/">LfDI Baden-Württemberg</a>.</p>

      <h2>8. Datensicherheit und Aktualität</h2>
      <p>Die Website und das Kontaktformular verwenden HTTPS für die Datenübertragung. Eine vollständige Sicherheit von Übertragungen im Internet, insbesondere bei E-Mails, kann jedoch nicht garantiert werden. Wir passen diese Datenschutzerklärung an, wenn sich unsere Datenverarbeitungen oder die rechtlichen Anforderungen ändern.</p>
    </div></section>
  </>;
}
