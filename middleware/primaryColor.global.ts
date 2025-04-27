const routeColors: Record<string, string> = {
	projects: 'indigo',
	hobbies: 'orange',
}

const defaultColor = 'rose'

const getPrimaryColor = (path: string): string => {
	for (const keyword in routeColors) {
		if (path.includes(keyword)) {
			return routeColors[keyword] ?? defaultColor
		}
	}
	return defaultColor
}

export default defineNuxtRouteMiddleware((to) => {
	updateAppConfig({
		ui: {
			colors: {
				primary: getPrimaryColor(to.fullPath),
			},
		},
	})
})
