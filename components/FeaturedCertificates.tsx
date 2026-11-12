import BrandMark from "@/components/BrandMark";
import {featuredCertificates,brandLinks} from "@/lib/credentials";
import type {Language} from "@/lib/locale";
export default function FeaturedCertificates({lang}:{lang:Language}){
 return <div className="quiet-certifications">{featuredCertificates.map(item=><article className="quiet-card" key={item.id}>
 <BrandMark id={item.id} name={item.name}/><h4>{item.name}</h4><p>{item.description[lang]}</p>
 <a className="quiet-link" href={brandLinks[item.id]} target="_blank" rel="noopener noreferrer">{item.id==="azure"?"Microsoft Learn":"PeopleCert"}</a>
 </article>)}</div>;
}
