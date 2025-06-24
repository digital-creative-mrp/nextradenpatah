import { checkAuth, checkRole } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { validateApiKey } from "@/middleware/validateApiKey";
import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const allowedRoles: UserRole[] = ["ADMIN", "DC", "PTQ", "UMAR"];

export async function GET(req: NextRequest) {
  const isValidateApiKey = await validateApiKey(req);
  if (!isValidateApiKey) {
    return NextResponse.json({ error: "Invalid API key", status: 401 });
  }

  const session = await checkAuth();
  if ("error" in session) {
    return NextResponse.json(session, { status: session.status });
  }

  const roleCheck = checkRole(session.user.role, allowedRoles);
  if (roleCheck) {
    return NextResponse.json(roleCheck, { status: roleCheck.status });
  }

  try {
    const programExecutions = await prisma.programExecution.findMany({
      include: {
        program: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Get program executions successfully",
      data: programExecutions,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to get program execution",
        error: error.data.message,
      },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const isValidateApiKey = await validateApiKey(req);
  if (!isValidateApiKey) {
    return NextResponse.json({ error: "Invalid API key", status: 401 });
  }

  const session = await checkAuth();
  if ("error" in session) {
    return NextResponse.json(session, { status: session.status });
  }

  const roleCheck = checkRole(session.user.role, allowedRoles);
  if (roleCheck) {
    return NextResponse.json(roleCheck, { status: roleCheck.status });
  }

  try {
    const body = await req.json();
    const programExecution = await prisma.programExecution.create({
      data: body,
    });

    return NextResponse.json({
      success: true,
      message: "Create program execution successfully",
      data: programExecution,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create program execution",
        error: error.data.message,
      },
      { status: 500 },
    );
  }
}
