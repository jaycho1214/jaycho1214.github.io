<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import { navigating } from '$app/stores';
	import { isNavOpened } from '$lib/stores/nav-store';
	import '../app.css';

	$: if ($navigating) isNavOpened.set(false);
	const DEBUG = process.env.NODE_ENV === 'DEBUG';
</script>

<NavBar />
<slot />
<Menu />

<svelte:head>
	{#if !DEBUG}
		<!-- Google tag (gtag.js) -->
		<script
			async
			src="https://www.googletagmanager.com/gtag/js?id=G-J3472EMQPD"
		></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-J3472EMQPD');
		</script>
	{/if}
</svelte:head>
