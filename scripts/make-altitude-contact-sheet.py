from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

source = Path("prototypes/renders/altitude-original-20")
files = sorted(source.glob("slide-*.png"))
columns, rows = 5, 4
thumb_w, thumb_h = 400, 225
gap, label_h = 18, 42
margin, header_h = 28, 92
canvas_w = margin * 2 + columns * thumb_w + (columns - 1) * gap
canvas_h = header_h + margin + rows * (thumb_h + label_h) + (rows - 1) * gap + margin
canvas = Image.new("RGB", (canvas_w, canvas_h), "#002452")
draw = ImageDraw.Draw(canvas)

try:
    title_font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 36)
    label_font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 22)
except OSError:
    title_font = ImageFont.load_default()
    label_font = ImageFont.load_default()

draw.text((margin, 24), "ALTITUDE BLUE · 20 ORIGINAL SLIDES", fill="#FFFFFF", font=title_font)
draw.rectangle((margin, 72, margin + 180, 79), fill="#FABD0F")

for index, path in enumerate(files):
    row, column = divmod(index, columns)
    x = margin + column * (thumb_w + gap)
    y = header_h + margin + row * (thumb_h + label_h + gap)
    image = Image.open(path).convert("RGB")
    image.thumbnail((thumb_w, thumb_h), Image.Resampling.LANCZOS)
    tile = Image.new("RGB", (thumb_w, thumb_h), "#F6F3EB")
    tile.paste(image, ((thumb_w - image.width) // 2, (thumb_h - image.height) // 2))
    canvas.paste(tile, (x, y))
    draw.text((x, y + thumb_h + 9), f"{index + 1:02d}", fill="#FABD0F", font=label_font)

canvas.save(source / "overview.png", optimize=True)
print(f"Wrote {source / 'overview.png'} from {len(files)} slides")
