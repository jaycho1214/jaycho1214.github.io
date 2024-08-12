<script lang="ts">
	import showdown from 'showdown';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';
	import 'highlight.js/styles/github-dark.css';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';

	export let repo = '';
	export let subfolder = '';

	const GITHUB_URL = `https://github.com/${repo}/blob/main/${subfolder}`;
	const README_URL = `https://raw.githubusercontent.com/${repo}/main/${subfolder}/README.md`;

	onMount(async () => {
		// https://showdownjs.com/docs/available-options/
		const converter = new showdown.Converter({ openLinksInNewWindow: true });
		const resp = await fetch(README_URL);
		if (resp.status !== 200) {
			return;
		}
		const text = await resp.text();
		const html = converter.makeHtml(text);
		document.getElementsByTagName('article')[0].innerHTML = html;
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightElement(block as HTMLElement);
		});
	});
</script>

<article
	class="prose prose-invert mx-auto max-w-2xl mt-12 py-12 px-4"
></article>
<a
	class="fixed right-10 bottom-10 bg-gray-800 p-2 rounded-full transition hover:bg-gray-500 m-auto"
	href={GITHUB_URL}
>
	<GithubIcon size={30} />
</a>

<style>
</style>
