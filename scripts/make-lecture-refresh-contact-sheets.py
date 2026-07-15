#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]


def font(size: int):
    for candidate in [
        "/System/Library/Fonts/SFNS.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]:
        try:
            return ImageFont.truetype(candidate, size)
        except OSError:
            pass
    return ImageFont.load_default()


def build(folder: Path, columns: int = 4, chunk: int = 24) -> None:
    files = sorted(folder.glob("slide-*.jpg"))
    if not files:
        return
    thumb_w, thumb_h = 400, 225
    label_h, gap, margin = 30, 18, 24
    rows = (chunk + columns - 1) // columns
    title_font, label_font = font(24), font(16)
    outputs = []
    for start in range(0, len(files), chunk):
        subset = files[start:start + chunk]
        canvas = Image.new("RGB", (margin * 2 + columns * thumb_w + (columns - 1) * gap, margin * 2 + 46 + rows * (thumb_h + label_h + gap)), "#00152f")
        draw = ImageDraw.Draw(canvas)
        draw.text((margin, margin), f"{folder.parent.name} · {folder.name} · {start + 1:03d}–{start + len(subset):03d}", fill="#ffffff", font=title_font)
        for offset, file in enumerate(subset):
            row, col = divmod(offset, columns)
            x = margin + col * (thumb_w + gap)
            y = margin + 46 + row * (thumb_h + label_h + gap)
            with Image.open(file) as source:
                image = source.convert("RGB")
                image.thumbnail((thumb_w, thumb_h))
                frame = Image.new("RGB", (thumb_w, thumb_h), "#000000")
                frame.paste(image, ((thumb_w - image.width) // 2, (thumb_h - image.height) // 2))
                canvas.paste(frame, (x, y))
            draw.text((x, y + thumb_h + 6), file.stem.replace("slide-", "#"), fill="#FABD0F", font=label_font)
        out = folder.parent / f"contact-{folder.name}-{start + 1:03d}-{start + len(subset):03d}.jpg"
        canvas.save(out, quality=86, optimize=True)
        outputs.append(out)
    print(f"{folder.parent.name}/{folder.name}: {len(files)} slides -> {len(outputs)} contact sheets")


def main() -> None:
    base = ROOT / "prototypes/renders"
    for slug in ["altitude-cognition-2026", "altitude-service-design-2026"]:
        for mode in ["teaching", "originals"]:
            build(base / slug / mode)


if __name__ == "__main__":
    main()

