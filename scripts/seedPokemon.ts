// import { db } from '../src/lib/server/db';
import supabase from '../src/lib/server/supabase';
// import { pokemonTable } from '../src/lib/server/db/schema';
import pokemon from '../data/pokemon.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mons: any = Object.values(pokemon);

console.log(supabase);

// console.log(mons[0]);
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// await db.insert(pokemonTable).values(mons as any);

for (const mon of mons) {
	// console.log(mon);
	const result = await supabase.from('pokemon').insert(mon);
	console.log(result);
}
