<template>
	<UApp>
		<UContainer>
			<NuxtPage />
		</UContainer>
	</UApp>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("navigation", () => {
	return queryCollectionNavigation("content");
});

const route = useRoute();
const defaultColor = "indigo";
const appConfig = useAppConfig();
const routeColors: Record<string, string> = {
	projects: defaultColor,
	hobbies: "amber"
};

const getPrimaryColor = (path: string): string => {
	for (const keyword in routeColors) {
		if (path.includes(keyword)) {
			return routeColors[keyword] ?? defaultColor;
		}
	}
	return defaultColor;
};

watch(
	() => route.path,
	(newPath) => {
		appConfig.ui = {
			...appConfig.ui, // Preserve existing config
			colors: {
				...appConfig.ui.colors, // Preserve other color settings
				primary: getPrimaryColor(newPath)
			}
		};
	},
	{ immediate: true }
);
</script>
