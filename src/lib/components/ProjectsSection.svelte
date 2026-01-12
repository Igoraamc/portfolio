<script lang="ts">
	import type { Project } from '$lib/types';
	import ProjectCard from './ProjectCard.svelte';

	let { projects }: { projects: Project[] } = $props();

	let projectsVisible = $state(false);
	let projectsSection: HTMLElement;

	$effect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					projectsVisible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (projectsSection) {
			observer.observe(projectsSection);
		}

		return () => observer.disconnect();
	});
</script>

<section
	bind:this={projectsSection}
	id="projects"
	aria-label="Projects"
	class="scroll-mt-8 bg-[var(--color-bg)] py-20"
>
	<div class="container mx-auto px-6">
		<div
			class="transition-all duration-500 ease-out {projectsVisible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<h2 class="mb-4 text-center text-3xl font-bold text-white md:text-4xl">Featured Projects</h2>
			<p class="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">
				A selection of projects that demonstrate my technical skills and problem-solving approach.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i (project.title)}
				<ProjectCard {project} visible={projectsVisible} delay={(i + 1) * 100} />
			{/each}
		</div>
	</div>
</section>
