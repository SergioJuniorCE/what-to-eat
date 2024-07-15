<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Fridge from './fridge.svelte';
	import Planner from './planner.svelte';
</script>

<div class="flex flex-row gap-4">
	<Fridge />
	<main>
		<Planner />
	</main>
</div>
