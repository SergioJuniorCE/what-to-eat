<script lang="ts">
	import { getAuthContext } from '$lib/pocketbase/auth.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	const auth = getAuthContext();
</script>

<nav class="mb-3 flex items-center justify-center gap-3 border-b-[1px] border-gray-200 py-2">
	<div></div>
	<div>
		<a href="/">Home</a>
		<a href="/recipes">Recipes</a>
		<a href="/fridge">Fridge</a>
	</div>
	<div>
		{#if auth.user}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Profile</DropdownMenu.Item>
						<DropdownMenu.Item>Billing</DropdownMenu.Item>
						<DropdownMenu.Item>Team</DropdownMenu.Item>
						<DropdownMenu.Item>Subscription</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{:else}{/if}
	</div>
</nav>
