<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import type { WeekPlan } from './types';
	import VerticalList from './vertical-list.svelte';

	let plans = $state<WeekPlan[]>([
		{
			id: 0,
			name: 'Week 1',
			items: [
				{
					id: 0,
					name: 'Recipe 1',
					ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
					rating: 4,
					times_done: 0
				},
				{
					id: 1,
					name: 'Recipe 2',
					ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
					rating: 4,
					times_done: 0
				}
			]
		},
		{
			id: 1,
			name: 'Week 2',
			items: [
				{
					id: 0,
					name: 'Recipe 1',
					ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
					rating: 4,
					times_done: 0
				},
				{
					id: 1,
					name: 'Recipe 2',
					ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
					rating: 4,
					times_done: 0
				}
			]
		}
	]);
</script>

<Tabs.Root value={plans[0].id.toString()} class="w-[90vw]">
	<Tabs.List>
		{#each plans as plan}
			<Tabs.Trigger value={plan.id.toString()}>{plan.name}</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each plans as plan}
		<Tabs.Content value={plan.id.toString()}>
			<Card.Root class="">
				<Card.Header>
					<Card.Title>{plan.name}</Card.Title>
					<!-- <Card.Description>Card Description</Card.Description> -->
				</Card.Header>
				<Card.Content>
					<VerticalList items={plan.items} />
				</Card.Content>
				<Card.Footer>
					<p>Card Footer</p>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	{/each}
</Tabs.Root>
