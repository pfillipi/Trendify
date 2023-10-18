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
  - [TypeScript](https://www.typescriptlang.org/)
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

Når bakenden er satt opp i henhold til trinnene over, kan vi starte frontend. Gå til mappen [`upload-ai-web/`](/upload-ai-web/):

```bash
cd web/
```

Satt opp nødvendige programvarekomponenter:

```bash
pnpm install
```

Kjøre frontend:

- Når [bakenden er i gang](#api---backend), kan du starte frontenden med kommandoen `pnpm run dev`. Applikasjon din vil være tilgjengelig på <http://localhost:5173>.

### Innstillinger for miljøvariabler - [Kun backenden](#api---backend)

- Opprett en fil med navnet `api/.env` og sørg for at den har samme innhold som filen  [`api/.env.example`](./api/.env.example).

```env
DATABASE_URL="file:./dev.db"
OPENAI_API_KEY="<YOUR_OPENAI_KEY>"
```
