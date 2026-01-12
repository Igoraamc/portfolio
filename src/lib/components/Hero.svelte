<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { prefersReducedMotion } from 'svelte/motion';

	const getDelay = (index: number) =>
		prefersReducedMotion.current ? 0 : Math.min(index * 100, 300);
	const getDuration = () => (prefersReducedMotion.current ? 0 : 500);
	const getY = () => (prefersReducedMotion.current ? 0 : 30);
</script>

<section aria-label="Introduction" class="flex min-h-screen items-center bg-[var(--color-bg)]">
	<div class="container mx-auto px-6 py-16">
		<div class="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
			<div in:fly={{ y: getY(), duration: getDuration(), easing: cubicOut }}>
				<h1 class="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Igor Conceição</h1>
				<p class="mt-3 text-xl font-semibold text-[var(--color-accent)] md:text-2xl">
					Senior Software Engineer
				</p>
				<p class="mt-5 max-w-2xl text-lg text-[var(--color-text-muted)]">
					Front-end architecture lead who ships high-performance web platforms with crisp UX and
					maintainable systems.
				</p>
				<a
					href="#projects"
					class="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-semibold text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-white"
				>
					View projects
				</a>
			</div>

			<div
				class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-1)] p-6 shadow-xl backdrop-blur"
				in:fly={{ y: getY(), duration: getDuration(), delay: getDelay(1), easing: cubicOut }}
			>
				<div class="space-y-5 text-sm text-[var(--color-text-muted)]">
					<div>
						<p
							class="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase"
						>
							Location / Availability
						</p>
						<p class="mt-2 text-base text-[var(--color-text-muted)]">
							Vila Nova de Gaia, Portugal · Open to proposals
						</p>
					</div>
					<div>
						<p
							class="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase"
						>
							Focus
						</p>
						<p class="mt-2 text-base text-[var(--color-text-muted)]">Angular, Svelte, SSR, SEO</p>
					</div>
					<div>
						<p
							class="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase"
						>
							Achievements
						</p>
						<ul class="mt-2 space-y-2 text-base text-[var(--color-text-muted)]">
							<li>
								Reduced CI pipeline execution time by up to 90%, from 20 minutes to as low as 2
								minutes
							</li>
						</ul>
					</div>
					<div>
						<p
							class="text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase"
						>
							Links
						</p>
						<div class="mt-3 flex flex-wrap gap-3 text-base">
							<a
								href="https://github.com/igoraamc"
								target="_blank"
								rel="noopener noreferrer"
								class="font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-accent-hover)]"
							>
								GitHub
							</a>
							<a
								href="https://www.linkedin.com/in/igor-a-41b09913a/"
								class="font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-accent-hover)]"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
