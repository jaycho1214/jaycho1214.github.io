<script lang="ts">
	import './page.css';
	import SplashPage from '$lib/components/SplashPage.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { onMount } from 'svelte';

	const hideSplashPage = process.env.NODE_ENV === 'DEBUG';

	let heroEnd: HTMLElement;
	let showHeader = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				showHeader = !entry.isIntersecting;
			},
			{ threshold: 0 },
		);
		observer.observe(heroEnd);
		return () => observer.disconnect();
	});
</script>

<div
	class="fixed top-0 left-0 right-0 z-40 h-12 transition-opacity duration-300"
	class:opacity-100={showHeader}
	class:opacity-0={!showHeader}
	class:pointer-events-none={!showHeader}
	aria-hidden={!showHeader}
>
	<div class="header-blur absolute inset-0"></div>
	<div class="relative h-full flex items-center gap-2 pl-12 pr-4">
		<div class="overflow-hidden">
			<p
				class="text-white text-sm font-bold transition-transform duration-300 ease-out"
				class:translate-y-0={showHeader}
				class:translate-y-full={!showHeader}
			>
				Jaeyoung Cho
			</p>
		</div>
		<a
			href="https://github.com/jaycho1214"
			target="_blank"
			aria-label="Visit my Github account"
			tabindex={showHeader ? 0 : -1}
			class="transition-all duration-300 ease-out"
			class:opacity-100={showHeader}
			class:opacity-0={!showHeader}
			class:translate-y-2={!showHeader}
		>
			<GithubIcon />
		</a>
	</div>
</div>

<article>
	<section class="flex flex-col pt-12 pb-20 text-white px-4 sm:px-6">
		<div class="py-4 flex flex-col">
			<div class="flex">
				<h1 class="text-2xl font-light">Jaeyoung Cho</h1>
				<div class="flex flex-row items-center ml-4">
					<a
						href="https://github.com/jaycho1214"
						target="_blank"
						aria-label="Visit my Github account"
					>
						<GithubIcon />
					</a>
				</div>
			</div>
			<p class="text-sm text-gray-300 font-light">Software Engineer</p>
			<p bind:this={heroEnd} class="text-sm font-light mt-6">I create things.</p>
		</div>
		<div class="flex flex-col lg:flex-row gap-8 my-8">
			<div class="border border-px border-gray-600 lg:flex-1">
				<h1 class="absolute bg-black mx-3 -my-3 px-4 font-bold">Projects</h1>
				<div class="flex flex-col gap-8 px-4 sm:px-8 py-12">
					<ProjectCard
						categories={["Web"]}
						url="https://shovel.one"
						name="Shovel"
						description="Create and manage fictional worlds through web novels."
						date="Jul 2024 — Present"
					/>
					<ProjectCard
						categories={["Web", "iOS", "Android"]}
						url="https://selah.kr"
						name="Selah"
						description="A Bible social app for reading Scripture together and sharing reflections."
						date="May 2025 — Present"
					/>
					<ProjectCard
						categories={["iOS", "Android"]}
						url="/apps/kipi"
						name="Kipi"
						description="A social diary app for exchanging stories, whether as yourself or anonymously."
						date="Dec 2025 — Present"
					/>
					<ProjectCard
						categories={["Desktop"]}
						url="https://github.com/jaycho1214/openworship"
						name="OpenWorship"
						description="Free, open-source worship presentation software for churches."
						date="Jan 2026 — Present"
					/>
				</div>
			</div>
			<div class="border border-px border-gray-600 lg:flex-1">
				<h1 class="absolute bg-black mx-3 -my-3 px-4 font-bold">Archive</h1>
				<div class="flex flex-col gap-8 px-4 sm:px-8 py-12">
					<ProjectCard
						categories={["Web"]}
						url="https://github.com/jaycho1214/onlineutilities"
						name="OnlineUtilities"
						description="Simplify your day with powerful tools in a sleek design."
						date="Sep 2024 — Sep 2025"
					/>
					<ProjectCard
						categories={["iOS"]}
						url="https://github.com/jaycho1214/chatapi-app"
						name="ChatAPI"
						description="Pay-as-you-go Mobile ChatGPT"
						date="Sep 2024"
					/>
					<ProjectCard
						categories={["visionOS"]}
						url="https://crosswand.com/app/bible"
						name="Bible"
						description="A Bible app with multiple translations on one screen, made for Apple Vision Pro."
						date="May 2024"
					/>
					<ProjectCard
						categories={["visionOS"]}
						url="https://crosswand.com/app/intime"
						name="In Time"
						description="A spatial time tracking tool designed for Apple Vision Pro."
					/>
					<ProjectCard
						categories={["iOS", "Android"]}
						url="https://crosswand.com/app/prayer"
						name="Prayer"
						description="An open-source Christian community for sharing prayers and praying for others."
						date="Nov 2023 — Aug 2024"
					/>
					<ProjectCard
						categories={["Web"]}
						url="https://github.com/jaycho1214/DIV2CSU"
						name="DIV2CSU"
						description="An open-source platform for converting paper-based processes to electronic formats, tailored for military use."
						date="Aug 2023 — Aug 2024"
					/>
					<ProjectCard
						categories={["iOS", "Android"]}
						url="https://crosswand.com/app/reflection"
						name="Reflection"
						description="An app for saving your own motivational quotes."
						date="Jul 2022 — Jul 2023"
					/>
					<ProjectCard
						categories={["iOS", "Android"]}
						url="https://github.com/crosswandhq/motivelist"
						name="MoLi"
						description="A motive list app for collecting and organizing your inspirations."
						date="Jul 2022 — Nov 2023"
					/>
				</div>
			</div>
		</div>
	</section>
</article>

{#if !hideSplashPage}
	<SplashPage />
{/if}

<style>
	article {
		scroll-behavior: smooth;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	.header-blur {
		backdrop-filter: blur(8px) saturate(180%);
		-webkit-backdrop-filter: blur(8px) saturate(180%);
		background: rgba(0, 0, 0, 0.3);
	}
</style>
