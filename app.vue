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
const appConfig = useAppConfig();
const routeColors: Record<string, string> = {
	projects: appConfig.ui.colors.primary,
	hobbies: "amber"
};

const getPrimaryColor = (path: string): string => {
	for (const keyword in routeColors) {
		if (path.includes(keyword)) {
			return routeColors[keyword] ?? appConfig.ui.colors.primary;
		}
	}
	return appConfig.ui.colors.primary;
};

watch(
	() => route.path,
	(newPath) => {
		updateAppConfig({
			ui: {
				colors: {
					primary: getPrimaryColor(newPath)
				}
			}
		});
	},
	{ immediate: true }
);
</script>
