<script lang="ts">
	import MarkdownIt from 'markdown-it';
	import footnote from 'markdown-it-footnote';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';
	import 'highlight.js/styles/github-dark.css';
	import mk from '@vscode/markdown-it-katex';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import { fade } from 'svelte/transition';

	export let source: {
		text?: string;
		url?: string;
		github?: {
			repo: string;
			folder: string;
		};
	} = {};

	let loading = true;
	let text = '';

	const GITHUB_URL = `https://github.com/${source.github?.repo}/blob/main/${source.github?.folder}`;
	const GITHUB_ASSET_URL = `https://raw.githubusercontent.com/${source.github?.repo}/main`;
	const README_URL = `https://raw.githubusercontent.com/${source.github?.repo}/main/${source.github?.folder}/README.md`;

	onMount(async () => {
		if (source.text == null) {
			const resp = await fetch(source.url != null ? source.url : README_URL);
			if (resp.status !== 200) {
				return;
			}
			text = await resp.text();
		}
		// https://showdownjs.com/docs/available-options/
		const md = new MarkdownIt({
			html: true,
		});
		const html = md.use(footnote).use(mk).render(text);
		document.getElementsByTagName('article')[0].innerHTML = html;
		document.querySelectorAll('a').forEach((block) => {
			if (block.getAttribute('href')?.startsWith('http')) {
				block.setAttribute('target', '_blank');
			}
		});
		document.querySelectorAll('img').forEach((block) => {
			const src = block.getAttribute('src');
			if (src?.startsWith('/')) {
				if (source.github?.repo != null) {
					block.src = GITHUB_ASSET_URL + block.getAttribute('src');
				}
			}
		});
		hljs.highlightAll();
		loading = false;
	});
</script>

{#if loading}
	<div
		class="fixed inset-0 z-40 bg-black"
		out:fade={{ delay: 200, duration: 500 }}
	>
		<div
			class="flex flex-col items-center mx-auto max-w-2xl my-20 px-4 py-5 gap-8"
		>
			<div class="bg-slate-200 w-32 h-3 rounded-full animate-pulse" />
			<div class="bg-slate-200 w-full h-9 rounded-full animate-pulse" />
			<div class="bg-slate-200 w-full aspect-video rounded-lg animate-pulse" />
			<div class="flex flex-col gap-4 w-full">
				<div class="bg-slate-200 w-full h-3 rounded-full animate-pulse" />
				<div class="bg-slate-200 w-full h-3 rounded-full animate-pulse" />
				<div class="bg-slate-200 w-full h-3 rounded-full animate-pulse" />
				<div class="bg-slate-200 w-full h-3 rounded-full animate-pulse" />
				<div class="bg-slate-200 w-1/2 h-3 rounded-full animate-pulse" />
			</div>
		</div>
	</div>
{/if}
<article
	class="prose prose-invert mx-auto max-w-2xl mt-12 mb-20 py-6 px-4"
></article>
{#if source.github?.repo != null}
	<a
		class="fixed right-10 bottom-10 bg-gray-800 p-2 rounded-full transition hover:bg-gray-500 m-auto"
		href={GITHUB_URL}
		target="_blank"
	>
		<GithubIcon size={30} />
	</a>
{/if}

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
	/>
</svelte:head>

<style>
	article {
		scroll-behavior: smooth;
	}
</style>
