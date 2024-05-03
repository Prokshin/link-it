<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	interface $$Props extends HTMLTextareaAttributes {
		name: string;
		label: string;
	}
	export let value: any = undefined;
	export let name: string;
	export let label: string;
</script>

<div class="form-control">
	<label class="label" for={name}>
		<span class="label-text">{label}</span>
	</label>
	<textarea
		{...$$restProps}
		{name}
		id={name}
		class="textarea textarea-bordered"
		bind:value
		on:blur
		on:change
		on:click
		on:contextmenu
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:paste
		on:input
	/>
</div>
