import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { cvSchema } from './utils/schemas/cv'

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: 'page',
			source: '**/*.md',
			schema: z.object({
				index: z.boolean(),
			}),
		}),
		cv: defineCollection({
			type: 'data',
			source: '2.projects/1.cv/*.yml',
			schema: cvSchema,
		}),
	},
})
