import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post("/videso/:videoId/transcription", async (req, res) => {
    const paramsSchema = z.object({});

    const videoId = req.params.videoId;
  });
}
