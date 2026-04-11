# Deploy público da landing page

Este projeto usa Vite + React. A forma mais simples de gerar um link público é publicar em uma dessas opções:

## 1) Vercel (recomendado)

1. Suba o repositório no GitHub.
2. Acesse [https://vercel.com/new](https://vercel.com/new).
3. Selecione o repositório `azuos-sentinelops`.
4. Framework: **Vite** (detectado automaticamente).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Clique em **Deploy**.

Ao final, a Vercel gera uma URL pública (ex.: `https://azuos-sentinelops.vercel.app`).

## 2) Netlify

1. Suba o repositório no GitHub.
2. Acesse [https://app.netlify.com/start](https://app.netlify.com/start).
3. Selecione o repositório.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy.

Ao final, a Netlify gera uma URL pública (ex.: `https://seu-site.netlify.app`).

## 3) Visualização local na rede

Para abrir em outros dispositivos da mesma rede local:

```bash
npm run dev:host
```

Depois use o link de **Network** mostrado no terminal (ex.: `http://192.168.0.15:4173`).
