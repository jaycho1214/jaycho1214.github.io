<script lang="ts">
	import MarkdownIt from 'markdown-it';
	import footnote from 'markdown-it-footnote';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';
	import 'highlight.js/styles/github-dark.css';
	import mk from '@vscode/markdown-it-katex';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import { fade } from 'svelte/transition';

	export let href: string | null = null;
	export let repo: string | null = null;
	export let subfolder: string | null = null;
	let loading = true;

	const GITHUB_URL = `https://github.com/${repo}/blob/main/${subfolder}`;
	const GITHUB_ASSET_URL = `https://raw.githubusercontent.com/${repo}/main`;
	const README_URL = `https://raw.githubusercontent.com/${repo}/main/${subfolder}/README.md`;

	onMount(async () => {
		const resp = await fetch(href != null ? href : README_URL);
		if (resp.status !== 200) {
			return;
		}
		const text = await resp.text();
		// https://showdownjs.com/docs/available-options/
		const md = new MarkdownIt({
			html: true,
		});
		md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
			tokens[idx].attrSet('target', '_blank');
			return self.renderToken(tokens, idx, options);
		};
		const html = md.use(footnote).use(mk).render(text);
		document.getElementsByTagName('article')[0].innerHTML = html;
		document.querySelectorAll('img').forEach((block) => {
			const src = block.getAttribute('src');
			if (src?.startsWith('/')) {
				block.src = GITHUB_ASSET_URL + block.getAttribute('src');
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
{#if repo != null}
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
