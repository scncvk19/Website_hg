export type Language = "de" | "en";
export const routes = {
  home: { de: "/", en: "/en" },
  services: { de: "/leistungen", en: "/en/services" },
  about: { de: "/ueber-uns", en: "/en/about" },
  certificates: { de: "/zertifikate", en: "/en/certificates" },
  guide: { de: "/ratgeber", en: "/en/guide" },
  contact: { de: "/kontakt", en: "/en/contact" },
  legal: { de: "/impressum", en: "/en/legal" },
  privacy: { de: "/datenschutz", en: "/en/privacy" },
  thanks: { de: "/kontakt/danke", en: "/en/contact/thank-you" },
  support: { de: "/leistungen/it-betreuung", en: "/en/services/it-support" },
  security: { de: "/leistungen/sicherheitscheck", en: "/en/services/security-check" },
  backup: { de: "/leistungen/backup", en: "/en/services/backup" },
  network: { de: "/leistungen/firewall-netzwerk", en: "/en/services/firewall-network" },
  training: { de: "/leistungen/schulungen", en: "/en/services/security-training" },
  green: { de: "/leistungen/green-it", en: "/en/services/green-it" }
} as const;
export function translatedPath(path: string, language: Language) {
  return Object.values(routes).find(pair => pair.de === path || pair.en === path)?.[language] ?? routes.home[language];
}
