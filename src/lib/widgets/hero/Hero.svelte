<script lang="ts">
	import { flyAnimateConfig } from '$lib/shared/animation/model/config';
	import { fly } from 'svelte/transition';
</script>

<div class="hero min-h-96" in:fly={flyAnimateConfig}>
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Link-it</h1>
			<p class="py-6">Приложение для создания защищённых ссылок.</p>
			<a class="btn btn-primary" href="/create-link">Создать ссылку</a>
		</div>
	</div>
</div>
