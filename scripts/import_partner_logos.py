import json
import urllib.request
from pathlib import Path
import sys
from import_certificate_images import validate, LIMIT
ROOT=Path(__file__).resolve().parents[1]
assets=json.loads((ROOT/"lib/partner-logo-assets.json").read_text(encoding="utf-8"))
failed=[]
for item in assets:
    dest=ROOT/"public"/item["path"].lstrip("/")
    try:
        if dest.exists():
            validate(dest.read_bytes(),dest.suffix)
            continue
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
