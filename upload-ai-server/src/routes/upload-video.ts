import { FastifyInstance } from "fastify";
import { fastifyMultipart } from "@fastify/multipart";
import { prisma } from "../lib/prisma";

export async function uploadVideoRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {});

  app.post("/videos", async () => {});
}
