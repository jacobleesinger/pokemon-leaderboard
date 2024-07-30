<script lang="ts">
	export let data;
	$: ({ runs } = data);

	function convertMilliseconds(ms: number) {
		// Calculate the hours, minutes, seconds, and milliseconds
		let hours = Math.floor(ms / (1000 * 60 * 60));
		let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((ms % (1000 * 60)) / 1000);
		let milliseconds = ms % 1000;

		// Pad the hours, minutes, and seconds with leading zeros if they are less than 10
		let hoursStr = hours.toString();
		let minutesStr = minutes.toString().padStart(2, '0');
		let secondsStr = seconds.toString().padStart(2, '0');
		let millisecondsStr = milliseconds.toString().padStart(3, '0');

		// Return the formatted time string
		return `${hoursStr}:${minutesStr}:${secondsStr}:${millisecondsStr}`;
	}
</script>

<table>
	<thead>
		<tr>
			<th> </th><th>Pokemon</th>
			<th>Real Time</th>
			<th>Game Time</th>
			<th>Level</th>
			<th>Resets</th>
			<th>Player</th>
		</tr>
	</thead>
	<tbody>
		{#each runs as run}
			<tr>
				<td><img src={run.pokemon.spriteUrl} alt={run.pokemon.name} class="w-8 h-8" /></td>
				<td>{run.pokemon.name}</td>
				<td>{convertMilliseconds(run.realTime)}</td>
				<td>{convertMilliseconds(run.gameTime)}</td>
				<td>{run.level}</td>
				<td>{run.resets}</td>
				<td>{run.user.name}</td>
			</tr>
		{/each}
	</tbody>
</table>
