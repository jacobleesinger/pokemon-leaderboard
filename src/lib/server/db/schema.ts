import { integer, pgTable, text, uuid, pgSchema } from 'drizzle-orm/pg-core';

export const pokemonTable = pgTable('pokemon', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	spriteUrl: text('sprite_url').notNull(),
	type1: text('type_1').notNull(),
	type2: text('type_2')
});

export const authSchema = pgSchema('auth');

export const authUsersTable = authSchema.table('users', {
	id: uuid('id').primaryKey()
});

export const usersTable = pgTable('users', {
	id: uuid('id')
		.primaryKey()
		.references(() => authUsersTable.id),
	email: text('email').unique().notNull(),
	name: text('name').notNull()
});
