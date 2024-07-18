<script lang="ts">
    import { z } from 'zod'
	import { getAuthContext } from '$lib/pocketbase/auth.svelte';
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';
    
    const auth = getAuthContext();

    let email = $state('')
    let password = $state('')

    async function handleSubmit() {
        z.object({
            email: z.string().email(),
            password: z.string().min(8)
        }).parse({ email, password })

        await auth.signInWithEmailAndPassword(email, password)

        toast.success('Successfully registered!')
        goto('/')
    }
</script>