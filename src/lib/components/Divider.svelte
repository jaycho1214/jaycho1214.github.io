<script lang="ts">
	let { title }: { title?: string } = $props();
</script>

<div class="flex flex-row w-full py-4 items-center">
	<div class="h-px flex-1 bg-gray-600"></div>
	{#if title}
		<p class="px-2">{title}</p>
	{/if}
	<div class="h-px flex-1 bg-gray-600"></div>
</div>
