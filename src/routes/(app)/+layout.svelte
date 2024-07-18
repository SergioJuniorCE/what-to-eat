<script lang="ts">
	import '../../app.css';
	import { onMount, type Snippet } from 'svelte';
	import Navbar from './navbar.svelte';
	import { setAuthContext } from '$lib/pocketbase/auth.svelte';
	import { Toaster } from 'svelte-sonner';

	let {
		children
	}: {
		children: Snippet;
	} = $props();

	const auth = setAuthContext();

	$effect(() => {
		console.log('user', auth.user);
	});
</script>

<Toaster />

{#if auth.isSynced}
	<header>
		<Navbar />
	</header>
	{@render children()}
{:else}
	<div>Loading...</div>
{/if}
