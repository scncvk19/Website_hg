#!/usr/bin/env python3
"""Import fixed, documented image URLs. No secrets or runtime external requests."""
import argparse
import json
from pathlib import Path
import sys
import urllib.request
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ASSETS = json.loads((ROOT / "lib/certificate-assets.json").read_text(encoding="utf-8"))
LIMIT = 10 * 1024 * 1024

def validate(data, suffix):
    if not 0 < len(data) <= LIMIT:
        raise ValueError("unexpected file size")
    if suffix == ".jpg":
        if not data.startswith(b"\xff\xd8\xff") or not data.endswith(b"\xff\xd9"):
            raise ValueError("not a complete JPEG")
    elif suffix == ".png":
        if not data.startswith(b"\x89PNG\r\n\x1a\n"):
            raise ValueError("not a PNG")
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

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive-only", action="store_true")
    args = parser.parse_args()
    failed = []
    for item in ASSETS:
        if args.archive_only and "/archive/" not in item["path"]:
            continue
        dest = ROOT / "public" / item["path"].lstrip("/")
        try:
            if dest.exists():
                validate(dest.read_bytes(), dest.suffix)
                print("Already present:", item["id"], flush=True)
                continue
            request = urllib.request.Request(item["url"], headers={"User-Agent": "Mozilla/5.0 (HG-Systeme website migration)", "Accept": "image/*"})
            with urllib.request.urlopen(request, timeout=30) as response:
                if not response.geturl().startswith("https://"):
                    raise ValueError("non-HTTPS redirect")
                data = response.read(LIMIT + 1)
            validate(data, dest.suffix)
            dest.parent.mkdir(parents=True, exist_ok=True)
            temp = dest.with_suffix(dest.suffix + ".download")
            temp.write_bytes(data)
            temp.replace(dest)
            print("Imported:", item["id"], len(data), "bytes", flush=True)
        except Exception as exc:
            failed.append(item["id"])
            print("Failed:", item["id"], str(exc), file=sys.stderr, flush=True)
    if failed:
        print("Missing/invalid:", ", ".join(failed), file=sys.stderr)
        return 1
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
