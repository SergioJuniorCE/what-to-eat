<script lang="ts">
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

<section
	class="mb-10 h-[90vh] w-full p-2"
	use:dndzone={{ items: columnItems, flipDurationMs, type: 'columns' }}
	onconsider={handleDndConsiderColumns}
	onfinalize={handleDndFinalizeColumns}
>
	{#each columnItems as column (column.id)}
		<div class="column" animate:flip={{ duration: flipDurationMs }}>
			<div class="column-title">{column.name}</div>
			<div
				class="column-content"
				use:dndzone={{ items: column.items, flipDurationMs }}
				onconsider={(e) => handleDndConsiderCards(column.id, e)}
				onfinalize={(e) => handleDndFinalizeCards(column.id, e)}
			>
				{#each column.items as item (item.id)}
					<div
						tabindex={item.id}
						class="card"
						role="button"
						animate:flip={{ duration: flipDurationMs }}
						onclick={handleClick}
						onkeypress={handleClick}
					>
						{item.name}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>

<style>
	.column {
		height: 100%;
		width: 250px;
		padding: 0.5em;
		margin: 1em;
		float: left;
		border: 1px solid #333333;
		/*Notice we make sure this container doesn't scroll so that the title stays on top and the dndzone inside is scrollable*/
		overflow-y: hidden;
	}
	.column-content {
		height: 100%;
		/* Notice that the scroll container needs to be the dndzone if you want dragging near the edge to trigger scrolling */
		overflow-y: scroll;
	}
	.column-title {
		margin-bottom: 1em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card {
		height: 15%;
		width: 100%;
		margin: 0.4em 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #dddddd;
		border: 1px solid #333333;
	}
</style>
