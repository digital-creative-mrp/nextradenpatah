import { checkAuth, checkRole } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { validateApiKey } from "@/middleware/validateApiKey";
import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const allowedRoles: UserRole[] = ["ADMIN", "DC", "PTQ", "UMAR"];

export async function DELETE(req: NextRequest) {
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
    const { ids } = await req.json();

    await prisma.program.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Delete many programs successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete programs",
        error: error.data.message,
      },
      { status: 500 },
    );
  }
}
