// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	modules: ['@nuxt/content', '@nuxthub/core', '@nuxt/ui', '@nuxt/eslint'],
	css: ['~/assets/css/main.css'],
	vite: { plugins: [tailwindcss()] },
	ui: {
		colorMode: false,
	},
	fonts: {
		experimental: {
			processCSSVariables: true,
		},
	},
})
