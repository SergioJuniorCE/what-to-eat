<script lang="ts">
  import { z } from 'zod';
  import { getAuthContext } from '$lib/pocketbase/auth.svelte';
  import { goto } from '$app/navigation';
  import { toast } from 'svelte-sonner';

  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import LoadingSpinner from '$lib/components/ui/loading-spinner';

  const auth = getAuthContext();

  let email = $state('');
  let password = $state('');
  let passwordConfirm = $state('');
  let firstName = $state('');
  let lastName = $state('');

  let isPending = $state(false);

  async function handleRegisterWithEmailAndPassword() {
    try {
      isPending = true;
      if (!email || !password) {
        toast.error('Please fill in all fields');
        isPending = false;
        return;
      }

      if (!email.includes('@')) {
        toast.error('Please enter a valid email');
        isPending = false;
        return;
      }

      if (!password) {
        toast.error('Please enter a password');
        isPending = false;
        return;
      }

      if (password !== passwordConfirm) {
        toast.error('Passwords do not match');
        isPending = false;
        return;
      }

      email = email.toLowerCase();

      await auth.signUpWithEmailAndPassword({
        email,
        password,
        passwordConfirm: passwordConfirm,
        firstName,
        lastName
      });
      toast.success('Successfully registered!');
      isPending = false;
      goto('/');
    } catch (error) {
      console.error(error);
      toast.error('Invalid email or password');
      isPending = false;
    }
    isPending = false;
  }
</script>

<div class="flex h-screen items-center justify-center">
  <Card.Root class="mx-auto max-w-sm">
    <Card.Header>
      <Card.Title class="text-xl">Sign Up</Card.Title>
      <Card.Description>Enter your information to create an account</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-2">
            <Label for="first-name">First name</Label>
            <Input id="first-name" placeholder="Alex" required bind:value={firstName} />
          </div>
          <div class="grid gap-2">
            <Label for="last-name">Last name</Label>
            <Input id="last-name" placeholder="Castro" required bind:value={lastName} />
          </div>
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required bind:value={email} />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" bind:value={password} />
        </div>
        <div class="grid gap-2">
          <Label for="verify-password">Verify password</Label>
          <Input id="verify-password" type="password" bind:value={passwordConfirm} />
        </div>
        <Button type="submit" class="w-full" onclick={handleRegisterWithEmailAndPassword}>
          {#if !isPending}
            Register
          {:else}
            <LoadingSpinner />
          {/if}
        </Button>
        <Button variant="outline" class="w-full">Sign up with GitHub</Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <a href="##" class="underline"> Sign in </a>
      </div>
    </Card.Content>
  </Card.Root>
</div>
