<script lang="ts">
	import type { ActionData } from '../../../../routes/create-link/$types';
	import CreateLinkForm from './CreateLinkForm.svelte';
	import CreateLinkSuccess from './CreateLinkSuccess.svelte';
	export let form: ActionData;
</script>

{#if !form}
	<CreateLinkForm />
{:else}
	<CreateLinkSuccess hashedUrl={form.hashedUrl} />
{/if}
