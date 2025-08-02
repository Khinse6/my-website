import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const site_schema = z.object({
	tags: z.array(z.string()),
	image: z.string(),
	date: z.date(),
	website: z.string().optional(),
})

export default defineContentConfig({
	collections: {
		pt: defineCollection({
			type: 'page',
			source: 'pt/**/*.md',
			schema: site_schema,
		}),
		en: defineCollection({
			type: 'page',
			source: 'en/**/*.md',
			schema: site_schema,
		}),
	},
})
