<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<div class="flex flex-row w-full py-4 items-center">
	<div class="h-px flex-1 bg-gray-600" />
	{#if title}
		<p class="px-2">{title}</p>
	{/if}
	<div class="h-px flex-1 bg-gray-600" />
</div>
