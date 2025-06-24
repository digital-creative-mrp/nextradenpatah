import { generatePrefixedApiKey, hashApiKey } from "@/lib/apikey";
import { checkAuth, checkRole } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const allowedRoles: UserRole[] = ["ADMIN"];

export async function GET(req: NextRequest) {
  const session = await checkAuth();
  if ("error" in session) {
    return NextResponse.json(session, { status: session.status });
  }

  const roleCheck = checkRole(session.user.role, allowedRoles);
  if (roleCheck) {
    return NextResponse.json(roleCheck, { status: roleCheck.status });
  }

  try {
    const apiKeys = await prisma.apiKey.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
        expiresAt: true,
        lastUsedAt: true,
        isActive: true,
        createdBy: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Get API keys successfully",
      data: apiKeys,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to get API keys",
        error: error.data.message,
      },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await checkAuth();
  if ("error" in session) {
    return NextResponse.json(session, { status: session.status });
  }

  const roleCheck = checkRole(session.user.role, allowedRoles);
  if (roleCheck) {
    return NextResponse.json(roleCheck, { status: roleCheck.status });
  }

  try {
    const { name, expiresAt } = await req.json();

    const newApiKey = generatePrefixedApiKey();
    const hashedApiKey = hashApiKey(newApiKey);

    const apiKey = await prisma.apiKey.create({
      data: {
        name,
        key: hashedApiKey,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
        createdBy: session.user.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Create API key successfully",
      data: {
        ...apiKey,
        key: newApiKey,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create API key",
        error: error.data.message,
      },
      { status: 500 },
    );
  }
}
