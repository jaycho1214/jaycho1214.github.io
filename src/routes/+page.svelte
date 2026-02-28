<script lang="ts">
	import './page.css';
	import SplashPage from '$lib/components/SplashPage.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const hideSplashPage = process.env.NODE_ENV === 'DEBUG';
</script>

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
			<p class="text-sm font-light mt-6">I create things.</p>
		</div>
		<div class="flex flex-col lg:flex-row gap-8 my-8">
			<div class="border border-px border-gray-600 lg:flex-1">
				<h1 class="absolute bg-black mx-3 -my-3 px-4 font-bold">Projects</h1>
				<div class="flex flex-col gap-8 px-4 sm:px-8 py-12">
					<ProjectCard
						category="Application"
						url="https://selah.kr"
						name="Selah"
						description="A Bible social app for reading Scripture together and sharing reflections."
					/>
					<ProjectCard
						category="Application"
						url=""
						name="Kipi"
						description="A social diary app for exchanging stories, whether as yourself or anonymously."
					/>
					<ProjectCard
						category="Application"
						url="https://github.com/jaycho1214/openworship"
						name="OpenWorship"
						description="Free, open-source worship presentation software for churches."
					/>
				</div>
			</div>
			<div class="border border-px border-gray-600 lg:flex-1">
				<h1 class="absolute bg-black mx-3 -my-3 px-4 font-bold">Archive</h1>
				<div class="flex flex-col gap-8 px-4 sm:px-8 py-12">
					<ProjectCard
						category="Web"
						url="https://shovel.one"
						name="Shovel"
						description="Create and manage fictional worlds through web novels."
					/>
					<ProjectCard
						category="Web"
						url="https://www.onlineutilities.org"
						name="OnlineUtilities"
						description="Simplify your day with powerful tools in a sleek design."
					/>
					<ProjectCard
						category="Application"
						url="https://github.com/jaycho1214/chatapi-app"
						name="ChatAPI"
						description="Pay-as-you-go Mobile ChatGPT"
					/>
					<ProjectCard
						category="Application"
						url="https://crosswand.com/app/bible"
						name="Bible"
						description="A Bible app with multiple translations on one screen, made for Apple Vision Pro."
					/>
					<ProjectCard
						category="Application"
						url="https://crosswand.com/app/intime"
						name="In Time"
						description="A spatial time tracking tool designed for Apple Vision Pro."
					/>
					<ProjectCard
						category="Application"
						url="https://crosswand.com/app/prayer"
						name="Prayer"
						description="An open-source Christian community for sharing prayers and praying for others."
					/>
					<ProjectCard
						category="Web"
						url="https://github.com/jaycho1214/DIV2CSU"
						name="DIV2CSU"
						description="An open-source platform for converting paper-based processes to electronic formats, tailored for military use."
					/>
					<ProjectCard
						category="Application"
						url="https://crosswand.com/app/reflection"
						name="Reflection"
						description="An app for saving your own motivational quotes."
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
</style>
