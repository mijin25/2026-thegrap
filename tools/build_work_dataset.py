import csv
import json
import re
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import urlretrieve


ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "레퍼런스 (수정 X)" / "더그랩 현재 웹사이트 CMS 데이터" / "thegrap - Works - 67722c5aae210395472679f4.csv"
OUT_JSON = ROOT / "assets" / "data" / "works.json"
OUT_IMG_DIR = ROOT / "assets" / "work" / "thumbs"


def normalize_year(raw: str) -> str:
    if not raw:
        return ""
    m = re.search(r"\d{4}", raw)
    return m.group(0) if m else raw.strip()


def slugify(text: str) -> str:
    base = text.strip().lower()
    base = re.sub(r"[^a-z0-9]+", "-", base)
    base = re.sub(r"-+", "-", base).strip("-")
    return base or "work-item"


def infer_category(row: dict) -> str:
    hay = " ".join(
        [
            row.get("What We Did", ""),
            row.get("Industry", ""),
            row.get("Summary", ""),
            row.get("Name", ""),
        ]
    ).lower()

    rules = [
        ("experience", ["metaverse", "experience", "exhibition", "tour", "kiosk"]),
        ("ecommerce", ["shopping mall", "shop", "shopping", "commerce", "cafe 24"]),
        ("app", ["app", "iot", "mobile"]),
        ("website", ["website", "web", "platform", "admin", "dashboard"]),
        ("campaign", ["campaign", "promotion", "event", "micro website"]),
        ("branding", ["branding", "identity", "graphic assets", "album artwork", "package"]),
        ("live", ["performance", "concert", "show", "k-pop"]),
    ]
    for category, keywords in rules:
        if any(k in hay for k in keywords):
            return category
    return "website"


def download_thumbnail(url: str, slug: str) -> str:
    if not url:
        return ""
    parsed = urlparse(url)
    suffix = Path(parsed.path).suffix or ".webp"
    filename = f"{slug}{suffix}"
    OUT_IMG_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_IMG_DIR / filename
    if not out_path.exists():
        urlretrieve(url, out_path)
    return f"assets/work/thumbs/{filename}".replace("\\", "/")


def main() -> None:
    if not CSV_PATH.exists():
        raise FileNotFoundError(f"CSV not found: {CSV_PATH}")

    works = []
    with CSV_PATH.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row.get("Archived", "").lower() == "true":
                continue
            if row.get("Draft", "").lower() == "true":
                continue

            name = (row.get("Name") or "").strip()
            if not name:
                continue

            slug = row.get("Slug") or slugify(name)
            image_url = (row.get("Thumbnail") or "").strip()
            local_image = download_thumbnail(image_url, slug)

            works.append(
                {
                    "title": name,
                    "slug": slug,
                    "year": normalize_year(row.get("Year", "")),
                    "tag": (row.get("Industry") or row.get("What We Did") or "").strip(),
                    "category": infer_category(row),
                    "image": local_image or image_url,
                }
            )

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(works, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved {len(works)} items -> {OUT_JSON}")


if __name__ == "__main__":
    main()
