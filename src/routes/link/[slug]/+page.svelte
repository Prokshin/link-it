<script lang="ts">
	import ShowLink from '$lib/feature/show-link/ui/ShowLink.svelte';
	import type { ActionData } from './$types';
	import LinkDetail from '$lib/feature/show-link/ui/LinkDetail.svelte';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Просмотр защищённой ссылки</title>
</svelte:head>
{#if form?.isSuccess}
	<div class="flex justify-center mt-5">
		<LinkDetail data={form.data} />
	</div>
{:else}
	<div class="flex justify-center">
		<ShowLink />
	</div>
{/if}
