#!/usr/bin/env bash
# Export a single Slidev presentation (PDF by default).
# Usage: npm run slides:export -- <slug> [pdf|png|pptx|md]
# Example: npm run slides:export -- 001-la-jungla pdf

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
slug="${1:-}"
format="${2:-pdf}"

if [[ -z "$slug" ]]; then
  echo "Uso: npm run slides:export -- <slug> [pdf|png|pptx|md]"
  echo "Ejemplo: npm run slides:export -- 001-la-jungla pdf"
  exit 1
fi

entry="$ROOT_DIR/slides/$slug/slides.md"
if [[ ! -f "$entry" ]]; then
  echo "❌ No existe la presentación: slides/$slug/slides.md"
  exit 1
fi

mkdir -p "$ROOT_DIR/slides/$slug/exports"
exec npx slidev export "$entry" --format "$format" --output "$ROOT_DIR/slides/$slug/exports"
