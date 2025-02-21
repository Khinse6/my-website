<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
	return queryCollection("content").path(route.path).first();
});

if (!page.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Page not found",
		fatal: true
	});
}
const appConfig = useAppConfig();
</script>

<template>
	<p>{{ appConfig.ui.colors.primary }}</p>
	<ContentRenderer v-if="page" :value="page" :prose="false" />
</template>
