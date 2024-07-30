import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const pokemonTable = pgTable('pokemon', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	spriteUrl: text('sprite_url').notNull(),
	type1: text('type_1').notNull(),
	type2: text('type_2')
});
