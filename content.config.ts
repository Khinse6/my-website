import { defineContentConfig, defineCollection, z } from "@nuxt/content";
export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: {
				include: "**",
				exclude: ["**/.obsidian/**", "**/templates/**", "**/.gitignore"],
				repository: "https://github.com/Khinse6/obsidian"
			},
			schema: z.object({
				index: z.boolean()
			})
		})
	}
});
