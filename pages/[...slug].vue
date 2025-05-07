<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		class="mx-auto max-w-2xl grow"
	/>
	<div
		class="sticky top-24.5 h-fit w-64 border-l-2 border-(--ui-primary) print:hidden"
	>
		<p class="mb-2 pl-[2ch]">On this page</p>
		<TableOfContents
			v-if="page"
			:links="page.body.toc?.links"
		/>
	</div>
</template>

<script setup lang="ts">
	const route = useRoute()
	const { data: page } = await useAsyncData('page-' + route.path, () => {
		return queryCollection('content').path(route.path).first()
	})
</script>
