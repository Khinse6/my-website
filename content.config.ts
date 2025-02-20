import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: {
				include: "**",
				exclude: ["**/.obsidian/**", "**/templates/**"]
			}
		})
	}
});
