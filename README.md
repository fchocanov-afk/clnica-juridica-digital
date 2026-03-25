# Clinica Juridica

Sitio web estatico reconstruido a partir del archivo historico de la Clinica Juridica, adaptado a su etapa independiente.

## Estructura

- `index.html`: home
- `assets/`: estilos, JS e imagenes
- `pages/`: paginas internas y articulos
- `scripts/build.sh`: genera `dist/`
- `netlify.toml`: configuracion para Netlify
- `vercel.json`: configuracion para Vercel

## Desarrollo local

Puedes abrir `index.html` directamente en el navegador o servir la carpeta con un servidor estatico.

## Build

```sh
./scripts/build.sh
```

La salida queda en `dist/`.

## Deploy rapido

- Netlify: importa el repo y publica `dist/`
- Vercel: importa el repo y usa `dist/`
- GitHub Pages: publica el contenido de `dist/`

Mas detalle en [DEPLOY.md](./DEPLOY.md).
