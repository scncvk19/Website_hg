"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translatedPath, type Language } from "@/lib/locale";

export default function LanguageSwitch({ lang }: { lang: Language }) {
  const path = usePathname();
  return <nav className="language-switch" aria-label={lang === "de" ? "Sprache auswählen" : "Choose language"}>
    {(["de", "en"] as const).map(language => <Link key={language} href={translatedPath(path, language)} lang={language} hrefLang={language} aria-current={lang === language ? "page" : undefined} aria-label={language === "de" ? "Deutsch" : "English"}>{language.toUpperCase()}</Link>)}
  </nav>;
}
