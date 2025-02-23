<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		:prose="false"
		class="mx-auto max-w-2xl grow"
	/>
	<div class="sticky top-24.5 h-fit w-64 border-l-2 border-(--ui-primary) pl-4">
		<p class="mb-2">On this page</p>
		<TableOfContents :links="page?.body.toc?.links" />
	</div>
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
