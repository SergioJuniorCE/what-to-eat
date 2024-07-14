<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	
	
	let columnItems = $state([
		{
			id: 1,
			name: 'TODO',
			items: [
				{ id: 41, name: 'item41' },
				{ id: 42, name: 'item42' },
				{ id: 43, name: 'item43' },
				{ id: 44, name: 'item44' },
				{ id: 45, name: 'item45' },
				{ id: 46, name: 'item46' },
				{ id: 47, name: 'item47' },
				{ id: 48, name: 'item48' },
				{ id: 49, name: 'item49' }
			]
		},
		{
			id: 2,
			name: 'DOING',
			items: []
		},
		{
			id: 3,
			name: 'DONE',
			items: []
		}
	]);
	const flipDurationMs = 200;
	function handleDndConsiderColumns(e: any) {
		columnItems = e.detail.items;
	}
	function handleDndFinalizeColumns(e: any) {
		columnItems = e.detail.items;
	}
	function handleDndConsiderCards(cid: number, e: any) {
		const colIdx = columnItems.findIndex((c) => c.id === cid);
		columnItems[colIdx].items = e.detail.items;
		columnItems = [...columnItems];
	}
	function handleDndFinalizeCards(cid: number, e: any) {
		const colIdx = columnItems.findIndex((c) => c.id === cid);
		columnItems[colIdx].items = e.detail.items;
		columnItems = [...columnItems];
	}
	function handleClick(e: any) {
		alert('dragabble elements are still clickable :)');
	}
</script>

<header>
	<nav class="mb-3 flex items-center justify-center gap-3 border-b-[1px] border-gray-200 py-2">
		<a href="/">Home</a>
		<a href="/recipes">Recipes</a>
		<a href="/fridge">Fridge</a>
	</nav>
</header>
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
		<section
			class="board"
			use:dndzone={{ items: columnItems, flipDurationMs, type: 'columns' }}
			on:consider={handleDndConsiderColumns}
			on:finalize={handleDndFinalizeColumns}
		>
			{#each columnItems as column (column.id)}
				<div class="column" animate:flip={{ duration: flipDurationMs }}>
					<div class="column-title">{column.name}</div>
					<div
						class="column-content"
						use:dndzone={{ items: column.items, flipDurationMs }}
						on:consider={(e) => handleDndConsiderCards(column.id, e)}
						on:finalize={(e) => handleDndFinalizeCards(column.id, e)}
					>
						{#each column.items as item (item.id)}
							<div class="card" animate:flip={{ duration: flipDurationMs }} on:click={handleClick}>
								{item.name}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</section>
	</main>
</div>
