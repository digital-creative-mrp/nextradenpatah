import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User, UserRole } from "@prisma/client";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

export async function checkAuth(): Promise<
  Session | { error: string; status: number }
> {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return {
      error: "Unauthorized",
      status: 401,
    };
  }

  return session;
}

export function checkRole(
  userRole: UserRole,
  allowedRoles: UserRole[],
): { error: string; status: number } | null {
  if (!allowedRoles.includes(userRole)) {
    return {
      error: "Forbidden",
      status: 403,
    };
  }

  return null;
}
