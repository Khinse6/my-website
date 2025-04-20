// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint'],
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
	content: {
		renderer: { anchorLinks: false },
		preview: { api: 'https://api.nuxt.studio' },
	},
})
