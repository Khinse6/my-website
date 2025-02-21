import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: {
				include: "**/.md",
				exclude: ["**/.obsidian/**", "**/templates/**"],
				repository: "https://github.com/Khinse6/obsidian"
			}
		})
	}
});
