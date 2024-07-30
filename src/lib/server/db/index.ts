import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { POSTGRES_URL } from '$env/static/private';

if (!POSTGRES_URL) {
	throw new Error('POSTGRES_URL must be set');
}

const client = postgres(POSTGRES_URL);
export const db = drizzle(client);
