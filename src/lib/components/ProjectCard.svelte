<script lang="ts">
	import type { ProjectCardProps } from '$lib/types';

	let { project, visible = false, delay = 0 }: ProjectCardProps = $props();
</script>

<article
	class="flex h-full flex-col rounded-xl bg-gray-800 p-6 transition-all duration-300 ease-out hover:-translate-y-1 {visible
		? 'translate-y-0 opacity-100'
		: 'translate-y-8 opacity-0'}"
	style="transition-delay: {delay}ms"
>
	<h3 class="mb-3 text-xl font-semibold text-white">{project.title}</h3>
	<p class="mb-4 text-gray-400">{project.description}</p>
	<div class="mb-4 flex flex-wrap gap-2">
		{#each project.tags as tag (tag)}
			<span class="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">{tag}</span>
		{/each}
	</div>
	<div class="mt-auto flex gap-4">
		{#if project.github}
			<a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
				class="text-orange-500 transition-colors hover:text-orange-400"
			>
				GitHub
			</a>
		{/if}
		{#if project.demo}
			<a
				href={project.demo}
				target="_blank"
				rel="noopener noreferrer"
				class="text-orange-500 transition-colors hover:text-orange-400"
			>
				Live Demo
			</a>
		{/if}
	</div>
</article>
