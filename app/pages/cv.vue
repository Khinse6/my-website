<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		class="mx-auto min-h-[1123px] w-[795px] bg-white text-black"
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
