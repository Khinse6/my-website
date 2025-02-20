// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxthub/core"],
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4
	},
	compatibilityDate: "2024-04-03",
	content: {
		preview: {
			api: "https://api.nuxt.studio",
			gitInfo: {
				name: "Your repository name",
				owner: "Your repository owner/organization",
				url: "Your GitHub repository URL"
			}
		}
	}
});
