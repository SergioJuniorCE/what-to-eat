<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import type { WeekPlan } from './types';
	import VerticalList from './vertical-list.svelte';
	import { Button } from '$lib/components/ui/button';
	import Plus from 'lucide-svelte/icons/plus';

	function getRandomNumber() {
		return Math.floor(Math.random() * 100000);
	}

	let weekPlans = $state<WeekPlan[]>(
		Array.from({ length: 4 }, (_, i) => ({
			id: getRandomNumber(),
			name: `Week ${i + 1}`,
			days: Array.from({ length: 7 }, (_, i) => ({
				id: getRandomNumber(),
				name: `Day ${i + 1}`,
				items: Array.from({ length: 7 }, (_, i) => ({
					id: getRandomNumber(),
					name: `Item ${i + 1}`,
					ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
					rating: 4,
					times_done: 0
				}))
			}))
		}))
	);
</script>

<Tabs.Root value={weekPlans[0].id.toString()} class="w-[90vw]">
	<div class="flex flex-row gap-3">
		<Tabs.List>
			{#each weekPlans as plan}
				<Tabs.Trigger value={plan.id.toString()}>{plan.name}</Tabs.Trigger>
			{/each}
		</Tabs.List>
		<Button variant="outline" size="icon">
			<Plus />
		</Button>
	</div>
	{#each weekPlans as weekPlan}
		<Tabs.Content value={weekPlan.id.toString()}>
			<Card.Root>
				<Card.Header class="px-6 pb-2 pt-6">
					<Card.Title>{weekPlan.name}</Card.Title>
					<Card.Description>Card Description</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="flex flex-row gap-2">
						{#each weekPlan.days as dayPlan}
							<div class="flex flex-col items-center justify-center gap-2">
								<p>{dayPlan.name}</p>
								<VerticalList items={dayPlan.items} />
							</div>
						{/each}
					</div>
				</Card.Content>
				<Card.Footer>
					<p>Card Footer</p>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	{/each}
</Tabs.Root>
