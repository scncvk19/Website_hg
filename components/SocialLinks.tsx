import { socialProfiles, type SocialPlatform } from "@/lib/social";
import type { Language } from "@/lib/locale";
import styles from "./navigation.module.css";

function SocialIcon({platform}:{platform:SocialPlatform}){
  if(platform==="github")return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5.4v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 7a4.4 4.4 0 0 0-.1-3.4S17.4 3.3 15 4.9a13 13 0 0 0-6 0C6.6 3.3 5.6 3.6 5.6 3.6A4.4 4.4 0 0 0 5.5 7a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.9 5.7 5.6 6a3 3 0 0 0-.8 2.3v3.4"/></svg>;
  if(platform==="instagram")return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01" strokeWidth="2.4"/></svg>;
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="9" width="4" height="12" rx=".5"/><circle cx="5" cy="5" r="2"/><path d="M11 21V9h4v2a4 4 0 0 1 6 3.5V21h-4v-6a1.5 1.5 0 0 0-3 0v6Z"/></svg>;
}
export default function SocialLinks({lang="de",labels=false}:{lang?:Language;labels?:boolean}){
  const active=socialProfiles.filter(profile=>profile.url.startsWith("https://"));
  if(!active.length)return null;
  return <div className={styles.socialLinks+(labels?" "+styles.labeledSocial:"")} role="group" aria-label={lang==="de"?"HG-Systeme in sozialen Medien":"HG-Systeme on social media"}>
    {active.map(profile=><a key={profile.platform} href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={profile.label+" – HG-Systeme"} title={profile.label}><SocialIcon platform={profile.platform}/>{labels&&<span>{profile.label}</span>}</a>)}
  </div>;
}
