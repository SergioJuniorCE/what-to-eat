<script lang="ts">
	import '../../app.css';
	import type { Snippet } from 'svelte';
	import Navbar from './navbar.svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<header>
	<Navbar />
</header>
{@render children()}
