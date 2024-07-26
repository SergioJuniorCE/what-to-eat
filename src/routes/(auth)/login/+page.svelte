<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { getAuthContext } from '$lib/pocketbase/auth.svelte';
	import { toast } from 'svelte-sonner';

	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	let data: PageData = $props();

	const authContext = getAuthContext();

	let email = $state('');
	let password = $state('');

	$effect(() => {
		if (authContext && authContext.user) {
			goto('/');
		}
	});

	const handleLoginWithEmailAndPassword = async () => {
		if (!email || !password) {
			toast.error('Please fill in all fields');
			return;
		}

		if (!email.includes('@')) {
			toast.error('Please enter a valid email');
			return;
		}

		if (!password) {
			toast.error('Please enter a password');
			return;
		}

		email = email.toLowerCase();

		try {
			await authContext.signInWithEmailAndPassword(email, password);
			toast.success('Successfully logged in!');
		} catch (error) {
			console.error(error);
			toast.error('Invalid email or password');
		}
	};
</script>

<div class="flex h-screen items-center justify-center">
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Login</Card.Title>
			<Card.Description>Enter your email below to login to your account</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" required bind:value={email} />
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">Password</Label>
						<a href="##" class="ml-auto inline-block text-sm underline"> Forgot your password? </a>
					</div>
					<Input id="password" type="password" required bind:value={password} />
				</div>
				<Button type="submit" class="w-full" on:click={handleLoginWithEmailAndPassword}>Login</Button>
				<Button variant="outline" class="w-full">Login with Google</Button>
			</div>
			<div class="mt-4 text-center text-sm">
				Don&apos;t have an account?
				<a href="/register" class="underline">Sign up</a>
			</div>
		</Card.Content>
	</Card.Root>
</div>
