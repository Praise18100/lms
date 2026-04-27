"use server";

import { db } from '@/db';
import { instructorTable, studentTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

async function setUserCookie(name: string, role: string) {
  const cookieStore = await cookies();
  cookieStore.set('userInfo', JSON.stringify({ name, role }), {
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

  if (instructor.length > 0 && await bcrypt.compare(password, instructor[0].password)) {
    await setUserCookie(instructor[0].name, instructor[0].role);
    return { ok: true as const, role: instructor[0].role };
  } else if (student.length > 0 && await bcrypt.compare(password, student[0].password)) {
    await setUserCookie(student[0].name, student[0].role);
    return { ok: true as const, role: student[0].role };
  } else {
    return { ok: false as const, message: 'Invalid email or password' };
  }
}

export async function getSessionUser(): Promise<{ name: string; role: string } | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get('userInfo')?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as { name: string; role: string };
  } catch {
    return null;
  }
}

