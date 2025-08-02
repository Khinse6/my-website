<template>
	<ContentRenderer
		v-if="page"
		:value="page"
	/>
	<ULink
		:to="`/cv.pdf?loc=${locale}`"
		download
		external
		target="_blank"
	>
		Download CV
	</ULink>
</template>

<script setup lang="ts">
	const route = useRoute()
	const { locale } = useI18n()
	const { data: page } = await useAsyncData('page-' + route.path, () => {
		return queryCollection(locale.value).path(route.path).first()
	})
</script>
