<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { prefersReducedMotion } from 'svelte/motion';

	const getDelay = (index: number) =>
		prefersReducedMotion.current ? 0 : Math.min(index * 100, 300);
	const getDuration = () => (prefersReducedMotion.current ? 0 : 500);
	const getY = () => (prefersReducedMotion.current ? 0 : 30);
</script>

<section aria-label="Introduction" class="flex min-h-screen items-center bg-gray-950">
	<div class="container mx-auto px-6 py-16">
		<div class="flex flex-col items-center gap-12 lg:flex-row">
			<div
				class="flex-1 text-center lg:text-left"
				in:fly={{ y: getY(), duration: getDuration(), easing: cubicOut }}
			>
				<p class="mb-2 text-lg text-orange-500 md:text-xl">Hi, I'm</p>
				<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Igor Conceição</h1>
				<p class="mb-6 text-xl text-gray-300 md:text-2xl">Senior Software Engineer</p>
				<p class="mx-auto mb-8 max-w-xl text-lg text-gray-400 lg:mx-0">
					I build robust, scalable applications and love turning complex problems into elegant
					solutions. Passionate about clean code and great user experiences.
				</p>

				<div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
					<button
						class="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
					>
						Contact Me
					</button>
					<a
						href="#projects"
						class="rounded-lg border-2 border-gray-700 px-8 py-3 font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:bg-gray-800"
					>
						View Projects
					</a>
				</div>
			</div>

			<div
				class="flex flex-1 justify-center"
				in:fly={{ y: getY(), duration: getDuration(), delay: getDelay(1), easing: cubicOut }}
			>
				<div
					class="flex h-64 w-64 items-center justify-center rounded-full bg-linear-to-br from-orange-400 to-orange-600 shadow-xl md:h-80 md:w-80"
				>
					<span role="img" aria-label="Profile photo placeholder" class="text-6xl text-white">
						👤
					</span>
				</div>
			</div>
		</div>
	</div>
</section>
