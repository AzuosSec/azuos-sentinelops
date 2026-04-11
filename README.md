# azuos-sentinelops

Plataforma de gestão de incidentes, segurança patrimonial, safety e inspeções operacionais.

## Prévia do site (local)

1. Instale os pacotes npm (sem dependências externas):
   ```bash
   npm install
   ```
2. Rode a prévia:
   ```bash
   npm run dev:host
   ```
3. Abra `http://localhost:4173`.

## Estrutura principal

- `site/index.html`: landing page estática pronta para visualização imediata.
- `src/components/AzuosSecOpsWebpage.jsx`: versão React da landing page (referência de desenvolvimento).
- `DEPLOY.md`: instruções de publicação em Vercel/Netlify.

## Assets

- `public/AZUOS.svg`: logo padrão usada no cabeçalho e hero da landing page.

## Estilo

- Estilo via CSS embutido na página estática em `site/index.html` para evitar dependência de build.
