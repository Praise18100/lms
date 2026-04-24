import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { db } from '@/db'
import { sessionsTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from "bcrypt";

 
export async function createSession(id: number) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
 
  // 1. Create a session in the database
  const token = await bcrypt.hash(JSON.stringify({ sessionId: Math.random().toString(), expiresAt }), 10)
  const data = await db
    .insert(sessionsTable)
    .values({
      userId: id,
      token,
      expiresAt,
      createdAt: new Date(),
    })
    // Return the session ID
    .returning({ id: sessionsTable.id })
    .execute()
  const sessionId = data[0].id
 
  // 2. Encrypt the session ID
  const session = await bcrypt.hash(JSON.stringify({ sessionId, expiresAt }), 10)
 
  // 3. Store the session in cookies for optimistic auth checks
  const cookieStore = await cookies()
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  await db.delete(sessionsTable).where(eq(sessionsTable.token, cookieStore.get('session')?.value || '')).execute()
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}

export { bcrypt }
