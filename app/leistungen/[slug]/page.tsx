import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import { PageIntro, ContactBand } from "@/components/Site";
import Icon from "@/components/Icon";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find(item => item.slug === slug);
  return s ? { title: s.title, description: s.subtitle } : {};
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  return <><PageIntro eyebrow="Unsere Leistungen" title={service.title} text={service.subtitle}/><section className="section"><div className="container"><Link href="/leistungen" className="back-link">← Alle Leistungen</Link><div className="detail-grid"><div><h2>Was wir für Sie tun</h2><p className="lead">{service.intro}</p><ul className="feature-list">{service.features.map(f => <li key={f}><Icon name="check"/><span>{f}</span></li>)}</ul><div className="notice"><h3>Gut zu wissen</h3><p>{service.limit}</p></div></div><aside className="detail-aside"><span className="icon-tile"><Icon name={service.icon}/></span><h2>Ihr Nutzen</h2><p>{service.benefit}</p><Link href="/kontakt" className="button">Anfrage stellen <Icon name="arrow"/></Link><h3>So gehen wir vor</h3><ol className="number-list">{service.steps.map(t => <li key={t}>{t}</li>)}</ol></aside></div></div></section><ContactBand/></>;
}
