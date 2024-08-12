<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import { navigating } from '$app/stores';
	import { isNavOpened } from '$lib/stores/nav-store';
	import '../app.css';

	$: if ($navigating) isNavOpened.set(false);
</script>

<NavBar />
<slot />
<Menu />
