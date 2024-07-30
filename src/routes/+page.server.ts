// import { runsTable } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const runs = await db.query.runsTable.findMany({
		with: {
			pokemon: true,
			user: true
		}
	});
	console.log(runs);

	return { runs };
};
