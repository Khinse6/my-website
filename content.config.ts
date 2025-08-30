import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const common_schema = z.object({
	tags: z.array(z.string()).optional(),
	image: z.string().optional(),
	date: z.date(),
})

export default defineContentConfig({
	collections: {
		pt: defineCollection({
			type: 'page',
			source: 'pt/**',
			schema: common_schema,
		}),
		en: defineCollection({
			type: 'page',
			source: 'en/**',
			schema: common_schema,
		}),
	},
})
