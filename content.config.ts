import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: 'page',
			schema: z.object({
				index: z.boolean(),
			}),
		}),
	},
})
