import { hashApiKey } from "@/lib/apikey";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function validateApiKey(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key");
  if (!process.env.API_KEY || apiKey !== process.env.API_KEY) return false;

  const hashedApiKey = hashApiKey(apiKey);

  const storedApiKey = await prisma.apiKey.findFirst({
    where: {
      key: hashedApiKey,
      isActive: true,
      OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
    },
  });

  if (!storedApiKey) return false;

  await prisma.apiKey.update({
    where: { id: storedApiKey.id },
    data: { lastUsedAt: new Date() },
  });

  return true;
}
