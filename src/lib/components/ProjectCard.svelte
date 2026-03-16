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
	{#if date}
		<p class="text-[10px] text-gray-400 mb-1">{date}</p>
	{/if}
	<div class="flex items-baseline gap-2 flex-wrap">
		<h1 class="text-3xl font-light group-hover:text-gray-500 transition">
			{name}
		</h1>
		{#each categories as category}
			<span
				class="text-[8px] font-medium uppercase tracking-wider px-1.5 py-px border border-gray-500 text-gray-300 group-hover:border-gray-600 group-hover:text-gray-500 transition"
			>
				{category}
			</span>
		{/each}
	</div>
	<p class="text-xs text-gray-300 group-hover:text-gray-500 transition mt-1">
		{description}
	</p>
</a>
