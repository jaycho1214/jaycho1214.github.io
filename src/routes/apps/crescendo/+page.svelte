<script lang="ts">
	const screenshots = [
		{
			src: '/apps/crescendo/screenshots/recording.png',
			alt: 'Record every take with a live level meter',
		},
		{
			src: '/apps/crescendo/screenshots/song-detail.png',
			alt: 'Study a YouTube reference with tap-to-seek timestamped notes',
		},
		{
			src: '/apps/crescendo/screenshots/take-sheet.png',
			alt: 'Slow down and loop any take to drill a tricky passage',
		},
		{
			src: '/apps/crescendo/screenshots/library.png',
			alt: 'Your whole repertoire, from learning to ready',
		},
		{
			src: '/apps/crescendo/screenshots/performance-detail.png',
			alt: 'Plan the perfect setlist with a readiness bar',
		},
		{
			src: '/apps/crescendo/screenshots/performances.png',
			alt: 'Walk on stage ready',
		},
	];
</script>

<svelte:head>
	<title>Crescendo | Jaeyoung Cho</title>
	<meta
		name="description"
		content="Crescendo — a practice journal for musicians. Record every take, study against a YouTube reference with timestamped notes, and prepare for the stage."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<article class="crescendo-page">
	<section class="hero">
		<div class="hero-content">
			<img
				src="/apps/crescendo/logo.png"
				alt="Crescendo logo"
				class="hero-logo"
			/>

			<h1 class="hero-tagline">Practice, take by take.</h1>
			<p class="hero-subtitle">
				A practice journal for musicians. Record every take, study your
				reference, and walk on stage ready.
			</p>

			<div class="store-buttons">
				<a
					href="https://apps.apple.com/app/id6777970332"
					target="_blank"
					rel="noopener noreferrer"
					class="store-btn store-btn-apple"
				>
					<svg class="store-icon" viewBox="0 0 24 24" fill="currentColor"
						><path
							d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
						/></svg
					>
					App Store
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=com.jaeyoungcho.crescendo"
					target="_blank"
					rel="noopener noreferrer"
					class="store-btn store-btn-play"
				>
					<svg class="store-icon" viewBox="0 0 24 24" fill="currentColor"
						><path
							d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
						/></svg
					>
					Google Play
				</a>
			</div>
		</div>
	</section>

	<section class="screenshots-section">
		<div class="screenshots-scroll">
			{#each screenshots as shot (shot.src)}
				<img
					src={shot.src}
					alt={shot.alt}
					class="screenshot-img"
					loading="lazy"
					width="1320"
					height="2868"
				/>
			{/each}
		</div>
	</section>

	<footer class="legal-footer">
		<a href="/apps/crescendo/legal/privacy">Privacy Policy</a>
		<span class="legal-sep">/</span>
		<a href="/apps/crescendo/legal/terms">Terms of Service</a>
	</footer>
</article>

<style>
	.crescendo-page {
		/* Warm studio espresso — matches the app's brand. */
		--bg: #14110e;
		--card: #211b15;
		--border: #322a22;
		--ink: #f3ece2;
		--ink-secondary: #c2b5a4;
		--ink-muted: #8d7f6d;
		--accent: #41b27d;
		--shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
		--shadow-elevated: 0 12px 32px rgba(0, 0, 0, 0.45);

		font-family:
			'Hanken Grotesk',
			system-ui,
			-apple-system,
			sans-serif;
		background: var(--bg);
		color: var(--ink);
		min-height: 100vh;
		overflow-x: hidden;
	}

	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: clamp(4rem, 10vh, 7rem) 1.5rem clamp(2rem, 5vh, 3.5rem);
		text-align: center;
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 480px;
	}

	.hero-logo {
		width: 96px;
		height: 96px;
		border-radius: 22px;
		margin-bottom: 1.75rem;
		box-shadow: var(--shadow), var(--shadow-elevated);
		animation: settle 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
	}

	.hero-tagline {
		font-family: 'Newsreader', Georgia, serif;
		font-size: clamp(1.75rem, 5vw, 2.5rem);
		font-weight: 500;
		line-height: 1.2;
		color: var(--ink);
		margin: 0 0 0.75rem;
		letter-spacing: -0.01em;
		text-wrap: balance;
		animation: settle 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
	}

	.hero-subtitle {
		font-size: clamp(0.875rem, 2vw, 0.9375rem);
		color: var(--ink-secondary);
		font-weight: 400;
		line-height: 1.55;
		margin: 0 0 2rem;
		animation: settle 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
	}

	@keyframes settle {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-logo,
		.hero-tagline,
		.hero-subtitle,
		.store-buttons {
			animation: none;
			opacity: 1;
		}
	}

	.store-buttons {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
		max-width: 280px;
		animation: settle 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
	}

	@media (min-width: 480px) {
		.store-buttons {
			flex-direction: row;
			max-width: none;
			width: auto;
		}
	}

	.store-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.625rem 1.25rem;
		border-radius: 10px;
		font-weight: 600;
		font-size: 0.8125rem;
		text-decoration: none;
		transition:
			transform 0.15s cubic-bezier(0.16, 1, 0.3, 1),
			box-shadow 0.15s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.store-btn:hover {
		transform: translateY(-1px);
	}

	.store-btn:active {
		transform: scale(0.98);
	}

	.store-btn:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}

	.store-btn-apple {
		background: var(--ink);
		color: var(--bg);
	}

	.store-btn-apple:hover {
		box-shadow: 0 6px 16px rgba(243, 236, 226, 0.18);
	}

	.store-btn-play {
		background: var(--card);
		color: var(--ink);
		box-shadow:
			inset 0 0 0 1px var(--border),
			var(--shadow);
	}

	.store-btn-play:hover {
		box-shadow:
			inset 0 0 0 1px var(--border),
			0 6px 16px rgba(0, 0, 0, 0.35);
	}

	.store-icon {
		width: 1rem;
		height: 1rem;
	}

	.screenshots-section {
		padding: 0 0 clamp(2rem, 5vh, 4rem);
	}

	.screenshots-scroll {
		display: flex;
		gap: 0.75rem;
		overflow-x: auto;
		padding: 0.5rem max(1.5rem, calc((100vw - 1200px) / 2)) 1rem;
		scroll-snap-type: x mandatory;
		scroll-padding-inline: max(1.5rem, calc((100vw - 1200px) / 2));
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.screenshots-scroll::-webkit-scrollbar {
		display: none;
	}

	.screenshot-img {
		height: clamp(380px, 50vh, 520px);
		width: auto;
		border-radius: 14px;
		scroll-snap-align: start;
		flex-shrink: 0;
		background: var(--card);
		box-shadow: var(--shadow), var(--shadow-elevated);
	}

	.legal-footer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.5rem 1.5rem 3rem;
	}

	.legal-footer a {
		font-size: 0.8125rem;
		color: var(--ink-muted);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.15s;
	}

	.legal-footer a:hover {
		color: var(--ink-secondary);
	}

	.legal-footer a:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
		border-radius: 2px;
	}

	.legal-sep {
		font-size: 0.75rem;
		color: var(--ink-muted);
		opacity: 0.4;
		user-select: none;
	}
</style>
