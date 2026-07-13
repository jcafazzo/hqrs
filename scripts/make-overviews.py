from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1] / "prototypes" / "renders"
for deck in ("forensic-thread", "museum-designed-error", "systems-theatre"):
    folder = root / deck
    slides = sorted(folder.glob("slide-*.png"))
    thumb_w, thumb_h = 480, 270
    gap, label_h, cols = 18, 28, 5
    rows = (len(slides) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * thumb_w + (cols + 1) * gap, rows * (thumb_h + label_h) + (rows + 1) * gap), "#002452")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default(size=18)
    for i, slide_path in enumerate(slides):
        image = Image.open(slide_path).convert("RGB").resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        col, row = i % cols, i // cols
        x = gap + col * (thumb_w + gap)
        y = gap + row * (thumb_h + label_h + gap)
        sheet.paste(image, (x, y))
        draw.text((x, y + thumb_h + 5), f"{i + 1:02d}", fill="#fabd0f", font=font)
    sheet.save(folder / "overview.png", optimize=True)
    print(f"{deck}: {len(slides)} slides -> {folder / 'overview.png'}")
