<script lang="ts">
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	const faqs = [
		{
			q: 'How do I delete my account?',
			a: 'Go to your profile settings in the app and tap "Delete Account." Your account enters a 30-day grace period where you can cancel. After 30 days, all data is permanently removed.',
		},
		{
			q: 'How do I report a bug?',
			a: 'Use the contact form below to submit a bug report. Please include what happened, what you expected, and your device model / OS version.',
		},
		{
			q: 'How do in-app purchases work?',
			a: "Kipi offers stickers, themes, and coins through the App Store or Google Play. Purchases are processed by your app store — we never see your payment details. Refunds follow your store's refund policy.",
		},
		{
			q: 'How do rooms work?',
			a: 'Rooms are shared spaces where you and your friends write diary entries together. Create a room, invite friends with a code, and start sharing moods. Room creators can moderate content.',
		},
		{
			q: 'How is my data stored?',
			a: 'Your diary entries and account data are stored on secure servers with encryption in transit. Photos and videos are stored on AWS S3. You can export or delete your data at any time from account settings.',
		},
	];

	const screenshots = [
		{
			src: '/apps/kipi/screenshots/hero.png',
			alt: 'Where moods become stories',
		},
		{
			src: '/apps/kipi/screenshots/mood-reading.png',
			alt: 'Tap a mood, read their story',
		},
		{
			src: '/apps/kipi/screenshots/diary-entry.png',
			alt: 'Every mood gets its own entry',
		},
		{ src: '/apps/kipi/screenshots/profile.png', alt: 'Your month in moods' },
		{ src: '/apps/kipi/screenshots/stickers.png', alt: 'Hand-drawn stickers' },
		{
			src: '/apps/kipi/screenshots/friends.png',
			alt: 'See how your friends feel today',
		},
		{
			src: '/apps/kipi/screenshots/anonymous.png',
			alt: 'Go anonymous or share with your name',
		},
		{
			src: '/apps/kipi/screenshots/graduate.png',
			alt: 'Start as strangers, graduate as friends',
		},
	];

	const faqColors = ['#50C8E8', '#A78BDA', '#F2D54B', '#4FBFA0', '#E8764A'];
</script>

<svelte:head>
	<title>Kipi | Jaeyoung Cho</title>
	<meta
		name="description"
		content="Kipi — Where moods become stories. A shared diary app for friends. Download on App Store and Google Play."
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<article class="kipi-page">
	<!-- Hero -->
	<section class="hero">
		<div class="hero-bg">
			<div class="blob blob-cyan"></div>
			<div class="blob blob-purple"></div>
			<div class="blob blob-yellow"></div>
		</div>

		<div class="hero-content">
			<img src="/apps/kipi/logo.png" alt="Kipi logo" class="hero-logo" />

			<p class="hero-tagline">
				Where <span class="moods-gradient">moods</span> become stories
			</p>
			<p class="hero-subtitle">SHARED DIARY</p>

			<div class="store-buttons">
				<a
					href="https://apps.apple.com/us/app/kipi-mood-diary-with-friends/id6757093300"
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
					href="https://play.google.com/store/apps/details?id=com.kipi.kipi"
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

	<!-- Screenshots -->
	<section class="screenshots-section">
		<div class="screenshots-scroll">
			{#each screenshots as shot (shot.src)}
				<img
					src={shot.src}
					alt={shot.alt}
					class="screenshot-img"
					loading="lazy"
				/>
			{/each}
		</div>
	</section>

	<!-- FAQ -->
	<section class="faq-section">
		<h2 class="section-title">Questions & Answers</h2>
		<div class="faq-list">
			{#each faqs as faq, i (faq.q)}
				<button
					class="faq-item"
					onclick={() => toggleFaq(i)}
					style="--accent: {faqColors[i % faqColors.length]}"
				>
					<div class="faq-header">
						<span
							class="faq-dot"
							style="background: {faqColors[i % faqColors.length]}"
						></span>
						<span class="faq-question">{faq.q}</span>
						<svg
							class="faq-chevron {openFaq === i ? 'faq-chevron-open' : ''}"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M6 9l6 6 6-6" />
						</svg>
					</div>
					{#if openFaq === i}
						<div class="faq-answer">
							{faq.a}
						</div>
					{/if}
				</button>
			{/each}
		</div>
	</section>

	<!-- Contact -->
	<section class="contact-section">
		<div class="contact-card">
			<h2 class="contact-title">Need help?</h2>
			<p class="contact-desc">
				Can't find what you're looking for? We'd love to hear from you.
			</p>
			<a
				href="https://forms.gle/LYaCC9JNb77Ka5cc9"
				target="_blank"
				rel="noopener noreferrer"
				class="contact-btn"
			>
				Contact Us
				<svg
					class="contact-arrow"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg
				>
			</a>
		</div>
	</section>

	<!-- Legal -->
	<footer class="legal-footer">
		<a href="/apps/kipi/legal/privacy">Privacy Policy</a>
		<span class="legal-dot"></span>
		<a href="/apps/kipi/legal/terms">Terms of Service</a>
	</footer>
</article>

<style>
	/* ---- Base ---- */
	.kipi-page {
		--cream: #fbf6f0;
		--cream-dark: #f0e8dd;
		--ink: #2d2a26;
		--ink-light: #6b6560;
		--ink-muted: #9e958d;
		--cyan: #50c8e8;
		--purple: #a78bda;
		--yellow: #f2d54b;
		--teal: #4fbfa0;
		--orange: #e8764a;

		font-family: 'Nunito', 'Raleway', sans-serif;
		background: var(--cream);
		color: var(--ink);
		min-height: 100vh;
		overflow-x: hidden;
	}

	/* ---- Hero ---- */
	.hero {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 8rem 1.5rem 4rem;
		text-align: center;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.25;
	}

	.blob-cyan {
		width: 320px;
		height: 320px;
		background: var(--cyan);
		top: -60px;
		right: -80px;
		animation: float 8s ease-in-out infinite;
	}

	.blob-purple {
		width: 260px;
		height: 260px;
		background: var(--purple);
		bottom: 20px;
		left: -60px;
		animation: float 10s ease-in-out infinite reverse;
	}

	.blob-yellow {
		width: 200px;
		height: 200px;
		background: var(--yellow);
		top: 40%;
		left: 55%;
		animation: float 7s ease-in-out infinite 2s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(12px, -18px) scale(1.05);
		}
		66% {
			transform: translate(-8px, 10px) scale(0.97);
		}
	}

	.hero-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-logo {
		width: 140px;
		height: 140px;
		margin-bottom: 1.5rem;
		filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
		animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
	}

	@keyframes pop-in {
		0% {
			opacity: 0;
			transform: scale(0.7);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	.hero-tagline {
		font-size: 1.35rem;
		font-weight: 800;
		color: var(--ink);
		margin-bottom: 0.35rem;
		animation: fade-up 0.5s ease both 0.15s;
	}

	@media (min-width: 640px) {
		.hero-tagline {
			font-size: 1.75rem;
		}
	}

	.moods-gradient {
		background: linear-gradient(135deg, #6b8dd6, #50c8e8, #4fbfa0);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: 0.75rem;
		letter-spacing: 0.25em;
		color: var(--ink-muted);
		font-weight: 600;
		margin-bottom: 2.5rem;
		animation: fade-up 0.5s ease both 0.25s;
	}

	@keyframes fade-up {
		0% {
			opacity: 0;
			transform: translateY(12px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* ---- Store buttons ---- */
	.store-buttons {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		animation: fade-up 0.5s ease both 0.35s;
	}

	@media (min-width: 480px) {
		.store-buttons {
			flex-direction: row;
		}
	}

	.store-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		border-radius: 999px;
		font-weight: 700;
		font-size: 0.875rem;
		text-decoration: none;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.store-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
	}

	.store-btn:active {
		transform: translateY(0);
	}

	.store-btn-apple {
		background: var(--ink);
		color: var(--cream);
	}

	.store-btn-play {
		background: white;
		color: var(--ink);
		border: 2px solid var(--cream-dark);
	}

	.store-icon {
		width: 1.125rem;
		height: 1.125rem;
	}

	/* ---- Screenshots ---- */
	.screenshots-section {
		padding: 1rem 0 3.5rem;
	}

	.screenshots-scroll {
		display: flex;
		gap: 1rem;
		overflow-x: auto;
		padding: 0 1.5rem 1rem;
		scroll-snap-type: x mandatory;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.screenshots-scroll::-webkit-scrollbar {
		display: none;
	}

	.screenshot-img {
		height: 440px;
		width: auto;
		border-radius: 1.25rem;
		scroll-snap-align: center;
		flex-shrink: 0;
		box-shadow: 0 8px 30px rgba(45, 42, 38, 0.1);
		transition: transform 0.3s ease;
	}

	.screenshot-img:hover {
		transform: scale(1.02);
	}

	@media (min-width: 640px) {
		.screenshot-img {
			height: 520px;
		}
	}

	/* ---- FAQ ---- */
	.faq-section {
		padding: 2rem 1.5rem 3.5rem;
		max-width: 640px;
		margin: 0 auto;
	}

	.section-title {
		font-size: 1.5rem;
		font-weight: 900;
		text-align: center;
		margin-bottom: 1.5rem;
		color: var(--ink);
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
	}

	.faq-item {
		width: 100%;
		text-align: left;
		background: white;
		border: none;
		border-radius: 1rem;
		padding: 0;
		cursor: pointer;
		box-shadow: 0 2px 8px rgba(45, 42, 38, 0.05);
		transition:
			box-shadow 0.2s,
			transform 0.2s;
		overflow: hidden;
	}

	.faq-item:hover {
		box-shadow: 0 4px 16px rgba(45, 42, 38, 0.1);
		transform: translateY(-1px);
	}

	.faq-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.25rem;
	}

	.faq-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.faq-question {
		flex: 1;
		font-weight: 700;
		font-size: 0.9rem;
		color: var(--ink);
	}

	.faq-chevron {
		width: 18px;
		height: 18px;
		color: var(--ink-muted);
		flex-shrink: 0;
		transition: transform 0.25s ease;
	}

	.faq-chevron-open {
		transform: rotate(180deg);
	}

	.faq-answer {
		padding: 0 1.25rem 1rem 2.75rem;
		font-size: 0.875rem;
		line-height: 1.65;
		color: var(--ink-light);
	}

	/* ---- Contact ---- */
	.contact-section {
		padding: 0 1.5rem 3.5rem;
		max-width: 640px;
		margin: 0 auto;
	}

	.contact-card {
		background: linear-gradient(135deg, var(--cyan), var(--teal));
		border-radius: 1.5rem;
		padding: 2.5rem 2rem;
		text-align: center;
		color: white;
	}

	.contact-title {
		font-size: 1.35rem;
		font-weight: 900;
		margin-bottom: 0.5rem;
	}

	.contact-desc {
		font-size: 0.875rem;
		opacity: 0.9;
		margin-bottom: 1.5rem;
		font-weight: 500;
	}

	.contact-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: white;
		color: var(--ink);
		padding: 0.75rem 1.75rem;
		border-radius: 999px;
		font-weight: 700;
		font-size: 0.875rem;
		text-decoration: none;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.contact-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	}

	.contact-arrow {
		width: 16px;
		height: 16px;
	}

	/* ---- Legal footer ---- */
	.legal-footer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 1.5rem;
		padding-bottom: 3rem;
	}

	.legal-footer a {
		font-size: 0.8rem;
		color: var(--ink-muted);
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s;
	}

	.legal-footer a:hover {
		color: var(--ink);
	}

	.legal-dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--ink-muted);
		opacity: 0.5;
	}
</style>
