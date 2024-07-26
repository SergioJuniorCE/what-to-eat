<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
	import { setAuthContext } from '$lib/pocketbase/auth.svelte';
	// import type { LayoutData } from './$types';

	// export let data: LayoutData;

	const auth = setAuthContext();
</script>

<Toaster />

<slot />
