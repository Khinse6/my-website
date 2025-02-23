<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		:prose="false"
		class="mx-auto max-w-2xl pt-10"
	/>
</template>

<script setup lang="ts">
	const route = useRoute()
	const { data: page } = await useAsyncData('page-' + route.path, () => {
		return queryCollection('content').path(route.path).first()
	})
	if (!page.value) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Page not found',
			fatal: true,
		})
	}
</script>
