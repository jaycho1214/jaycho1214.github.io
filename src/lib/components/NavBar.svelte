<script lang="ts">
	import AnimatedCloseIcon from './icons/AnimatedCloseIcon.svelte';
	import { navStore } from '$lib/stores/nav-store.svelte';
</script>

<nav class="fixed top-0 left-0 right-0 text-white flex items-center h-12 z-50 pointer-events-none">
	<button
		onclick={() => navStore.toggle()}
		class="flex items-center justify-center w-12 h-12 shrink-0 pointer-events-auto"
		aria-label="Menu"
	>
		<AnimatedCloseIcon bind:expanded={navStore.opened} />
	</button>
</nav>
