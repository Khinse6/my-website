<template>
	<ContentRenderer
		class="mx-auto h-full w-full bg-white text-black"
		v-if="page"
		:value="page"
	/>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: 'blank',
	})

	const route = useRoute()
	const { locale } = useI18n()
	const { data: page } = await useAsyncData('page-' + route.path, () => {
		return queryCollection(locale.value).path(route.path).first()
	})
</script>

<style scoped>
	@page {
		size: A4 portrait;
	}
</style>
