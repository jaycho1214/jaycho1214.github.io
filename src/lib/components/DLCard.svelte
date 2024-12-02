<script lang="ts">
	let {
		imgSrc,
		category,
		title,
		href,
		className,
		backgroundStyle,
	}: {
		imgSrc?: string | null;
		category: string;
		title: string;
		href: string;
		className?: string;
		backgroundStyle?: string | null;
	} = $props();
</script>

<a
	{href}
	class={`relative text-white rounded inline-block overflow-hidden ${className} w-full h-full`}
>
	{#if backgroundStyle}
		<div id="background" style={backgroundStyle} class="absolute inset-0"></div>
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
		<p class="font-bold text-xs">{category}</p>
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
	}
	a {
		color: black;
		transition: all;
		transition-duration: 400ms;
	}
	img {
		object-fit: cover;
	}
</style>
