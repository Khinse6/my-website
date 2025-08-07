import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const common_schema = z.object({
	tags: z.array(z.string()),
	image: z.string().optional(),
	date: z.date(),
	website: z.string().optional(),
	type: z.string().optional(),
	techstack: z.array(z.string()).optional(),
})

export default defineContentConfig({
	collections: {
		pt: defineCollection({
			type: 'page',
			source: 'pt/**/*.md',
			schema: common_schema,
		}),
		en: defineCollection({
			type: 'page',
			source: 'en/**/*.md',
			schema: common_schema,
		}),
	},
})
