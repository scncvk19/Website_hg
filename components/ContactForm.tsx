"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { routes, type Language } from "@/lib/locale";
import Icon from "@/components/Icon";

type CaptchaApi = {
  render(container: HTMLElement, options: { sitekey: string; size: "compact"; theme: "light" }): string;
  getResponse(id: string): string;
  reset(id: string): void;
  remove(id: string): void;
};
type CaptchaWindow = Window & { hcaptcha?: CaptchaApi; hgCaptchaReady?: () => void };
function captchaApi() { return (window as CaptchaWindow).hcaptcha; }
let captchaLoading: Promise<CaptchaApi> | undefined;
function loadCaptcha(lang: Language): Promise<CaptchaApi> {
  if (captchaLoading) return captchaLoading;
  captchaLoading = new Promise((resolve, reject) => {
    const w=window as CaptchaWindow;
    const script=document.createElement("script");
    const timer=window.setTimeout(()=>fail(),20000);
    function fail() { window.clearTimeout(timer); delete w.hgCaptchaReady; script.remove(); reject(new Error("Captcha unavailable")); }
    w.hgCaptchaReady=()=>{
      window.clearTimeout(timer);
      delete w.hgCaptchaReady;
      const api=captchaApi();
      if(api) resolve(api); else reject(new Error("Captcha unavailable"));
    };
    script.src="https://js.hcaptcha.com/1/api.js?render=explicit&onload=hgCaptchaReady&hl="+lang;
    script.async=true;
    script.onerror=fail;
    document.head.appendChild(script);
  });
  return captchaLoading;
}
// Öffentlicher hCaptcha-Sitekey von Web3Forms (kein Secret).
const captchaSiteKey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
const copy = {
  de: { title:"Kontaktformular", description:"Schildern Sie kurz Ihr Anliegen. Wir melden uns bei Ihnen.", name:"Name", company:"Firma (optional)", email:"E-Mail-Adresse", phone:"Telefon (optional)", topic:"Betreff", message:"Nachricht", required:"Mit * gekennzeichnete Felder sind erforderlich.", privacy:"Ich habe die Datenschutzhinweise zur Kenntnis genommen. Nach Aktivierung der Sicherheitsprüfung werden Daten an hCaptcha und beim Versand an Web3Forms übermittelt.", privacyLink:"Datenschutzerklärung", send:"Nachricht senden", sending:"Wird gesendet …", unavailable:"Das Kontaktformular ist derzeit nicht verfügbar. Bitte kontaktieren Sie uns telefonisch oder per E-Mail.", loading:"Sicherheitsprüfung wird geladen …", captchaError:"Bitte schließen Sie die Sicherheitsprüfung ab.", loadError:"Die Sicherheitsprüfung konnte nicht geladen werden. Bitte laden Sie die Seite neu oder kontaktieren Sie uns per Telefon oder E-Mail.", error:"Der Versand konnte nicht bestätigt werden. Bitte versuchen Sie es erneut oder nutzen Sie Telefon oder E-Mail.", sensitive:"Bitte senden Sie keine Passwörter, vertraulichen Protokolle oder sensiblen Kundendaten." },
  en: { title:"Contact form", description:"Briefly describe your enquiry. We will get back to you.", name:"Name", company:"Company (optional)", email:"Email address", phone:"Phone (optional)", topic:"Subject", message:"Message", required:"Fields marked * are required.", privacy:"I have read the privacy information. Activating the security check sends data to hCaptcha; submitting the form sends data to Web3Forms.", privacyLink:"Privacy policy", send:"Send message", sending:"Sending …", unavailable:"The contact form is currently unavailable. Please contact us by phone or email.", loading:"Loading the security check …", captchaError:"Please complete the security check.", loadError:"The security check could not be loaded. Please reload the page or contact us by phone or email.", error:"Sending could not be confirmed. Please try again or contact us by phone or email.", sensitive:"Please do not send passwords, confidential logs or sensitive customer data." }
} as const;
export default function ContactForm({ lang, accessKey }: { lang: Language; accessKey: string }) {
  const t=copy[lang];
  const [acknowledged,setAcknowledged]=useState(false);
  const [widgetReady,setWidgetReady]=useState(false);
  const [sending,setSending]=useState(false);
  const [error,setError]=useState("");
  const [scriptError,setScriptError]=useState(false);
  const container=useRef<HTMLDivElement>(null);
  const widget=useRef<string | null>(null);
  const inFlight=useRef(false);
  const active=Boolean(accessKey)&&acknowledged;

  useEffect(()=>{
    if(!active || !container.current) return;
    let disposed=false;
    let api: CaptchaApi | undefined;
    let id: string | undefined;
    const target=container.current;
    setWidgetReady(false); setScriptError(false);
    void loadCaptcha(lang).then(loaded=>{
      if(disposed) return;
      api=loaded;
      id=loaded.render(target,{sitekey:captchaSiteKey,size:"compact",theme:"light"});
      widget.current=id; setWidgetReady(true);
    }).catch(()=>{ if(!disposed) setScriptError(true); });
    return ()=>{
      disposed=true;
      if(id!==undefined) { try { api?.remove(id); } catch { /* Widget may already be detached. */ } }
      widget.current=null;
    };
  },[active,lang]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(!accessKey || !acknowledged || inFlight.current) return;
    setError("");
    const api=captchaApi();
    const token=widget.current===null?"":api?.getResponse(widget.current);
    if(!token) { setError(t.captchaError); return; }
    const form=new FormData(event.currentTarget);
    if(String(form.get("botcheck")??"").trim()) { setError(t.error); return; }
    const name=String(form.get("name")??"").trim();
    const email=String(form.get("email")??"").trim();
    const topic=String(form.get("topic")??"").trim();
    const message=String(form.get("message")??"").trim();
    if(!name || !email || !topic || !message) { setError(t.error); return; }
    // Nur die erlaubten Felder übertragen; kein frei wählbarer Empfänger oder Redirect.
    const body=new FormData();
    body.set("access_key",accessKey);
    body.set("subject","Neue Anfrage über HG-Systeme");
    body.set("from_name","HG-Systeme Website");
    body.set("name",name);
    body.set("email",email);
    body.set("company",String(form.get("company")??"").trim());
    body.set("phone",String(form.get("phone")??"").trim());
    body.set("topic",topic);
    body.set("message",message);
    body.set("language",lang);
    body.set("h-captcha-response",token);
    inFlight.current=true; setSending(true);
    try {
      const response=await fetch("https://api.web3forms.com/submit",{method:"POST",body,redirect:"error",credentials:"omit",referrerPolicy:"strict-origin-when-cross-origin",signal:AbortSignal.timeout(20000)});
      const result=await response.json();
      if(response.ok && result.success===true) {
        // Ausschließlich ein festes, internes Ziel; keine Formulardaten in der URL.
        window.location.assign(routes.thanks[lang]);
        return;
      }
      setError(t.error);
    } catch { setError(t.error); }
    finally {
      if(widget.current!==null) { try { api?.reset(widget.current); } catch { setWidgetReady(false); setScriptError(true); } }
      inFlight.current=false; setSending(false);
    }
  }
  return <section className="contact-form-panel" aria-labelledby="contact-form-title">
    <h2 id="contact-form-title">{t.title}</h2><p className="muted">{t.description}</p>
    {!accessKey&&<p className="notice small" role="status">{t.unavailable}</p>}
    <form className="contact-form" method="post" action={routes.contact[lang]} onSubmit={submit}>
      <p className="muted small">{t.required}</p>
      <div className="contact-field-grid">
        <label>{t.name} *<input name="name" autoComplete="name" required maxLength={120}/></label>
        <label>{t.company}<input name="company" autoComplete="organization" maxLength={160}/></label>
        <label>{t.email} *<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
        <label>{t.phone}<input name="phone" type="tel" autoComplete="tel" maxLength={40}/></label>
      </div>
      <label>{t.topic} *<input name="topic" required maxLength={200}/></label>
      <label>{t.message} *<textarea name="message" required maxLength={5000} rows={6}/></label>
      <p className="small muted">{t.sensitive}</p>
      <div hidden aria-hidden="true"><label>Website<input name="botcheck" tabIndex={-1} autoComplete="off"/></label></div>
      <label className="contact-privacy"><input type="checkbox" required checked={acknowledged} disabled={sending} onChange={event=>setAcknowledged(event.target.checked)}/><span>{t.privacy} <Link href={routes.privacy[lang]}>{t.privacyLink}</Link></span></label>
      {active&&<><div ref={container} className="contact-captcha"/>{!widgetReady&&!scriptError&&<p className="small muted" role="status">{t.loading}</p>}{scriptError&&<p className="contact-error" role="alert">{t.loadError}</p>}</>}
      {error&&<p className="contact-error" role="alert">{error}</p>}
      <button className="button" type="submit" disabled={!active||!widgetReady||sending||scriptError}>{sending?t.sending:t.send}<Icon name="arrow"/></button>
    </form>
  </section>;
}
