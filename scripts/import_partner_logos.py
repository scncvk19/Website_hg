import json
import urllib.request
from pathlib import Path
import sys
import xml.etree.ElementTree as ET

LIMIT = 10 * 1024 * 1024

def validate(data, suffix):
    if not 0 < len(data) <= LIMIT:
        raise ValueError("unexpected file size")
    if suffix == ".png":
        if not data.startswith(b"\x89PNG\r\n\x1a\n"):
            raise ValueError("not a PNG")
    elif suffix in {".jpg", ".jpeg"}:
        if not (data.startswith(b"\xff\xd8\xff") and data.endswith(b"\xff\xd9")):
            raise ValueError("not a JPEG")
    elif suffix == ".svg":
        if b"<!DOCTYPE" in data.upper() or b"<!ENTITY" in data.upper():
            raise ValueError("SVG declarations not permitted")
        root = ET.fromstring(data)
        if root.tag.split("}")[-1] != "svg":
            raise ValueError("not an SVG")
        for element in root.iter():
            tag = element.tag.split("}")[-1].lower()
            if tag in {"script", "foreignobject", "iframe", "object", "embed"}:
                raise ValueError("active SVG content")
            for key, value in element.attrib.items():
                attr = key.split("}")[-1].lower()
                if attr.startswith("on") or (attr == "href" and not value.startswith("#")):
                    raise ValueError("active or external SVG reference")
    else:
        raise ValueError("unsupported file extension")

ROOT=Path(__file__).resolve().parents[1]
assets=json.loads((ROOT/"lib/partner-logo-assets.json").read_text(encoding="utf-8"))
failed=[]
for item in assets:
    dest=ROOT/"public"/item["path"].lstrip("/")
    try:
        if dest.exists():
            validate(dest.read_bytes(),dest.suffix)
            continue
        if "--check" in sys.argv:
            raise ValueError("missing local logo")
        req=urllib.request.Request(item["url"],headers={"User-Agent":"HG-Systeme internal website preview logo import","Accept":"image/svg+xml,image/*"})
        with urllib.request.urlopen(req,timeout=30) as response:
            if not response.geturl().startswith("https://"):
                raise ValueError("non-HTTPS redirect")
            data=response.read(LIMIT+1)
        validate(data,dest.suffix)
        dest.parent.mkdir(parents=True,exist_ok=True)
        dest.write_bytes(data)
        print("Imported",item["id"],flush=True)
    except Exception as exc:
        failed.append(item["id"])
        print("Failed",item["id"],str(exc),file=sys.stderr,flush=True)
if failed:
    sys.exit(1)
