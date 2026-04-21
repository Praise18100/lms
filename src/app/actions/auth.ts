"use server";

import { RegisterSchema, FormState } from '@/app/lib/defination';
import bcrypt from 'bcrypt';
import { db } from '@/db';
import { usersTable } from '@/db/schema';

export async function signup(state: FormState, formData: FormData) {

  // 1. Get form values
  const name = formData.get("fullname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("value") as string;
  const inviteCode = formData.get("inviteCode") as string | null;

  // 2. Validate BEFORE doing anything else
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
    // 3. Hash password AFTER validation
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Insert into database
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
      return {
        message: "An error occurred while creating your account.",
      };
    }

    // 5. Success response
    return {
      message: "Account created successfully",
      userId: user.id,
    };

  } catch (error) {
    console.error(error);

    return {
      message: "Something went wrong. Please try again.",
    };
  }
}