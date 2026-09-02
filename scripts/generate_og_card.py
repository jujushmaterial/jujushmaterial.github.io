from __future__ import annotations

import hashlib
import io
import os
import re
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "images" / "og-preview.png"
INDEX = ROOT / "index.html"
AVATAR_URL = "https://github.com/jujushmaterial.png?size=512"

WIDTH, HEIGHT = 1200, 630
BLUE = "#3498db"
BLUE_DARK = "#2e5a7d"
INK = "#1f2a37"
TEXT = "#404040"
MUTED = "#667788"
BG = "#f4f6f8"
CHIP_BG = "#edf3f7"
CHIP_BORDER = "#d7e2ea"
WHITE = "#ffffff"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()


def load_avatar() -> Image.Image:
    local = os.environ.get("OG_AVATAR_PATH")
    if local:
        return Image.open(local).convert("RGB")
    req = urllib.request.Request(AVATAR_URL, headers={"User-Agent": "jujushmaterial-og-card/1.0"})
    with urllib.request.urlopen(req, timeout=30) as response:
        return Image.open(io.BytesIO(response.read())).convert("RGB")


def circular_avatar(source: Image.Image, size: int) -> Image.Image:
    avatar = ImageOps.fit(source, (size, size), method=Image.Resampling.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(avatar.convert("RGBA"), (0, 0), mask)
    return out


def build_card() -> None:
    img = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    draw.rounded_rectangle((28, 28, WIDTH - 28, HEIGHT - 28), radius=28, fill=WHITE, outline="#dfe6ec", width=2)

    left = (28, 28, 405, HEIGHT - 28)
    draw.rounded_rectangle(left, radius=28, fill=BLUE)
    draw.rectangle((365, 28, 405, HEIGHT - 28), fill=BLUE)

    for i in range(-200, 700, 54):
        draw.line((28, i, 405, i + 377), fill="#5aade3", width=1)

    avatar_size = 190
    avatar = circular_avatar(load_avatar(), avatar_size)
    ax, ay = 122, 82
    draw.ellipse((ax - 7, ay - 7, ax + avatar_size + 7, ay + avatar_size + 7), fill=WHITE)
    img.paste(avatar, (ax, ay), avatar)

    name_font = font(37, bold=True)
    sub_font = font(22)
    draw.text((66, 302), "Sanghyeon Ju", font=name_font, fill=WHITE)
    draw.multiline_text((66, 355), "Materials & Semiconductor\nEngineering Portfolio", font=sub_font, fill=WHITE, spacing=8)

    small = font(18)
    draw.text((66, 520), "jujushmaterial.github.io", font=small, fill="#eaf6fd")

    x = 445
    label_font = font(18, bold=True)
    draw.rounded_rectangle((x, 76, x + 205, 116), radius=10, fill=CHIP_BG, outline=CHIP_BORDER, width=1)
    draw.text((x + 16, 85), "PORTFOLIO", font=label_font, fill=BLUE_DARK)

    title_font = font(42, bold=True)
    draw.multiline_text((x, 142), "Materials & Semiconductor\nEngineering", font=title_font, fill=INK, spacing=2)

    body_font = font(20)
    draw.text((x, 270), "B.S. Student in Materials Science and Engineering", font=body_font, fill=TEXT)
    draw.text((x, 306), "Double Major in Next-Generation Semiconductor Engineering", font=body_font, fill=TEXT)

    school_font = font(19, bold=True)
    draw.text((x, 360), "Soongsil University", font=school_font, fill=BLUE_DARK)

    draw.text((x, 410), "Research Interests", font=font(18, bold=True), fill=MUTED)

    chip_font = font(18, bold=True)

    def chip(px: int, py: int, label: str) -> None:
        box = draw.textbbox((0, 0), label, font=chip_font)
        w = box[2] - box[0] + 30
        h = 42
        draw.rounded_rectangle((px, py, px + w, py + h), radius=11, fill=CHIP_BG, outline=CHIP_BORDER, width=2)
        draw.text((px + 15, py + 8), label, font=chip_font, fill=BLUE_DARK)

    chip(x, 448, "Semiconductor Devices")
    chip(x + 285, 448, "Semiconductor Process Engineering")
    chip(x, 504, "TCAD-Based Device Analysis")
    chip(x + 335, 504, "Materials Characterization")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUTPUT, format="PNG", optimize=True)


def update_cache_buster() -> bool:
    if not INDEX.exists():
        return False
    digest = hashlib.sha256(OUTPUT.read_bytes()).hexdigest()[:12]
    text = INDEX.read_text(encoding="utf-8")
    updated = re.sub(
        r'(https://jujushmaterial\.github\.io/assets/images/og-preview\.png)(?:\?v=[A-Za-z0-9._-]+)?',
        rf'\1?v={digest}',
        text,
    )
    if updated != text:
        INDEX.write_text(updated, encoding="utf-8")
        return True
    return False


if __name__ == "__main__":
    build_card()
    update_cache_buster()
    print(f"Generated {OUTPUT}")
