<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white"
>
	Skip to content
</a>

<main id="main-content">
	{@render children()}
</main>
