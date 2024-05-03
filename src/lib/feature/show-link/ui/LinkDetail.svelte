<script lang="ts">
	import { flyAnimateConfig } from '$lib/shared/animation/model/config';
	import { fly } from 'svelte/transition';
	import type { Link } from '$lib/entities/link';

	export let data: Link;
</script>

<div class="card shrink-0 w-full mt-5 max-w-lg shadow-2xl bg-base-100" in:fly={flyAnimateConfig}>
	<div class="card-body">
		<h1 class="card-title font-bold text-4xl">{data.title}</h1>
		<p class="text-sm">{Intl.DateTimeFormat('ru').format(data.created_at)}</p>
		<p class="pt-3 pb-6">
			{data.description}
		</p>
		<div>
			Ссылка: <a href={data.url} class="link link-primary">{data.url}</a>
		</div>
	</div>
</div>
