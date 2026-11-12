"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export default function CertificateThumbnail({src,alt,icon,kind="badge"}:{src?:string;alt:string;icon:string;kind?:"badge"|"archive"}){
  const [failed,setFailed]=useState(false);
  const content=src&&!failed?<img src={src} alt={alt} loading="lazy" decoding="async" onError={()=>setFailed(true)}/>:<span className="icon-tile"><Icon name={icon}/></span>;
  return kind==="archive"&&src&&!failed
    ? <a className="certificate-image certificate-image-archive" href={src} target="_blank" rel="noopener noreferrer" aria-label={alt}>{content}</a>
    : <span className={"certificate-image certificate-image-"+kind}>{content}</span>;
}
