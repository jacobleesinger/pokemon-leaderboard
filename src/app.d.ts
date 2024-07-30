// See https://kit.svelte.dev/docs/types#app

import type { Session, SupabaseClient, User } from '@supabase/supabase-js';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient;
			db: PostgresJsDatabase;
			safeGetSession: () => Promise<{ session: Session | null; user: User | null }>;
			session: Session | null;
			user: User | null;
		}
		interface PageData {
			session: Session | null;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
