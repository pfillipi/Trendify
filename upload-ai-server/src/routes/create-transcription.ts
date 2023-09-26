import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post("/videso/:videoId/transcription", async (req, res) => {
    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    });

    const videoId = paramsSchema.parse(req.params);
  });
}
