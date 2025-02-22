<template>
	<UApp>
		<AppHeader />
		<UContainer class="min-h-dvh">
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
const defaultColor = "rose";
const routeColors: Record<string, string> = {
	projects: "indigo",
	hobbies: "orange"
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
