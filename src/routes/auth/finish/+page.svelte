<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<form method="post" use:enhance>
		<h2>Choose a Username</h2>
		<input class="input input-bordered" type="text" name="name" />

		<button class="btn btn-primary" type="submit">Continue</button>
	</form>
</main>
