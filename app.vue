<template>
	<UApp>
		<UNavigationMenu
			:items="items"
			class="w-full justify-center sticky top-0 bg-(--ui-bg) border-b-2 border-(--ui-primary) transition duration-500"
			:ui="{ list: 'gap-10', link: 'text-base' }"
		/>
		<UContainer class="min-h-dvh">
			<NuxtPage />
		</UContainer>
	</UApp>
</template>

<script setup lang="ts">
const items = ref([
	{ label: "Projects", to: "/projects" },
	{
		label: "Hobbies",
		to: "/hobbies",
		children: [{ label: "League of Legends", to: "/hobbies/league-of-legends" }]
	}
]);
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
