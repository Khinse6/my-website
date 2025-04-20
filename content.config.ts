import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: 'page',
			source: {
				include: '**',
				exclude: ['**/.obsidian/**', '**/templates/**'],
			},
			schema: z.object({
				index: z.boolean(),
			}),
		}),
	},
})
