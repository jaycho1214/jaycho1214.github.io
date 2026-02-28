<script lang="ts">
	import AnimatedCloseIcon from './icons/AnimatedCloseIcon.svelte';
	import { navStore } from '$lib/stores/nav-store.svelte';
</script>

<nav class="fixed top-0 left-0 right-0 text-white flex h-12 z-50">
	<button
		onclick={() => navStore.toggle()}
		class="self-start p-4"
		aria-label="Menu"
	>
		<AnimatedCloseIcon bind:expanded={navStore.opened} />
	</button>
</nav>
