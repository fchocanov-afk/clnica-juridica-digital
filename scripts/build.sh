#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

cp "$ROOT_DIR/index.html" "$DIST_DIR/index.html"
cp -R "$ROOT_DIR/assets" "$DIST_DIR/assets"
cp -R "$ROOT_DIR/pages" "$DIST_DIR/pages"

echo "Build listo en $DIST_DIR"
