from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

source = Path('prototypes/renders/altitude-full-lecture/slides')
out = Path('prototypes/renders/altitude-full-lecture/contact-sheets')
out.mkdir(parents=True, exist_ok=True)
files = sorted(source.glob('slide-*.jpg'))
columns, rows = 6, 5
thumb_w, thumb_h = 320, 180
gap, label_h, margin, header_h = 14, 30, 24, 76

try:
    title_font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 30)
    label_font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 17)
except OSError:
    title_font = label_font = ImageFont.load_default()

def sheet(group, title, destination):
    sheet_rows = (len(group) + columns - 1) // columns
    width = margin * 2 + columns * thumb_w + (columns - 1) * gap
    height = header_h + margin + sheet_rows * (thumb_h + label_h) + max(0, sheet_rows - 1) * gap + margin
    canvas = Image.new('RGB', (width, height), '#002452')
    draw = ImageDraw.Draw(canvas)
    draw.text((margin, 20), title, fill='#FFFFFF', font=title_font)
    draw.rectangle((margin, 58, margin + 180, 64), fill='#FABD0F')
    for index, path in enumerate(group):
        row, column = divmod(index, columns)
        x = margin + column * (thumb_w + gap)
        y = header_h + margin + row * (thumb_h + label_h + gap)
        image = Image.open(path).convert('RGB')
        image.thumbnail((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        canvas.paste(image, (x + (thumb_w - image.width) // 2, y + (thumb_h - image.height) // 2))
        draw.text((x, y + thumb_h + 7), path.stem.replace('slide-', 'p.'), fill='#FABD0F', font=label_font)
    canvas.save(destination, optimize=True)

for start in range(0, len(files), columns * rows):
    group = files[start:start + columns * rows]
    first = int(group[0].stem.split('-')[1])
    last = int(group[-1].stem.split('-')[1])
    sheet(group, f'ALTITUDE BLUE · ORIGINAL PAGES {first:03d}–{last:03d}', out / f'pages-{first:03d}-{last:03d}.jpg')

representatives = [1, 17, 26, 43, 61, 81, 100, 121, 153, 190, 207, 219, 243, 281, 310, 320, 340, 354]
selected = [source / f'slide-{page:03d}.jpg' for page in representatives]
sheet(selected, 'ALTITUDE BLUE · COMPLETE LECTURE · 18-SECTION OVERVIEW', out.parent / 'overview.jpg')
print(f'Wrote {len(list(out.glob("*.jpg")))} contact sheets and the 18-section overview from {len(files)} slides')
