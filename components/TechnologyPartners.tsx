import BrandMark from "@/components/BrandMark";
import {credentials,brandLinks,partnerLabels} from "@/lib/credentials";
import type {Language} from "@/lib/locale";
export default function TechnologyPartners({lang,compact=false}:{lang:Language;compact?:boolean}){
 const order=compact?["gdata","watchguard","dell","netwrix","inoxision"]:["gdata","watchguard","dell","microsoft","netwrix","inoxision"];
 return <div className="quiet-partners">{order.map(id=>{const item=credentials.find(c=>c.id===id);if(!item)return null;return <article className="quiet-card" key={id}>
 <BrandMark id={id} name={item.name}/><h4><a href={brandLinks[id]} target="_blank" rel="noopener noreferrer">{item.name}</a></h4>
 {partnerLabels[id]&&<span className="quiet-level">{partnerLabels[id]}</span>}<p>{item.description[lang]}</p>
 </article>})}</div>;
}
