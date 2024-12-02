<script>
	import { fade } from 'svelte/transition';
	import { isNavOpened } from '$lib/stores/nav-store';
</script>

{#if $isNavOpened}
	<div
		class="fixed inset-0 bg-black z-40 opacity-90"
		transition:fade={{ duration: 300 }}
	></div>
	<div
		class="fixed inset-0 text-gray-400 font-light bg-blue p-4 text-3xl mt-12 z-50"
		transition:fade={{ duration: 300 }}
	>
		<ul class="flex flex-col gap-6">
			<li class="hover:font-bold hover:text-white transition-all">
				<a href="/">Jaeyoung Cho</a>
			</li>
			<li class="hover:font-bold hover:text-white transition-all">
				<a href="/dl">Deep Learning</a>
			</li>
		</ul>
		<p class="text-sm mt-6">John 3:16</p>
	</div>
{/if}
