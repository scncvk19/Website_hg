import Link from "next/link";
import { PageIntro } from "@/components/Site";
import { routes, type Language } from "@/lib/locale";
export default function ContactThanks({lang}:{lang:Language}) {
  const de=lang==="de";
  return <><PageIntro eyebrow={de?"Kontakt":"Contact"} title={de?"Vielen Dank für Ihre Anfrage.":"Thank you for your enquiry."} text={de?"Wenn Ihre Nachricht erfolgreich übermittelt wurde, melden wir uns bei Ihnen.":"If your message was submitted successfully, we will get back to you."}/><section className="section"><div className="container narrow"><Link className="button" href={routes.home[lang]}>{de?"Zur Startseite":"Back to homepage"}</Link></div></section></>;
}
