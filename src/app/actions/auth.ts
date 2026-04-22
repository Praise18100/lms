"use server";

import { RegisterSchema, FormState } from '@/app/lib/defination';
import bcrypt from 'bcrypt';
import { db } from '@/db';
import { usersTable } from '@/db/schema';

export async function signup(state: FormState, formData: FormData) {
  const name = formData.get("fullname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;        // was "value" in student form
  const inviteCode = formData.get("inviteCode") as string | null;

  const validatedFields = RegisterSchema.safeParse({
    name,
    email,
    password,
    role,
    inviteCode,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await db
      .insert(usersTable)
      .values({
        name,
        email,
        password: hashedPassword,
        role,
        inviteCode: inviteCode || undefined,
        registeredAt: new Date(),
      })
      .returning({ id: usersTable.id });

    const user = data[0];

    if (!user) {
      return { message: "An error occurred while creating your account." };
    }

    return {
      message: "Account created successfully",
      userId: user.id,
    };

  } catch (error: unknown) {
    // Catch duplicate email (Neon/Postgres unique constraint)
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code: string }).code === "23505"
    ) {
      return { message: "An account with this email already exists." };
    }
    console.error(error);
    return { message: "Something went wrong. Please try again." };
  }
}