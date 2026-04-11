# azuos-sentinelops

Plataforma de gestão de incidentes, segurança patrimonial, safety e inspeções operacionais.

## Prévia do site (local)

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra a URL exibida no terminal (por padrão `http://localhost:5173`).

### Prévia sem dependências (recomendado neste ambiente)

Use `npm run dev:host` para subir uma prévia estática em `http://localhost:4173` sem instalar pacotes npm.


## Estrutura principal

- `src/components/AzuosSecOpsWebpage.jsx`: landing page completa.
- `src/App.jsx`: entry da aplicação.
- `src/main.jsx`: bootstrap React + mount no DOM.


## Assets

- `public/AZUOS.svg`: logo padrão usada no cabeçalho e hero da landing page.


## Link público

Para publicar e gerar um link público (Vercel/Netlify), veja `DEPLOY.md`.


## Estilo

- Tailwind configurado localmente via `tailwind.config.js` + `postcss.config.js` + `src/index.css` (sem dependência do CDN em runtime).
