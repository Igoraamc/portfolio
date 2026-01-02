import type { Project, SkillCategory } from './types';

export const skills: SkillCategory[] = [
	{
		name: 'Languages',
		skills: ['TypeScript', 'JavaScript', 'Python', 'HTML/CSS']
	},
	{
		name: 'Frontend',
		skills: ['Svelte / SvelteKit', 'Angular', 'Tailwind CSS', 'Vite']
	},
	{
		name: 'Backend',
		skills: ['Bun', 'Hono', 'Node.js', 'SQLite']
	},
	{
		name: 'DevOps & Tools',
		skills: ['Git', 'Docker', 'GitHub Actions', 'Claude API']
	}
];

export const projects: Project[] = [
	{
		title: 'ux-agent',
		description:
			'AI-powered autonomous UX testing tool. Uses Claude to analyze annotated screenshots and navigate web apps like a real user. Features visual element detection, real-time SSE streaming, and comprehensive security guardrails including URL blocklisting and prompt injection detection.',
		tags: ['TypeScript', 'Playwright', 'Claude API', 'Hono', 'SSE'],
		github: 'https://github.com/igoraamc/ux-agent'
	},
	{
		title: 'DevVault (WIP)',
		description:
			'Personal code snippet manager built for developers who hoard useful code. Organize snippets by language and labels, with full-text search and syntax highlighting. Currently migrating from React to SvelteKit.',
		tags: ['SvelteKit', 'SQLite', 'Drizzle ORM', 'TypeScript'],
		github: 'https://github.com/igoraamc/devvault'
	}
];
