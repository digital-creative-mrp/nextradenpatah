import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }

    const isValidPassword = await bcrypt.compare(password, user.password || "");

    if (!isValidPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        { status: 401 },
      );
    }

    const { password: _, ...userWithoutPassword } = user;

    await prisma.user.update({
      where: { id: user.id },
      data: {
        lastLogin: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "User logged in successfully",
      data: userWithoutPassword,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Login failed",
        error: error.data.message,
      },
      { status: 500 },
    );
  }
}
