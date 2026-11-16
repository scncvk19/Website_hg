"use client";

import { useState } from "react";
import { company } from "@/lib/content";
import type { Language } from "@/lib/locale";
import styles from "./location-map.module.css";

const address = [company.name, company.street, company.city, "Deutschland"].join(", ");
const query = encodeURIComponent(address);
const mapsLink = "https://www.google.com/maps/search/?api=1&query=" + query;
const embedUrl = "https://maps.google.com/maps?output=embed&q=" + query;

export default function LocationMap({ lang = "de" }: { lang?: Language }) {
  const [showMap, setShowMap] = useState(false);
  const de = lang === "de";
  return <section className={styles.location} aria-labelledby="location-heading">
    <h2 id="location-heading">{de ? "Unser Standort" : "Our location"}</h2>
    <p>{company.name}<br/>{company.street}<br/>{company.city}, {de ? "Deutschland" : "Germany"}</p>
    <div className={styles.map}>
      {showMap ? <iframe title={de ? "Google Maps – HG-Systeme in Eberbach" : "Google Maps – HG-Systeme in Eberbach"} src={embedUrl} referrerPolicy="no-referrer" allowFullScreen/> : <div className={styles.placeholder}>
        <strong>{de ? "HG-Systeme in Eberbach" : "HG-Systeme in Eberbach"}</strong>
        <p>{de ? "Mit „Google Maps laden“ willigen Sie in die Verbindung zu Google und die damit verbundene Datenverarbeitung ein. Google kann insbesondere Ihre IP-Adresse und Geräteinformationen verarbeiten, Cookies verwenden und Daten außerhalb des EWR verarbeiten. Sie können die Karte jederzeit wieder ausblenden." : "By selecting “Load Google Maps”, you consent to the connection to Google and the associated processing. Google may process your IP address and device information, use cookies and process data outside the EEA. You may hide the map at any time."}</p>
        <button className="button" type="button" onClick={() => setShowMap(true)}>{de ? "Google Maps laden" : "Load Google Maps"}</button>
      </div>}
    </div>
    <div className={styles.actions}>
      {showMap && <button className={styles.hide} type="button" onClick={() => setShowMap(false)}>{de ? "Karte ausblenden" : "Hide map"}</button>}
      <a href={mapsLink} target="_blank" rel="noopener noreferrer">{de ? "In Google Maps öffnen" : "Open in Google Maps"} ↗</a>
    </div>
    <p className={styles.privacy}>{de ? "Beim Öffnen von Google Maps gelten die " : "When opening Google Maps, the "}<a href={"https://policies.google.com/privacy?hl="+lang} target="_blank" rel="noopener noreferrer">{de ? "Datenschutzhinweise von Google" : "Google privacy policy"}</a>{de ? "." : " applies."}</p>
  </section>;
}
