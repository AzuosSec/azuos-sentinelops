# Deploy público da landing page

Este projeto usa Vite + React.

## 1) Vercel (recomendado)

1. Suba o repositório no GitHub.
2. Acesse [https://vercel.com/new](https://vercel.com/new).
3. Selecione o repositório `azuos-sentinelops`.
4. Framework: **Vite** (detectado automaticamente).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Clique em **Deploy**.

Ao final, a Vercel gera uma URL pública.

## 2) Netlify

1. Suba o repositório no GitHub.
2. Acesse [https://app.netlify.com/start](https://app.netlify.com/start).
3. Selecione o repositório.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy.

Ao final, a Netlify gera uma URL pública.

## 3) Visualização local na rede

```bash
npm run dev:host
```

Depois acesse `http://<seu-ip-local>:4173`.
