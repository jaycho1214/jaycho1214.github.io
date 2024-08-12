<script lang="ts">
	import AnimatedCloseIcon from './icons/AnimatedCloseIcon.svelte';
	import { isNavOpened } from '$lib/stores/nav-store';
</script>

<nav class="fixed top-0 left-0 right-0 text-white flex h-12 z-50">
	<button on:click={() => isNavOpened.update((v) => !v)} class="self-start p-4">
		<AnimatedCloseIcon bind:expanded={$isNavOpened} />
	</button>
</nav>
