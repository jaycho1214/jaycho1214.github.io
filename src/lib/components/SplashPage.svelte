<script lang="ts">
	import { onMount } from 'svelte';

	let text = '';
	let showSplash: boolean | null = null;
	let doneAnimation = false;

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
		showSplash = sessionStorage.getItem('splashShown') === 'false'; // State variable to manage the splash visibility
		// text = '';
		// showSplash = false;
		if (!showSplash) {
			await new Promise((resolve) => setTimeout(resolve, 100));
			await textAnimation();
			await new Promise((resolve) => setTimeout(resolve, 1000));
			sessionStorage.setItem('splashShown', 'false');
		}
		doneAnimation = true;
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
	<div class="fixed inset-0 bg-black pointer-events-none cursor-default z-50" />
{/if}

<svelte:window
	on:wheel|nonpassive={(event) => {
		if (!showSplash && !doneAnimation) {
			event.preventDefault();
		}
	}}
/>

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
