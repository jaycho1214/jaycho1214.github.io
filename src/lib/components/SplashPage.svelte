<script lang="ts">
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';

	let showSplash: boolean | null = $state(false);
	let doneAnimation = $state(false);
	let showName = $state(false);
	let exit = $state(false);

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	onMount(async () => {
		showSplash = sessionStorage.getItem('splashShown') === 'false';
		if (!showSplash) {
			await delay(200);
			showName = true;
			await delay(1800);
			exit = true;
			await delay(800);
			sessionStorage.setItem('splashShown', 'false');
		}
		doneAnimation = true;
	});

	$effect(() => {
		return on(
			window,
			'wheel',
			(event) => {
				if (!showSplash && !doneAnimation) {
					event.preventDefault();
				}
			},
			{ passive: false },
		);
	});
</script>

{#if showSplash === false}
	<section
		id="splash"
		class="fixed inset-0 bg-black cursor-default z-50"
		class:exit
		class:pointer-events-none={doneAnimation}
	>
		<div class="flex w-full h-full justify-center items-center">
			<h1 class="name text-white" class:name-show={showName}>
				Jaeyoung Cho
			</h1>
		</div>
	</section>
{:else if showSplash === null}
	<div
		class="fixed inset-0 bg-black pointer-events-none cursor-default z-50"
	></div>
{/if}

<style>
	#splash {
		z-index: 9999;
		transition:
			opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
			filter 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.name {
		font-size: clamp(1.25rem, 3vw, 1.5rem);
		font-weight: 500;
		letter-spacing: 0;
		opacity: 0;
		filter: blur(12px);
		transition:
			opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
			filter 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.name-show {
		opacity: 1;
		filter: blur(0px);
	}

	.exit {
		opacity: 0;
		filter: blur(12px);
	}
</style>
