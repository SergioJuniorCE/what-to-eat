<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { pb } from '$lib/pocketbase';
  import { getIsMobile } from '$lib/utils';
  import AddRecipeDialog from './add-recipe-dialog.svelte';
  import type { Recipe } from './types';

  let isMobile = $state(false);

  let recipes = $state<Recipe[]>([]);

  async function fetchRecipes() {
    const recipes = (await pb.collection('recipes').getFullList()) as unknown as Recipe[];
    return recipes;
  }

  $effect(() => {
    isMobile = getIsMobile();

    fetchRecipes().then((data) => {
      recipes = data;
      console.log(data);
    });
  });
</script>

<aside class="min-w-30 flex flex-col gap-3">
  <div class="flex flex-col items-center gap-3">
    <h3>Recipes</h3>
    <AddRecipeDialog />
    <div class="flex flex-row gap-3">
      <Button class="h-8 w-full">🍳</Button>
      <Button class="h-8 w-full">🥗</Button>
      <Button class="h-8 w-full">🍔</Button>
    </div>
  </div>
  <ul class="flex flex-col gap-2">
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
    <li>Tomatoes</li>
    <li>Potatoes</li>
  </ul>
</aside>
