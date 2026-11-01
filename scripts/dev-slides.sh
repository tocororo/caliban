#!/usr/bin/env bash
# Serve a single Slidev presentation in hot-reload mode.
# Usage: npm run slides:dev -- <slug>
# Example: npm run slides:dev -- 001-la-jungla

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
slug="${1:-}"

if [[ -z "$slug" ]]; then
  echo "Uso: npm run slides:dev -- <slug>"
  echo "Ejemplo: npm run slides:dev -- 001-la-jungla"
  echo ""
  echo "Presentaciones disponibles:"
  for dir in "$ROOT_DIR"/slides/*/; do
    [[ -f "$dir/slides.md" ]] && echo "  - $(basename "$dir")"
  done
  exit 1
fi

entry="$ROOT_DIR/slides/$slug/slides.md"
if [[ ! -f "$entry" ]]; then
  echo "❌ No existe la presentación: slides/$slug/slides.md"
  exit 1
fi

exec npx slidev "$entry"
