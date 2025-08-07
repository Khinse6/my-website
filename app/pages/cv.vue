<template>
	<ContentRenderer
		v-if="page"
		:value="page"
		class="mx-auto w-[795px] space-y-8 bg-white text-black"
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
