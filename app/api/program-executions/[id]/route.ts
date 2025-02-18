import { checkAuth, checkRole } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { validateApiKey } from "@/middleware/validateApiKey";
import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const allowedRoles: UserRole[] = ["ADMIN", "DC", "PTQ", "UMAR"];

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
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
    const programExecution = await prisma.programExecution.findUnique({
      where: {
        id: params.id,
      },
      include: {
        program: true,
      },
    });

    if (!programExecution) {
      return NextResponse.json(
        {
          success: false,
          message: "Program execution not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Get program execution successfully",
      data: programExecution,
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

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
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
    const programExecution = await prisma.programExecution.update({
      where: {
        id: params.id,
      },
      data: body,
    });

    return NextResponse.json({
      success: true,
      message: "Update program execution successfully",
      data: programExecution,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update program execution",
        error: error.data.message,
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
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
    await prisma.programExecution.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Delete program execution successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete program execution",
        error: error.data.message,
      },
      { status: 500 },
    );
  }
}
