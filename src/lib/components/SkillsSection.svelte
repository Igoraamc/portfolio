<script lang="ts">
	import type { SkillCategory } from '$lib/types';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

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
	class="bg-gray-950 py-20"
>
	<div class="container mx-auto px-6">
		<div
			class="mb-16 text-center transition-all duration-500 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">Skills & Technologies</h2>
			<p class="mx-auto max-w-2xl text-gray-400">
				My technical stack is built on modern, performant, and scalable technologies.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#if visible}
				{#each skills as category, i (category.name)}
					<div
						class="group rounded-xl bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
						in:fly={{
							y: 20,
							duration: 500,
							delay: (i + 1) * 100,
							easing: cubicOut
						}}
					>
						<h3
							class="mb-6 border-b border-gray-800 pb-2 text-xl font-semibold text-orange-500 transition-colors group-hover:border-gray-700"
						>
							{category.name}
						</h3>
						<ul class="flex flex-col gap-3">
							{#each category.skills as skill (skill)}
								<li class="flex items-center text-gray-300">
									<span class="mr-2 h-1.5 w-1.5 rounded-full bg-gray-500"></span>
									{skill}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>
