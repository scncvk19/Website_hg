import type { Metadata } from "next";
import { PageIntro } from "@/components/Site";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Information about the processing of personal data on the HG-Systeme website."
};

export default function Page() {
  return <>
    <PageIntro eyebrow="Legal information" title="Privacy policy" text="Information about the processing of your personal data when using our website or contacting us."/>
    <section className="section"><div className="container narrow prose">
      <p className="small muted">Last updated: 16 November 2026</p>
      <h2>1. Controller and privacy contact</h2>
      <p><strong>{company.name}</strong><br/>
        Owner: {company.owner}<br/>
        {company.street}<br/>{company.city}<br/>Germany
      </p>
      <p>Telephone: <a href={"tel:"+company.tel}>{company.phone}</a><br/>
        Email: <a href={"mailto:"+company.email}>{company.email}</a></p>
      <p>For privacy enquiries and to exercise your rights, please contact {company.owner} (owner) at <a href={"mailto:"+company.privacyEmail}>{company.privacyEmail}</a> or the postal address above.</p>

      <h2>2. Website delivery and hosting</h2>
      <p>Our website is delivered through the Vercel platform operated by Vercel Inc., USA. When you access it, technical data is processed, including your IP address, the time and destination of the request, browser and device information, any referrer and technical error and connection information. This processing enables the website to be delivered and kept available, and technical faults and security risks to be detected and resolved.</p>
      <p>The legal basis is Article 6(1)(f) GDPR. Our legitimate interest is to operate a secure, reliable and functional website. Transmission of technical connection data is necessary to access the website.</p>
      <p>Technical logs are stored according to their purpose and the hosting provider's retention rules. The period for which runtime logs are available depends on the hosting plan. Vercel also processes data outside the European Economic Area (EEA), particularly in the USA. Its privacy information and published terms on processing and international transfers are available in the <a href="https://vercel.com/legal/privacy-notice">Vercel Privacy Notice</a> and <a href="https://vercel.com/legal/dpa">Vercel Data Processing Addendum</a>.</p>

      <h2>3. Contact by email, telephone or contact form</h2>
      <p>When you contact us, we process your contact details, message and other information you provide to handle your enquiry, communicate with you and, where applicable, prepare or carry out a contract.</p>
      <p>The legal basis is Article 6(1)(b) GDPR where your enquiry concerns a contract or pre-contractual steps taken at your request. For other enquiries and communication with contacts at business customers, Article 6(1)(f) GDPR applies; our legitimate interest is to respond appropriately and maintain business relationships. Statutory retention obligations may require further processing under Article 6(1)(c) GDPR.</p>
      <p>The contact form requires your name, email address, subject and message so that we can handle your enquiry. Company name and telephone number are optional. You may contact us directly by telephone or email instead. There is no legal obligation to use the form. Please do not send passwords, confidential logs or particularly sensitive personal data through the form.</p>
      <h3>Web3Forms</h3>
      <p>We use Web3Forms, operated by Web3Creative in India, to receive and forward form enquiries. When you submit the form, its contents, selected language, security verification token and technical transmission data are sent to the provider's interface. The enquiry is forwarded to our company mailbox <a href={"mailto:"+company.email}>{company.email}</a>. The website does not operate its own database for contact enquiries.</p>
      <p>Web3Forms processes and stores form submissions on its infrastructure. The provider states that the default retention period is up to three years; the actual period depends on the configuration and plan. Shorter retention and earlier deletion are available. The provider uses additional infrastructure and email service providers, including Amazon Web Services, Cloudflare and Hetzner. Processing outside the EEA is possible, particularly in India and the USA.</p>
      <p>The legal bases are those described above for contact enquiries. Information about recipients, retention and the provider's standard contractual clauses is available in the <a href="https://web3forms.com/privacy">Web3Forms Privacy Policy</a> and <a href="https://web3forms.com/dpa">Data Processing Agreement</a>.</p>
      <h3>hCaptcha</h3>
      <p>We use hCaptcha from Intuition Machines, Inc., USA, to protect our contact form against automated submissions and abuse. The security check loads when you acknowledge the relevant privacy information in the form. It may process your IP address, browser and device characteristics, time of access and information about your interaction with the check. When the form is submitted, a verification token is transmitted to Web3Forms for validation.</p>
      <p>The legal basis is Article 6(1)(f) GDPR. Our legitimate interest is to prevent spam, abuse and automated attacks on the contact form. Where access to or storage of information on your device is strictly necessary for the requested secure form functionality, section 25(2)(2) of the German TDDDG applies. Access that is not strictly necessary requires consent. Acknowledging the privacy information is not consent to additional processing.</p>
      <p>According to hCaptcha, processing takes place in the USA among other locations and retention is limited according to the purposes of processing. The provider identifies the EU-US Data Privacy Framework and standard contractual clauses as transfer mechanisms. Further information: <a href="https://www.hcaptcha.com/privacy">hCaptcha Privacy Policy</a>. You may use telephone or email instead of the contact form.</p>

      <h2>4. Google Maps</h2>
      <p>You may voluntarily load a location map from Google Maps on our legal notice page. For users in the EEA, the Google service provider is Google Ireland Limited, Ireland. The map does not load automatically when the page is opened. Selecting “Load Google Maps” establishes a connection to Google.</p>
      <p>Google may process your IP address, browser and device information and information about your use of the map. Cookies or other storage technologies may be used depending on the service and settings. Data may be processed in the USA and other countries outside the EEA. The map helps you locate our business and plan your visit.</p>
      <p>The legal basis is your voluntary consent under Article 6(1)(a) GDPR and, where information is stored on or read from your device, section 25(1) TDDDG. You may hide the map at any time to withdraw consent for future map requests. This does not affect the lawfulness of processing that has already taken place. You may also remove previously stored information through your browser settings. Our address remains visible without activating the map. A separate external link opens Google Maps directly.</p>
      <p>Information about processing, retention and international transfers is available in the <a href="https://policies.google.com/privacy?hl=en">Google Privacy Policy</a> and <a href="https://policies.google.com/privacy/frameworks?hl=en">data transfer information</a>.</p>

      <h2>5. Cookies, external links and social media</h2>
      <p>Our website does not use its own analytics or marketing tracking services. Logos, fonts and vendor images are served locally. Technical delivery may require strictly necessary storage or access on your device under section 25(2) TDDDG. Optional and form-related services are described in the preceding sections.</p>
      <p>We link to Instagram, LinkedIn, GitHub and other external websites. We do not embed social media widgets or an active Instagram feed. Displaying these links does not itself transfer data to the respective provider. When you open a link, the privacy information of the destination website applies. These links provide information about our business and services; our legal basis for related processing by us is Article 6(1)(f) GDPR (our legitimate interest in business communication).</p>

      <h2>6. Recipients, international transfers and retention</h2>
      <p>Personal data is received by people within our business who require it to perform their duties and by providers involved in hosting, form processing, email communication and security. Where required by law, data may be disclosed to competent authorities or other authorised recipients.</p>
      <p>The services described above may process data outside the EEA. The published data processing terms of Vercel and Web3Forms provide for the European Commission's standard contractual clauses for relevant transfers; hCaptcha also identifies its participation in the EU-US Data Privacy Framework. For Google, the transfer mechanisms applicable to the service apply. You may request information about the applicable safeguards and a copy of the relevant safeguards from our privacy contact.</p>
      <p>We retain enquiries and related personal data within our business only for as long as necessary to handle the enquiry, perform a contract or establish, exercise or defend legal claims. Statutory retention obligations, for example for business correspondence or tax records, remain applicable. Retention by external services also depends on the processing purposes and provider rules described above. Data must be deleted when the relevant purpose and applicable retention obligations have ended.</p>

      <h2>7. Your rights</h2>
      <p>Subject to the requirements of the GDPR, you have the following rights:</p>
      <ul>
        <li>Access to personal data concerning you (Article 15 GDPR)</li>
        <li>Rectification of inaccurate data or completion of incomplete data (Article 16 GDPR)</li>
        <li>Erasure of personal data (Article 17 GDPR)</li>
        <li>Restriction of processing (Article 18 GDPR)</li>
        <li>Data portability where the statutory conditions are met (Article 20 GDPR)</li>
        <li>Objection to processing based on legitimate interests on grounds relating to your particular situation (Article 21(1) GDPR); you may object to direct marketing at any time without giving reasons.</li>
        <li>Withdrawal of consent with effect for the future (Article 7(3) GDPR)</li>
      </ul>
      <p>We do not make solely automated decisions about your contact enquiries that produce legal or similarly significant effects within the meaning of Article 22 GDPR. The spam security check serves only to protect the form. To exercise your rights, contact the privacy contact in section 1.</p>
      <h3>Right to complain to a supervisory authority</h3>
      <p>Under Article 77 GDPR, you may lodge a complaint with a data protection supervisory authority, particularly in the place of your habitual residence, workplace or alleged infringement. Our local supervisory authority is the State Commissioner for Data Protection and Freedom of Information of Baden-Württemberg. Information and complaint options: <a href="https://www.baden-wuerttemberg.datenschutz.de/beschwerde/">LfDI Baden-Württemberg</a>.</p>

      <h2>8. Data security and updates</h2>
      <p>The website and contact form use HTTPS for data transmission. Complete security of internet transmissions, particularly email, cannot be guaranteed. We update this privacy policy when our processing or legal requirements change.</p>
    </div></section>
  </>;
}
