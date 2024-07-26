<script lang="ts">
	import '../../app.css';
	import { type Snippet } from 'svelte';
	import Navbar from './navbar.svelte';
	import { getAuthContext } from '$lib/pocketbase/auth.svelte';

	let { children }: { children: Snippet } = $props();

	const auth = getAuthContext();
</script>

{#if auth.isSynced}
	<header>
		<Navbar />
	</header>
	{@render children()}
{:else}
	<div>Loading...</div>
{/if}
