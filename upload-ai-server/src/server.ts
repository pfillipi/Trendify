import { fastify } from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify();

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server kjører!");
  });
