<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';

	let loading = false;
	let showError = false;
	function setError() {
		showError = true;
		setTimeout(() => (showError = false), 5000);
	}
</script>

<div class="card shrink-0 w-full mt-5 max-w-sm shadow-2xl bg-base-100" in:fly|global={{ x: 100 }}>
	<form
		class="card-body"
		method="post"
		use:enhance={() => {
			loading = true;
			showError = false;
			return async ({ update, result }) => {
				await update();

				if (result.status !== 200) {
					setError();
				}

				loading = false;
			};
		}}
	>
		<div class="form-control">
			<label class="label" for="password">
				<span class="label-text">Пароль</span>
			</label>
			<input
				type="password"
				class="input input-bordered"
				name="password"
				id="password"
				disabled={loading}
			/>
		</div>
		<div class="form-control mt-6">
			<button class="btn btn-primary" disabled={loading}>
				{#if loading}
					<span class="loading loading-spinner loading-md"></span>
				{/if}
				Получить доступ
			</button>
		</div>
	</form>
</div>

{#if showError}
	<div class="fixed bottom-10 left-10 right-10" transition:slide>
		<div role="alert" class="alert alert-error">
			<span>При отправке формы произошла ошибка</span>
		</div>
	</div>
{/if}
