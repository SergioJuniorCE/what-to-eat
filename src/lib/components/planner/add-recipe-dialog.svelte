<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog';
  import { cn } from '$lib/utils';
  import { Plus } from 'lucide-svelte';
  import { Button, buttonVariants } from '../ui/button';
  import { Label } from '../ui/label';
  import { Input } from '../ui/input';
  import { pb } from '$lib/pocketbase';
  import { toast } from 'svelte-sonner';
  import type { RecipesRecord } from '$lib/pocketbase/pocketbase-types';
  import { getAuthContext } from '$lib/pocketbase/auth.svelte';

  const authContext = getAuthContext();

  let name = $state('');

  async function addRecipe() {
    try {
      const newRecipe: RecipesRecord = {
        name,
        rating: 0
      };
      toast.success('Recipe added successfully');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  }
</script>

<Dialog.Root>
  <Dialog.Trigger class={cn([buttonVariants({ variant: 'default' }), 'h-8 w-full'])}
    ><Plus /></Dialog.Trigger
  >
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Add a recipe to your cookbook</Dialog.Title>
      <Dialog.Description class="flex flex-col gap-3">
        <div class="flex flex-col gap-2">
          <Label>Name</Label>
          <Input placeholder="Sopitas con huevo" bind:value={name} />
        </div>
        <!-- <div class="flex flex-col gap-2">
          <Label>Ingredients</Label>
          <Input />
        </div> -->
        <Button class="h-8 w-full" on:click={addRecipe}>Add</Button>
      </Dialog.Description>
    </Dialog.Header>
  </Dialog.Content>
</Dialog.Root>
