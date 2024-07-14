<script lang='ts'>
	import { getIsMobile } from "$lib/utils";

  let isMobile = $state(false)

  $effect(() => {
    isMobile = getIsMobile()
  })
</script>