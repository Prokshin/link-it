<script lang="ts">
	import {InputField, TextareaField} from '$lib/shared/kit/ui/';
	import { enhance } from '$app/forms';
</script>

<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
	<form class="card-body" method="post" use:enhance>
		<InputField name="title" label="Название" type="text" placeholder="Тайная ссылка" required />
		<InputField name="url" label="Ссылка" type="url" placeholder="https://svelte.dev" required />
		<TextareaField name="description" label="Описание" placeholder="Тайное описание" required/>
		<InputField name="password" label="Секретный пароль" type="password" placeholder="Пароль" required />

		<div class="form-control mt-6">
			<button class="btn btn-primary">Создать ссылку</button>
		</div>
	</form>
</div>
