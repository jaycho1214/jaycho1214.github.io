<script lang="ts">
	export let imgSrc: string = '';
	export let category: string = '';
	export let title: string = '';
	export let href: string = '';
	export let textColor: string = '';
</script>

<a
	{href}
	class="relative text-white rounded inline-block overflow-hidden"
	style={`color: ${textColor}`}
>
	<img
		src={imgSrc}
		alt="Thumbnail"
		class="absolute object-cover w-full h-full z-0 pointer-events-none"
	/>
	<div class="absolute h-full p-4 flex flex-col justify-between z-10 pointer-events-none">
		<p class="font-bold text-sm">{category}</p>
		<p class="text-xl">{title}</p>
	</div>
</a>

<style>
	a {
		aspect-ratio: 1/1.618;
	}

	a:hover img {
		transform: scale(110%);
		transition: all;
		transition-duration: 400ms;
	}
	a img {
		transform: scale(100%);
		transition: all;
		transition-duration: 400ms;
	}
</style>
