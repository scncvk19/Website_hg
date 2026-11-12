import "server-only";
import { existsSync } from "node:fs";
import { join } from "node:path";
import assets from "@/lib/certificate-assets.json";
import CertificateThumbnail from "@/components/CertificateThumbnail";

export default function CertificateImage({id,alt,icon,kind="badge"}:{id:string;alt:string;icon:string;kind?:"badge"|"archive"}){
  const asset=assets.find(item=>item.id===id);
  const local=asset&&existsSync(join(process.cwd(),"public",asset.path.slice(1)));
  return <CertificateThumbnail src={local?asset.path:undefined} alt={alt} icon={icon} kind={kind}/>;
}
