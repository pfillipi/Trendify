import { fastify } from fastify

const app = fastify()

app.get('/', () => {
  return 'Hei på deg'
})

app.listen({
  port: 3333,
})