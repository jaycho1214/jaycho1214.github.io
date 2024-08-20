<script lang="ts">
	export let imgSrc: string | null = null;
	export let category: string = '';
	export let title: string = '';
	export let href: string = '';
	export let className: string = '';
	export let backgroundStyle: string | null = null;
</script>

<a
	{href}
	class={`relative text-white rounded inline-block overflow-hidden ${className} w-full h-full`}
>
	{#if backgroundStyle}
		<div id="background" style={backgroundStyle} class="absolute inset-0" />
	{/if}
	{#if imgSrc}
		<img
			src={imgSrc}
			alt="Thumbnail"
			class="absolute object-cover w-full h-full z-0 pointer-events-none"
		/>
	{/if}
	<div
		id="content"
		class="absolute h-full p-4 flex flex-col justify-between z-10 pointer-events-none"
	>
		<p class="font-bold text-sm">{category}</p>
		<p class="text-xl">{title}</p>
	</div>
</a>

<style>
	a:hover img,
	a:hover #background {
		filter: blur(4px) brightness(40%);
		transition: all;
		transition-duration: 400ms;
	}
	a:hover {
		color: white;
		transition: all;
		transition-duration: 400ms;
	}
	a {
		color: black;
		transform: scale(100%);
		transition: all;
		transition-duration: 400ms;
	}
</style>
