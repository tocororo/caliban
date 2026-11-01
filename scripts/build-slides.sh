#!/usr/bin/env bash
# Build all Slidev presentations to public/slides/<slug>/
# Usage: bash scripts/build-slides.sh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SLIDES_SRC="$ROOT_DIR/slides"
PUBLIC_OUT="$ROOT_DIR/public/slides"
BASE_PREFIX="/caliban/slides"

mkdir -p "$PUBLIC_OUT"

shopt -s nullglob
for dir in "$SLIDES_SRC"/*/; do
  slug=$(basename "$dir")
  slides_md="$dir/slides.md"

  if [[ ! -f "$slides_md" ]]; then
    echo "⚠️  No slides.md in $dir, skipping"
    continue
  fi

  echo "📦 Building presentation: $slug"
  npx slidev build "$slides_md" \
    --base "$BASE_PREFIX/$slug/" \
    --out "$PUBLIC_OUT/$slug" \
    --router-mode hash

  # Slidev deja las rutas relativas (./img/...) tal cual en los slides.
  # Copiamos la carpeta de imágenes junto a la salida para servirlas.
  if [[ -d "$dir/img" ]]; then
    mkdir -p "$PUBLIC_OUT/$slug/img"
    cp -R "$dir/img/." "$PUBLIC_OUT/$slug/img/"
  fi

  echo "✅ Built: $slug → public/slides/$slug"
done

echo "🎉 All presentations built successfully"
