import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull().unique(),
  inviteCode: varchar({ length: 255 }),
  role: varchar({ length: 50 }).notNull(),
  registeredAt: timestamp( { withTimezone: true }).notNull(),
});

export const sessionsTable = pgTable("sessions", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer().notNull().references(() => usersTable.id),
    token: varchar({ length: 255 }).notNull().unique(),
    expiresAt: timestamp({ withTimezone: true }).notNull(),
    createdAt: timestamp({ withTimezone: true }).notNull(),
});