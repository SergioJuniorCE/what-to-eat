<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import type { Recipe } from './types';

	import * as Card from '$lib/components/ui/card';

	let {
		items
	}: {
		items: Recipe[];
	} = $props();

	const flipDurationMs = 300;

	function handleDndConsider(e: CustomEvent<DndEvent<Recipe>>) {
		console.log('handleDndConsider', e.detail.items);
		items = e.detail.items;
	}

	function handleDndFinalize(e: CustomEvent<DndEvent<Recipe>>) {
		console.log('handleDndFinalize', e.detail.items);
		items = e.detail.items;
	}
</script>

<section
	class="w-44 flex flex-col gap-3"
	use:dndzone={{ items, flipDurationMs }}
	onconsider={handleDndConsider}
	onfinalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div class="" animate:flip={{ duration: flipDurationMs }}>
			<Card.Root class="h-24">
				<Card.Header>
					<Card.Title>{item.name}</Card.Title>
					<Card.Description>Rating: {item.rating} | Times Done: {item.times_done}</Card.Description>
				</Card.Header>
			</Card.Root>
		</div>
	{/each}
</section>
