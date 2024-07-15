<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { getIsMobile } from '$lib/utils';

	let isMobile = $state(false);

	$effect(() => {
		isMobile = getIsMobile();
	});
</script>

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
