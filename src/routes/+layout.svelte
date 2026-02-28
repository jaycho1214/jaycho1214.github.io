<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import { navigating } from '$app/stores';
	import { navStore } from '$lib/stores/nav-store.svelte';
	import '../app.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	$effect(() => {
		if ($navigating) navStore.close();
	});

	const DEBUG = process.env.NODE_ENV === 'DEBUG';
</script>

<NavBar />
{@render children()}
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
