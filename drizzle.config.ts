import { defineConfig } from 'drizzle-kit';
import dotenvx from '@dotenvx/dotenvx';

dotenvx.config();

const { POSTGRES_URL, POSTGRES_PASSWORD } = process.env;

if (!POSTGRES_URL) {
	throw new Error('POSTGRES_URL must be set');
}

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	out: './supabase/migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: POSTGRES_URL!,
		password: POSTGRES_PASSWORD ?? ''
	}
});
