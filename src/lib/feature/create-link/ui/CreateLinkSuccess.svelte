<script lang="ts">
	import { browser } from '$app/environment';
	export let hashedUrl: string | undefined;

	$: link = browser ? `${window.location.origin}/link/${hashedUrl}` : '';
	let error = '';
	async function copy() {
		error = '';
		try {
			await navigator.clipboard.writeText(link);
		} catch (e) {
			error = 'Не удалось скопировать текст';
		}
	}
</script>

<div class="hero min-h-96">
	<div class="hero-content w-full">
		<div class="w-full lg:w-6/12">
			<h1 class="text-3xl font-bold">Ссылка успешно создана</h1>
			<div class="my-6">
				<textarea
					on:click={copy}
					class="textarea textarea-bordered w-full resize-none hover:resize"
					readonly
					value={link}
				/>
			</div>
			<button on:click={copy} class="btn btn-primary">Копировать</button>
			{#if error}
				<div role="alert" class="alert alert-error">
					<span>{error}</span>
				</div>
			{/if}
		</div>
	</div>
</div>
