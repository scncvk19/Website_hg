import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  support: <><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><rect x="3" y="12" width="4" height="7" rx="2"/><rect x="17" y="12" width="4" height="7" rx="2"/><path d="M17 19c0 2-3 3-5 3"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/></>,
  network: <><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/></>,
  training: <><path d="m2 9 10-5 10 5-10 5-10-5ZM6 11v6c3 3 9 3 12 0v-6M22 9v6"/></>,
  leaf: <><path d="M20 3C9 3 4 8 4 15a5 5 0 0 0 5 5c7 0 11-7 11-17ZM4 20 15 9"/></>,
  arrow: <><path d="M4 12h15m-6-6 6 6-6 6"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  phone: <path d="M21 16v3a2 2 0 0 1-2 2C10 21 3 14 3 5a2 2 0 0 1 2-2h3l2 5-3 2a13 13 0 0 0 7 7l2-3 5 2Z"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>
};
export default function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.check}</svg>;
}
