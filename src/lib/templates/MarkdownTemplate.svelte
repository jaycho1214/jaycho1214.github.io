<script lang="ts">
	import markdownit from 'markdown-it';
	import footnote from 'markdown-it-footnote';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';
	import 'highlight.js/styles/github-dark.css';
	import mk from '@vscode/markdown-it-katex';

	export let href: string;

	onMount(async () => {
		const resp = await fetch(href);
		if (resp.status !== 200) {
			return;
		}
		const text = await resp.text();
		// https://showdownjs.com/docs/available-options/
		const md = markdownit({
			html: true,
		});
		md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
			tokens[idx].attrSet('target', '_blank');

			return self.renderToken(tokens, idx, options);
		};
		const html = md.use(footnote).use(mk).render(text);
		document.getElementsByTagName('article')[0].innerHTML = html;
		hljs.highlightAll();
	});
</script>

<article
	class="prose prose-invert mx-auto max-w-2xl mt-12 mb-20 py-6 px-4"
></article>

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
