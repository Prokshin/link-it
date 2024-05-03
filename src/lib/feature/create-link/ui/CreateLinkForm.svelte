<script>
	import { enhance } from '$app/forms';
</script>

<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
	<form class="card-body" method="post" use:enhance>
		<div class="form-control">
			<label class="label" for="title">
				<span class="label-text">Название</span>
			</label>
			<input
				name="title"
				type="text"
				placeholder="Тайная ссылка"
				class="input input-bordered"
				required
			/>
		</div>
		<div class="form-control">
			<label class="label" for="url">
				<span class="label-text">Ссылка</span>
			</label>
			<input
				type="url"
				name="url"
				placeholder="https://svelte.dev"
				class="input input-bordered"
				required
			/>
		</div>
		<div class="form-control">
			<label class="label" for="description">
				<span class="label-text">Описание ссылки</span>
			</label>
			<textarea class="textarea textarea-bordered" name="description" />
		</div>
		<div class="form-control">
			<label class="label" for="password">
				<span class="label-text">Секретный пароль</span>
			</label>
			<input type="password" id="password" class="input input-bordered" name="password" />
		</div>
		<div class="form-control mt-6">
			<button class="btn btn-primary">Создать ссылку</button>
		</div>
	</form>
</div>
