<script lang="ts">
	import { Link, SquarePen } from 'lucide-svelte';
</script>

<div class="navbar items-center">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/"><Link />Link-It</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 flex items-center">
			<li><a href="/create-link" class="btn"><SquarePen /> Создать ссылку</a></li>
		</ul>
	</div>
</div>
