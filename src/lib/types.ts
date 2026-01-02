export interface Project {
	title: string;
	description: string;
	tags: string[];
	github?: string;
	demo?: string;
}

export interface ProjectCardProps {
	project: Project;
	visible?: boolean;
	delay?: number;
}

export interface SkillCategory {
	name: string;
	skills: string[];
}
