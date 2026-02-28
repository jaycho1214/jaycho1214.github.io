<script lang="ts">
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';

	let showSplash: boolean | null = $state(false);
	let doneAnimation = $state(false);
	let text = $state('');
	const targetText = 'Jaeyoung Cho';
	function textAnimation(idx: number = 0) {
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				text += targetText[idx];
				if (targetText[idx] === ' ') {
					idx += 1;
					text += targetText[idx];
				}
				if (idx < targetText.length - 1) {
					textAnimation(idx + 1).then(resolve);
				} else {
					resolve();
				}
			}, 100);
		});
	}

	onMount(async () => {
		showSplash = sessionStorage.getItem('splashShown') === 'false';
		if (!showSplash) {
			await new Promise((resolve) => setTimeout(resolve, 100));
			await textAnimation();
			await new Promise((resolve) => setTimeout(resolve, 1000));
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
		class="fixed inset-0 bg-black pointer-events-none cursor-default z-50"
		class:slide-up={doneAnimation}
	>
		<div class="flex w-full h-full justify-center items-center">
			<p class="text-white text-2xl">{text}</p>
			<p class="blink text-white text-2xl">_</p>
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
	}

	.blink {
		animation: blinker 1s linear infinite;
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}

	.slide-up {
		animation: slideUp 1s forwards;
	}

	@keyframes slideUp {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-100%);
		}
	}
</style>
