<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import { projects } from '$lib/data';
</script>

<svelte:head>
	<title>Igor Conceição | Senior Software Engineer</title>
	<meta
		name="description"
		content="Senior Software Engineer specializing in building robust, scalable applications. Passionate about clean code and great user experiences."
	/>
	<meta property="og:title" content="Igor Conceição | Senior Software Engineer" />
	<meta
		property="og:description"
		content="Senior Software Engineer specializing in building robust, scalable applications."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<Hero />
<ProjectsSection {projects} />