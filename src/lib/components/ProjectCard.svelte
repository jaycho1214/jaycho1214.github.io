<script lang="ts">
	let {
		url,
		categories,
		name,
		description,
		date,
	}: {
		url: string;
		categories: string[];
		name: string;
		description: string;
		date?: string;
	} = $props();
</script>

<a
	class="inline-block group self-start"
	class:pointer-events-none={!url}
	href={url || undefined}
	target={url?.startsWith('/') ? undefined : '_blank'}
>
	<div class="flex items-center gap-2 mb-1">
		{#each categories as category}
			<span class="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 border border-gray-500 text-gray-300 group-hover:border-gray-600 group-hover:text-gray-500 transition">
				{category}
			</span>
		{/each}
	</div>
	<h1 class="text-3xl font-light group-hover:text-gray-500 transition">
		{name}
	</h1>
	<div class="flex items-center gap-2">
		<p class="text-xs text-gray-300 group-hover:text-gray-500 transition">
			{description}
		</p>
		{#if date}
			<span class="text-xs text-gray-400 whitespace-nowrap">{date}</span>
		{/if}
	</div>
</a>
