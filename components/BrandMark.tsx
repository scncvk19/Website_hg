import "server-only";
import {existsSync} from "node:fs";
import {join} from "node:path";
const marks: Record<string,{file:string;name:string}> = {
 azure:{file:"microsoft.svg",name:"Microsoft"},microsoft:{file:"microsoft.svg",name:"Microsoft"},
 itil:{file:"peoplecert.svg",name:"PeopleCert"},dell:{file:"dell.svg",name:"Dell Technologies"},
 watchguard:{file:"watchguard.png",name:"WatchGuard"},gdata:{file:"gdata.png",name:"G DATA"},
 netwrix:{file:"netwrix.svg",name:"Netwrix Password Secure"},inoxision:{file:"inoxision.svg",name:"inoxision ARCHIVE"}
};
export default function BrandMark({id,name}:{id:string;name:string}){
 const mark=marks[id];
 const local=mark&&existsSync(join(process.cwd(),"public","images","partners",mark.file));
 return <span className="quiet-mark">{local?<img src={"/images/partners/"+mark.file} alt={mark.name} loading="lazy" decoding="async"/>:<span>{mark?.name??name}</span>}</span>;
}
