<script lang="ts">
  import Planner from '$lib/components/planner/planner.svelte';
  import Recipes from '$lib/components/planner/recipes.svelte';
</script>

<div class="flex flex-row gap-4">
	<Recipes />
	<main>
		<Planner />
	</main>
</div>
