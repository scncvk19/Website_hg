import CertificateImage from "@/components/CertificateImage";
import { featuredCertificates } from "@/lib/credentials";
import type { Language } from "@/lib/locale";
export default function FeaturedCertificates({lang}:{lang:Language}){
  return <div className="featured-certificates">{featuredCertificates.map(item=><article className="featured-certificate" key={item.id}>
    <CertificateImage id={item.id} alt={item.id==="azure"?"Microsoft Certified Associate":"ITIL Foundation"} icon={item.icon}/>
    <div><h4>{item.name}</h4><p>{item.description[lang]}</p></div>
  </article>)}</div>;
}
