# Deploy público da landing page

A publicação pode ser feita como site estático com o conteúdo gerado em `dist/`.

## Gerar artefato

```bash
npm install
npm run build
```

## Vercel

- Framework preset: **Other**
- Build command: `npm run build`
- Output directory: `dist`

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
