<script lang="ts">
	import type { SkillCategory } from '$lib/types';

	let { skills }: { skills: SkillCategory[] } = $props();

	let visible = $state(false);
	let section: HTMLElement;

	$effect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (section) observer.observe(section);
		return () => observer.disconnect();
	});
</script>

<section
	bind:this={section}
	id="skills"
	aria-label="Skills and Technologies"
	class="bg-[var(--color-bg)] py-20"
>
	<div class="container mx-auto px-6">
		<div
			class="mb-16 text-center transition-all duration-500 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Skills & Technologies</h2>
			<p class="mx-auto max-w-2xl text-[var(--color-text-muted)]">
				My technical stack is built on modern, performant, and scalable technologies.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each skills as category, i (category.name)}
				<div
					class="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[var(--color-surface-2)] {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-6 opacity-0'}"
					style={`transition-delay: ${visible ? (i + 1) * 100 : 0}ms;`}
				>
					<h3
						class="mb-6 border-b border-[var(--color-border)] pb-2 text-xl font-semibold text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-accent)]"
					>
						{category.name}
					</h3>
					<ul class="flex flex-col gap-3">
						{#each category.skills as skill (skill)}
							<li class="flex items-center text-[var(--color-text-muted)]">
								<span class="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--color-border)]"></span>
								{skill}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
