import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data/pokemon.json');

const pokemon = {};

for (let i = 1; i <= 151; i++) {
	const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
	const data = await result.json();

	pokemon[data.name] = {
		id: data.id,
		name: data.name,
		sprite_url: data.sprites.front_default,
		type_1: data.types[0].type.name
	};

	if (data.types.length > 1) {
		pokemon[data.name].type_2 = data.types[1].type.name;
	}
}

fs.writeFileSync(filePath, JSON.stringify(pokemon));
