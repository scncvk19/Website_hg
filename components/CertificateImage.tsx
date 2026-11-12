import "server-only";
import { existsSync } from "node:fs";
import { join } from "node:path";
import assets from "@/lib/certificate-assets.json";
import CertificateThumbnail from "@/components/CertificateThumbnail";

export default function CertificateImage({id,alt,icon,kind="badge"}:{id:string;alt:string;icon:string;kind?:"badge"|"archive"}){
  const asset=assets.find(item=>item.id===id);
  if(!asset) return <CertificateThumbnail alt={alt} icon={icon} kind={kind}/>;
  const local=existsSync(join(process.cwd(),"public",asset.path.slice(1)));
  // Nur im internen Entwurf als Übergang: bereits veröffentlichte Original-Bildquelle.
  // Lokaler Import hat Vorrang, kein externer Abruf bei vorhandener Datei.
  return <CertificateThumbnail src={local?asset.path:asset.url} alt={alt} icon={icon} kind={kind}/>;
}
