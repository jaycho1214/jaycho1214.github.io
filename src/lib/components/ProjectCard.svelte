<script lang="ts">
	let {
		url,
		category,
		name,
		description,
	}: {
		url: string;
		category: string;
		name: string;
		description: string;
	} = $props();
</script>

<a
	class="inline-block group self-start"
	class:pointer-events-none={!url}
	href={url || undefined}
	target="_blank"
>
	<p class="text-xs text-gray-300 group-hover:text-gray-500 transition">
		{category}
	</p>
	<h1 class="text-3xl font-light group-hover:text-gray-500 transition">
		{name}
	</h1>
	<p class="text-xs text-gray-300 group-hover:text-gray-500 transition">
		{description}
	</p>
</a>
