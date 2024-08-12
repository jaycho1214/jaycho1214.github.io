<script lang="ts">
	export let url: string;
	export let category: string;
	export let name: string;
	export let description: string;
</script>

<a class="inline-block group self-start" href={url} target="_blank">
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
