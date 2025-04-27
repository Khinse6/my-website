import { z } from '@nuxt/content'

export const personalSchema = z.object({
	name: z.string(),
	contacts: z.array(
		z.object({
			label: z.string(),
			icon: z.string(),
			to: z.string(),
			target: z.string(),
		})
	),
})

export const skillsSchema = z.object({
	title: z.string(),
	items: z.array(
		z.object({
			name: z.string(),
			level: z.number(),
		})
	),
})

export const educationSchema = z.object({
	title: z.string(),
	items: z.array(
		z.object({
			institution: z.string(),
			degree: z.string(),
			period: z.string(),
		})
	),
})

export const projectsSchema = z.object({
	title: z.string(),
	items: z.array(
		z.object({
			name: z.string(),
			description: z.string(),
			role: z.string(),
			tech: z.array(z.string()),
		})
	),
})

export const languagesSchema = z.object({
	title: z.string(),
	items: z.array(
		z.object({
			language: z.string(),
			level: z.string(),
		})
	),
})

export const cvSchema = z.object({
	en: z.object({
		personal: personalSchema,
		skills: skillsSchema,
		education: educationSchema,
		projects: projectsSchema,
		languages: languagesSchema,
	}),
	pt: z.object({
		personal: personalSchema,
		skills: skillsSchema,
		education: educationSchema,
		projects: projectsSchema,
		languages: languagesSchema,
	}),
})

export type personalInfo = Zod.output<typeof personalSchema>
export type skillsInfo = Zod.output<typeof skillsSchema>
export type educationInfo = Zod.output<typeof educationSchema>
export type projectsInfo = Zod.output<typeof projectsSchema>
export type languagesInfo = Zod.output<typeof languagesSchema>
export type cvInfo = Zod.output<typeof cvSchema>
