"use server";

import { db } from '@/db';
import { instructorTable, studentTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

type SessionUser = {
  name: string;
  role: string;
  email: string;
};

type SessionCookiePayload = {
  name: string;
  role: string;
  email?: string;
  userId?: number;
};

async function setUserCookie(user: SessionCookiePayload) {
  const cookieStore = await cookies();
  cookieStore.set('userInfo', JSON.stringify(user), {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  });
}

export async function loginUser(email: string, password: string) {
  if (!email || !password) {
    return { ok: false as const, message: "Email and password are required" };
  }

  const instructor = await db.select().from(instructorTable).where(eq(instructorTable.email, email));
  const student = await db.select().from(studentTable).where(eq(studentTable.email, email));

  const instructorUser = instructor.at(0);
  if (instructorUser && await bcrypt.compare(password, instructorUser.password)) {
    await setUserCookie({
      userId: instructorUser.id,
      name: instructorUser.name,
      role: instructorUser.role,
      email: instructorUser.email,
    });
    return { ok: true as const, role: instructorUser.role };
  }

  const studentUser = student.at(0);
  if (studentUser && await bcrypt.compare(password, studentUser.password)) {
    await setUserCookie({
      userId: studentUser.id,
      name: studentUser.name,
      role: studentUser.role,
      email: studentUser.email,
    });
    return { ok: true as const, role: studentUser.role };
  }

  return { ok: false as const, message: 'Invalid email or password' };
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get('userInfo')?.value;
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as SessionCookiePayload;
    const role = parsed?.role;

    if (!role) {
      return null;
    }

    if (typeof parsed.userId === "number") {
      if (role === "instructor") {
        const instructor = await db
          .select({ name: instructorTable.name, role: instructorTable.role, email: instructorTable.email })
          .from(instructorTable)
          .where(eq(instructorTable.id, parsed.userId));

        if (instructor.length > 0) {
          return instructor[0];
        }
      }

      if (role === "student") {
        const student = await db
          .select({ name: studentTable.name, role: studentTable.role, email: studentTable.email })
          .from(studentTable)
          .where(eq(studentTable.id, parsed.userId));

        if (student.length > 0) {
          return student[0];
        }
      }
    }

    // Backward compatibility for older cookie payloads without userId.
    if (parsed.email) {
      if (role === "instructor") {
        const instructor = await db
          .select({ name: instructorTable.name, role: instructorTable.role, email: instructorTable.email })
          .from(instructorTable)
          .where(eq(instructorTable.email, parsed.email));

        if (instructor.length > 0) {
          return instructor[0];
        }
      }

      if (role === "student") {
        const student = await db
          .select({ name: studentTable.name, role: studentTable.role, email: studentTable.email })
          .from(studentTable)
          .where(eq(studentTable.email, parsed.email));

        if (student.length > 0) {
          return student[0];
        }
      }
    }

    if (!parsed?.name) {
      return null;
    }

    return {
      name: parsed.name,
      role,
      email: parsed.email ?? "",
    };
  } catch {
    return null;
  }
}

