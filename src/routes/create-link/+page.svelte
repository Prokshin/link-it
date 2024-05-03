<script lang="ts">
	import CreateLink from '$lib/feature/create-link/ui/CreateLink.svelte';
	import { flyAnimateConfig } from '$lib/shared/animation/model/config';
	import { fly } from 'svelte/transition';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Создание защищённой ссылки</title>
</svelte:head>
<div class="flex mt-10 justify-center" in:fly={flyAnimateConfig}>
	<CreateLink {form} />
</div>
