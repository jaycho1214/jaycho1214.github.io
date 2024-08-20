<script lang="ts">
	import DLCard from '$lib/components/DLCard.svelte';
	import { derived, readable, writable } from 'svelte/store';
	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const data = readable([
		{
			href: '/dl/resnet',
			category: 'Convolutional Neural Network',
			title: 'ResNet',
			textColor: '#000',
			tag: 'Paper',
			backgroundStyle:
				'background: linear-gradient(to bottom, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));',
		},
		{
			href: '/dl/xor',
			imgSrc: 'https://i.giphy.com/3og0IC3JCOCPBysB0c.webp',
			category: 'Multi-layer Perceptron',
			title: 'XOR',
			textColor: '#000',
		},
		{
			href: '/dl/dinosaur',
			imgSrc: 'https://i.giphy.com/J2xMuBFMLH0SOYdZP1.webp',
			category: 'Reinforcement Learning',
			title: 'Dinosaur',
			textColor: '#000',
			tag: 'RL',
		},
	]);

	const filter = writable({ tag: 'All' });

	const filtered = derived([data, filter], ([$data, $filter]) => {
		if ($filter.tag === 'All') return $data;
		return $data.filter((item) => item.tag === $filter.tag);
	});

	const onFilterClick = (tag: string) => () => {
		filter.set({ tag });
	};

	const [send, receive] = crossfade({
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
			};
		},
	});
</script>

<div class="flex flex-col justify-center py-12 px-6">
	<div class="flex flex-row gap-4 mt-4 mb-8">
		{#each ['All', ...$data
				.map(({ tag }) => tag)
				.filter((tag) => tag != null)] as tag}
			<button
				class="rounded-full border px-4 py-1 border-px border-gray-700 text-gray-400 font-light text-sm hover:bg-gray-700 transition"
				on:click={onFilterClick(tag)}
				class:active={$filter.tag === tag}
				>{tag}
			</button>
		{/each}
	</div>
	<div
		class="max-w-screen-xl grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 transition"
	>
		{#each $filtered as item}
			<div
				class="card"
				in:receive={{ key: item.href }}
				out:send={{ key: item.href }}
			>
				<DLCard {...item} />
			</div>
		{/each}
	</div>
</div>

<style>
	.active {
		color: #fff;
		border-color: #fff;
	}

	.card {
		aspect-ratio: 1 / 1.618;
	}
</style>
