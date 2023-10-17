# Trendify

Dette er en nettbasert app som starter ved å konvertere videoen til lyd, deretter transkriberer den til tekst. Ved hjelp av kunstig intelligens kan den også gi forslag til den optimale tittelen, beskrivelsen og hashtagene for videoen din.

## Teknologier

- [`api`](/api/) - Backend.
  - [Fastify](https://fastify.dev/)
  - [Prisma](https://www.prisma.io/)
  - [OpenAI](https://openai.com/)
  - [Ffmpeg](https://ffmpeg.org)
  - [Axios](https://axios-http.com/)
  - [Zod](https://zod.dev/)
 
- [`web`](/web/) - Frontend.
  - [React](https://react.dev/) 
  - [Vite](https://vitejs.dev/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [Vercel AI SDK](https://github.com/vercel/ai/)
  - [Shadcn/ui](https://ui.shadcn.com)

## Sett opp og kjør prosjektet

### Nødvendige globalavhengigheter

Du må ha hovedavhengigheten installert:
- Node.js LTS v16 (eller nyere versjon)

Hvis du bruker `nvm`, kan du deretter kjøre `nvm install` i prosjektmappen for å installere og bruke den mest egnede versjonen av Node.js.

### Hent depotet:

```bash
git clone https://github.com/dkshs/nlw-ai.git
```

### API - Backend

For å begynne med applikasjonen, må vi først starte på baksiden. Gå inn i backend-mappen:

```bash
cd upload-ai-server/
```

Nødvendige installasjoner:

```bash
pnpm install
```

Kjør backend:

- Sett opp [miljøvariabler](#environment-variables---only-backend) for backenden.
- Når variablene er konfigurert, kjør `pnpm run dev`. Applikasjon din starter på <http://localhost:3333>.

### Web - Frontend

With the Backend configured following the steps above, we can run the Frontend. Go to the [`upload-ai-web/`](/upload-ai-web/) folder:

```bash
cd web/
```

Install dependencies:

```bash
pnpm install
```

Run frontend:

- With the [backend running](#api---backend), start the frontend with `pnpm run dev`. Your application will start at <http://localhost:5173>.

### Environment variables - [Only Backend](#api---backend)

- Create a `api/.env` file similar to [`api/.env.example`](./api/.env.example).

```env
DATABASE_URL="file:./dev.db"
OPENAI_API_KEY="<YOUR_OPENAI_KEY>"
```
