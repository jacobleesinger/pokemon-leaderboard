import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { usersTable } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const name = formData.get('name');

		if (typeof name !== 'string') {
			throw new Error('name must be a string');
		}

		const {
			data: { user }
		} = await supabase.auth.getUser();

		if (!user) {
			throw new Error('user must be authenticated');
		}

		// create app user
		await db.insert(usersTable).values({
			id: user.id,
			name,
			email: user.email ?? ''
		});

		redirect(303, '/');
	}
};
