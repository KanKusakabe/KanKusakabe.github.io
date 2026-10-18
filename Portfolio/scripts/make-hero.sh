#!/bin/zsh
# make-hero.sh — build the header photos in public/image/hero/ and public/hero-photos.json.
#
# usage (from anywhere):  Portfolio/scripts/make-hero.sh [id ...]
#   id ...     photos to build, e.g. kan02 kan03 kan06 (default: the ids already in public/hero-photos.json)
#   HERO_SRC   folder with the source photos (default: public/face)
#
# For each id, the source folder must contain:
#   <id>.jpg / .png            the original photo
#   arrange/<id>_cut.png       the person cut out by hand (same canvas size as the photo)
# The script writes WebP (1200 / 2000px) plus JPEG / PNG fallbacks (1200px) to public/image/hero/,
# and rewrites public/hero-photos.json with the measured face / hair positions, in the order given.
#
# Needs: swiftc (Xcode), cwebp (brew install webp), node
set -euo pipefail
cd "${0:A:h}/.."  # the Portfolio folder

src=${HERO_SRC:-public/face}
out=public/image/hero
ids=("$@")
if (( ${#ids} == 0 )); then
  ids=(${(f)"$(node -e 'for (const p of require("./public/hero-photos.json")) console.log(p.id)')"})
fi

tmp=$(mktemp -d)
trap 'rm -rf "${tmp:?}"' EXIT
swiftc -O -swift-version 5 scripts/hero-web.swift -o "$tmp/hero-web"
mkdir -p "$out"

meta=()
for id in $ids; do
  photo=( $src/$id.(jpg|jpeg|png|JPG|JPEG|PNG)(N) )
  cut=$src/arrange/${id}_cut.png
  (( ${#photo} )) || { echo "missing original photo: $src/$id.jpg or .png" >&2; exit 1 }
  [[ -f $cut ]] || { echo "missing cutout: $cut" >&2; exit 1 }

  meta+=("$("$tmp/hero-web" "$photo[1]" "$cut" "$tmp" "$id")")
  for w in 1200 2000; do
    cwebp -quiet -q 78 -m 6 "$tmp/$id-bg-$w.png" -o "$out/$id-bg-$w.webp"
    cwebp -quiet -q 80 -alpha_q 100 -exact -m 6 "$tmp/$id-cut-$w.png" -o "$out/$id-cut-$w.webp"
  done
  # fallbacks for browsers without WebP
  cp "$tmp/$id-bg-1200.jpg" "$out/$id-bg-1200.jpg"
  cp "$tmp/$id-cut-1200.png" "$out/$id-cut-1200.png"
  echo "built $id"
done

# public/hero-photos.json: the candidates Hero.jsx picks from (one is chosen at random per visit)
node -e '
  const rows = process.argv.slice(1).map((line) => {
    const m = JSON.parse(line);
    return `  { "id": "${m.id}", "aspect": ${m.aspect}, "fx": ${m.fx}, "hair": ${m.hair} }`;
  });
  require("fs").writeFileSync("public/hero-photos.json", `[\n${rows.join(",\n")}\n]\n`);
' "${meta[@]}"
echo "wrote public/hero-photos.json (${#ids} photos)"
