import Link from "next/link";
import { PageIntro, ContactBand, SectionHeading } from "@/components/Site";
import Icon from "@/components/Icon";
import Credentials from "@/components/Credentials";
import { routes, type Language } from "@/lib/locale";
import { company } from "@/lib/content";

const copy = {
  de: {
    title: "Technik verstehen. Menschen unterstützen.",
    intro: "Wir stehen für persönliche IT-Beratung und praktische Lösungen für Unternehmen und Privatkunden aus der Region.",
    philosophy: "Unsere Philosophie",
    motto: "Mit uns immer sicher vernetzt!",
    philosophyLead: "Mit über 30 Jahren IT-Erfahrung unterstützen wir Unternehmen aus Medizin, Automobil und Industrie mit IT-Dienstleistungen und individuellen Unternehmenslösungen. Im Rhein-Neckar-Raum und darüber hinaus sind wir Ansprechpartner für die IT mittelständischer Unternehmen.",
    philosophyText: "Wir möchten IT verständlich machen und Lösungen entwickeln, die heute funktionieren und auch morgen zu Ihrem Unternehmen passen. Persönliche Zusammenarbeit, innovative Ansätze, wirtschaftlich sinnvolle Entscheidungen und regelmäßige Weiterbildung bilden dafür die Grundlage.",
    regionalTitle: "Regional verwurzelt.",
    regionalText: "Persönliche Betreuung vor Ort und per Fernsupport.",
    security: "IT-Security",
    securityTitle: "Sicherheit, die mit Ihrem Unternehmen wächst.",
    securityText: "Die Bedrohungslage verändert sich laufend. Wir integrieren Next-Generation Firewalls und sichere WLAN-Lösungen in bestehende IT-Umgebungen. Dabei planen wir die Migration sorgfältig, um Unterbrechungen im laufenden Betrieb möglichst gering zu halten.",
    securityText2: "Auch nach der Einrichtung begleiten wir Ihre Sicherheitslösung. Mit Awareness-Trainings und praxisnahen Szenarien unterstützen wir Ihre Mitarbeiter im sicheren Umgang mit der IT. Regelmäßige Sicherheitschecks helfen, Schwachstellen frühzeitig zu erkennen.",
    securitySteps: [
      ["Abwehr", "Netzwerke, Systeme und Zugänge durch geeignete technische Schutzmaßnahmen absichern."],
      ["Prävention", "Risiken früh erkennen, Systeme pflegen und das Sicherheitsbewusstsein der Mitarbeiter stärken."],
      ["Reaktion", "Auf Sicherheitsvorfälle vorbereitet sein, Maßnahmen koordinieren und den Betrieb wieder stabilisieren."]
    ],
    securityLink: "IT-Sicherheit & Sicherheitscheck",
    founder: "Der Inhaber",
    founderTitle: "Michael Gray – Gründer von HG-Systeme",
    founderText: "Michael Gray ist englischer Muttersprachler und Gründer von HG-Systeme. Bereits 1998 realisierte er im Rahmen eines Projekts in Katar die Vernetzung medizinischer Diagnosesysteme in einer Kinderklinik. Daraus entwickelte sich die langjährige Tätigkeit von HG-Systeme in der medizinischen IT in Deutschland.",
    founderText2: "Seit der Jahrtausendwende bringt er zudem Erfahrung mit IT-Infrastrukturen in der Automobilbranche ein. Sein Anliegen ist es, mittelständische Unternehmen für IT-Sicherheit zu sensibilisieren und gemeinsam mit ihnen passende Lösungen zu entwickeln.",
    industries: "Branchen",
    industriesTitle: "Erfahrung aus unterschiedlichen Arbeitswelten.",
    industryItems: [
      ["Medizin", "Vertrauliche Daten und zuverlässige Arbeitsabläufe."],
      ["Automobil", "IT-Unterstützung für Service, Verwaltung und vernetzte Arbeitsplätze."],
      ["Industrie", "Wir verbinden sichere IT-Infrastruktur mit Datenerfassung, Datenverarbeitung und Automatisierung. Durch vernetzte Systeme, nachvollziehbare Datenflüsse und gezielte Prozesssteuerung lassen sich Abläufe transparenter gestalten, manuelle Arbeit reduzieren und betriebliche Prozesse gezielt verbessern."]
    ],
    industryLink: "Automatisierung & Prozessoptimierung",
    team: "Unser Team",
    teamTitle: "Persönlich. Engagiert. Verlässlich.",
    teamText: "Drei kompetente Mitarbeiter kümmern sich mit Engagement um Ihre IT und entwickeln individuelle Lösungen für Ihr Unternehmen. Wir stehen Ihnen persönlich zur Seite – mit dem Ziel, Ihre IT, Ihre Daten und Ihre betrieblichen Abläufe zuverlässig zu betreuen.",
    teamClosing: "IT-Service, der zu Ihnen, Ihrem Unternehmen und Ihren Kunden passt."
  },
  en: {
    title: "Understanding technology. Supporting people.",
    intro: "We provide personal IT advice and practical solutions for businesses and private customers in the region.",
    philosophy: "Our philosophy",
    motto: "Stay securely connected with us!",
    philosophyLead: "Drawing on over 30 years of IT experience, we support healthcare, automotive and industrial businesses with IT services and tailored business solutions. We provide IT expertise to small and medium-sized businesses in the Rhine-Neckar region and beyond.",
    philosophyText: "We aim to make IT understandable and develop solutions that work today and continue to suit your business tomorrow. Personal collaboration, innovative approaches, sound economic decisions and ongoing professional development underpin our work.",
    regionalTitle: "Rooted in the region.",
    regionalText: "Personal on-site and remote support.",
    security: "IT security",
    securityTitle: "Security that grows with your business.",
    securityText: "The threat landscape is constantly evolving. We integrate next-generation firewalls and secure wireless networks into existing IT environments. We carefully plan migrations to minimise disruption to ongoing operations.",
    securityText2: "Our support continues after installation. Awareness training and practical scenarios help your employees use IT safely. Regular security assessments help identify vulnerabilities early.",
    securitySteps: [
      ["Defence", "Protect networks, systems and access with appropriate technical safeguards."],
      ["Prevention", "Identify risks early, maintain systems and strengthen employee security awareness."],
      ["Response", "Prepare for security incidents, coordinate measures and restore stable operations."]
    ],
    securityLink: "IT security & security assessment",
    founder: "The founder",
    founderTitle: "Michael Gray – founder of HG-Systeme",
    founderText: "Michael Gray is a native English speaker and the founder of HG-Systeme. In 1998, he connected medical diagnostic systems at a children's hospital as part of a project in Qatar. This laid the foundations for HG-Systeme's longstanding work in healthcare IT in Germany.",
    founderText2: "Since the turn of the millennium, he has also gained extensive experience with IT infrastructure in the automotive industry. His aim is to raise security awareness among small and medium-sized businesses and develop appropriate solutions together with them.",
    industries: "Industries",
    industriesTitle: "Experience across different working environments.",
    industryItems: [
      ["Healthcare", "Confidential data and reliable workflows."],
      ["Automotive", "IT support for service, administration and connected workplaces."],
      ["Industry", "We connect secure IT infrastructure with data collection, data processing and automation. Connected systems, traceable data flows and targeted process control help make operations more transparent, reduce manual work and improve business processes."]
    ],
    industryLink: "Automation & process optimisation",
    team: "Our team",
    teamTitle: "Personal. Committed. Reliable.",
    teamText: "Three dedicated employees look after your IT and develop individual solutions for your business. We support you personally, with the aim of providing reliable care for your IT, data and business operations.",
    teamClosing: "IT services that fit you, your business and your customers."
  }
} as const;

export default function AboutPage({ lang }: { lang: Language }) {
  const t = copy[lang];
  return <>
    <PageIntro eyebrow={company.name + " · Eberbach"} title={t.title} text={t.intro}/>
    <section className="section" id="philosophy">
      <div className="container feature-grid">
        <div>
          <SectionHeading eyebrow={t.philosophy} title={t.motto}/>
          <p className="lead">{t.philosophyLead}</p>
          <p className="muted">{t.philosophyText}</p>
        </div>
        <div className="feature-art about-art">
          <Icon name="network"/>
          <p className="eyebrow">Eberbach · Rhein-Neckar</p>
          <h3>{t.regionalTitle}</h3><p>{t.regionalText}</p>
        </div>
      </div>
    </section>
    <section className="section section-soft" id="security">
      <div className="container">
        <SectionHeading eyebrow={t.security} title={t.securityTitle}/>
        <div className="narrow">
          <p className="lead">{t.securityText}</p>
          <p>{t.securityText2}</p>
        </div>
        <div className="values-grid">
          {t.securitySteps.map(([title, description], i) => <article className="value" key={title}>
            <span className="icon-tile"><Icon name={["shield", "search", "activity"][i]}/></span>
            <h3>{title}</h3><p>{description}</p>
          </article>)}
        </div>
        <Link className="text-link" href={routes.security[lang]}>{t.securityLink} <Icon name="arrow"/></Link>
      </div>
    </section>
    <section className="section" id="founder">
      <div className="container narrow">
        <SectionHeading eyebrow={t.founder} title={t.founderTitle}/>
        <p className="lead">{t.founderText}</p>
        <p>{t.founderText2}</p>
      </div>
    </section>
    <section className="section section-soft" id={lang === "de" ? "branchen" : "industries"}>
      <div className="container">
        <SectionHeading eyebrow={t.industries} title={t.industriesTitle}/>
        <div className="values-grid">{t.industryItems.map(([title, description]) => <article className="value" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
        <Link className="text-link" href={routes.automation[lang]}>{t.industryLink} <Icon name="arrow"/></Link>
      </div>
    </section>
    <Credentials lang={lang} detailed/>
    <section className="section section-soft" id="team">
      <div className="container narrow">
        <SectionHeading eyebrow={t.team} title={t.teamTitle}/>
        <p className="lead">{t.teamText}</p>
        <p>{t.teamClosing}</p>
      </div>
    </section>
    <ContactBand lang={lang}/>
  </>;
}
