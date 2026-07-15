#!/usr/bin/env python3
import json
import re
import subprocess
import sys
from pathlib import Path


def clean(text: str) -> str:
    replacements = {
        "Õ": "'", "Ò": "“", "Ó": "”", "É": "…", "Ñ": "•",
        "Ð": "–", "Þ": "fi", "û": "ffi", "¥/": "•", "¥": "•",
        "( ": "", "(": "", " ": " ",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    text = re.sub(r"[ \t\r\n]+", " ", text).strip()
    return text


def main() -> None:
    if len(sys.argv) != 4:
        raise SystemExit("Usage: build-full-lecture-map.py SOURCE.pdf slide-map.json slide-map.js")
    pdf, map_path, output = map(Path, sys.argv[1:])
    raw = subprocess.run(
        ["pdftotext", "-layout", str(pdf), "-"],
        check=True,
        capture_output=True,
        text=True,
    ).stdout
    page_text = raw.split("\f")
    if page_text and not page_text[-1].strip():
        page_text.pop()
    mapping = json.loads(map_path.read_text())
    if isinstance(mapping, dict):
        mapping = mapping.get("slides", mapping.get("pages", []))
    if len(mapping) != 361 or len(page_text) != 361:
        raise SystemExit(f"Expected 361 pages; map={len(mapping)}, text={len(page_text)}")
    by_page = {int(item["sourcePage"]): item for item in mapping}
    result = []
    for page in range(1, 362):
        entry = dict(by_page[page])
        # Course ownership for 2026: Service Design owns the full blueprinting
        # and Medly case. The Introduction keeps p.281 as a single teaser; the
        # detailed run remains reachable in the complete archive only.
        if 282 <= page <= 309:
            entry["mainPath"] = False
            entry["contentMode"] = "parked"
            entry["reason"] = (
                "Course ownership: the complete blueprinting and Medly sequence "
                "now lives in Service Design; preserve this page in the archive."
            )
        entry["sourceText"] = clean(page_text[page - 1])
        entry.setdefault("caution", entry.pop("sourcePrivacyCaution", ""))
        result.append(entry)
    output.write_text(
        "window.FULL_LECTURE_MAP = " + json.dumps(result, ensure_ascii=False, indent=2) + ";\n"
    )
    print(f"Wrote {output} with {len(result)} pages; teaching path={sum(bool(x.get('mainPath')) for x in result)}")


if __name__ == "__main__":
    main()
