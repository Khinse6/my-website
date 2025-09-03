// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
		'@nuxt/content',
		'@nuxt/ui',
		'@nuxthub/core',
		'@nuxtjs/i18n',
		'@nuxt/image',
	],
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
	hub: {
		browser: true,
	},
	i18n: {
		strategy: 'prefix',
		defaultLocale: 'pt',
		locales: [
			{
				code: 'pt',
				name: 'Português',
				language: 'pt-PT',
				dir: 'ltr',
			},
			{
				code: 'en',
				name: 'English',
				language: 'en-US',
				dir: 'ltr',
			},
		],
		detectBrowserLanguage: {
			useCookie: true,
			alwaysRedirect: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		},
	},
})
