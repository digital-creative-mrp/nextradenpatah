// types/next-auth.d.ts
import NextAuth from "next-auth";
import { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface User {
    id: string;
    role: UserRole;
    name?: string | null;
    email?: string | null;
    lastLogin?: Date;
  }

  interface Session {
    user: User & {
      id: string;
      role: UserRole;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
  }
}
