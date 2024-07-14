<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Board from './board.svelte';
	import Planner from './planner.svelte';

	/**
	 * Plan types
	 * - Week | Weeks
	 */

	let plan = $state([{}]);
</script>

<header>
	<nav class="mb-3 flex items-center justify-center gap-3 border-b-[1px] border-gray-200 py-2">
		<a href="/">Home</a>
		<a href="/recipes">Recipes</a>
		<a href="/fridge">Fridge</a>
	</nav>
</header>
<div class="flex w-[calc(100vh-100px)] flex-row bg-blue-200">
	<div class="flex-grow">
		<p>asd</p>
	</div>
</div>
<div class="flex flex-row gap-4">
	
	<aside class="min-w-32">
		<div class="flex items-center gap-3">
			<h3>Fridge</h3>
			<Button size="icon">+</Button>
		</div>
		<ul class="flex flex-col gap-2">
			<li>Apples</li>
			<li>Bananas</li>
			<li>Oranges</li>
			<li>Tomatoes</li>
			<li>Potatoes</li>
		</ul>
	</aside>
	<main>
		<p>Weekly meal plan</p>

		<Planner />

		<Board />
	</main>
</div>
