# Trendify

Application that allows you to upload videos and, through AI, automatically create eye-catching titles and descriptions with good indexing.

## Directories and their technologies

- [`api`](/api/) - Backend.
  - [fastify](https://fastify.dev/)
  - [prisma](https://www.prisma.io/)
  - [openai](https://openai.com/)
- [`web`](/web/) - Frontend.
  - [Vite](https://vitejs.dev/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [Vercel AI SDK](https://github.com/vercel/ai)

## Install and run the project

### Global Dependencies

You need to have a main dependency installed:

- Node.js LTS v16 (or any higher version)

Do you use `nvm`? Then you can run `nvm install` in the project folder to install and use the most appropriate version of Node.js.

### Get the repository

```bash
git clone https://github.com/dkshs/nlw-ai.git
```

### API - Backend

To start the application we must start with the backend. Enter the backend folder:

```bash
cd upload-ai-server/
```

Install dependencies:

```bash
pnpm install
```

Run backend:

- Configure [environment variables](#environment-variables---only-backend) for the backend.
- With the variables configured, run `pnpm run dev`. Your application will start at <http://localhost:3333>.

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
