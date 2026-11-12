"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export default function CertificateThumbnail({src,alt,icon,kind="badge"}:{src?:string;alt:string;icon:string;kind?:"badge"|"archive"}){
  const [failed,setFailed]=useState(false);
  return <span className={"certificate-image certificate-image-"+kind}>
    {src&&!failed?<img src={src} alt={alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={()=>setFailed(true)}/>:<span className="icon-tile"><Icon name={icon}/></span>}
  </span>;
}
