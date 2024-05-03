<script lang="ts">
	import Navbar from '$lib/widgets/navbar/ui/Navbar.svelte';
	import '../app.css';
</script>

<div class="container mx-auto px-4">
	<Navbar />
	<slot />
</div>
