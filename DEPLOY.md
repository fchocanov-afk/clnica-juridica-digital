# Deploy

La web esta preparada para hosting estatico.

## Netlify

1. Sube este proyecto a un repositorio Git.
2. En Netlify, elige `Add new site` -> `Import an existing project`.
3. Conecta el repo.
4. Netlify tomara automaticamente:
   - Build command: `./scripts/build.sh`
   - Publish directory: `dist`

## Vercel

1. Sube este proyecto a un repositorio Git.
2. En Vercel, importa el repo.
3. Vercel usara automaticamente:
   - Build command: `./scripts/build.sh`
   - Output directory: `dist`

## GitHub Pages

1. Ejecuta `./scripts/build.sh`.
2. Publica el contenido de `dist/` en una rama dedicada como `gh-pages`, o usa una accion que suba `dist`.

## Nota

El deploy publica solo:
- `index.html`
- `assets/`
- `pages/`

Los archivos de respaldo en `archived/` no se publican.

