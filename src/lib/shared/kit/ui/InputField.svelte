<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	interface $$Props extends HTMLInputAttributes {
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
	<input
		{...$$restProps}
		{name}
		id={name}
		class="input input-bordered"
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
