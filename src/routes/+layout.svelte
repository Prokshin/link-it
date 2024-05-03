<script lang="ts">
	import Navbar from '$lib/widgets/navbar/ui/Navbar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Link-it</title>
	<meta name="description" content="Приложение для создания защищённых ссылок" />
</svelte:head>
<div class="container mx-auto px-4">
	<Navbar />
	<slot />
</div>
