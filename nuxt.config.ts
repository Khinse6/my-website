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
				name: "my-website",
				owner: "Khinse6",
				url: "https://github.com/Khinse6/my-website"
			}
		}
	}
});
