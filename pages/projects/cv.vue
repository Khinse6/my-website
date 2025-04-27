<template>
	<div class="flex w-full flex-col gap-10">
		<URadioGroup
			v-model="selectedLang"
			orientation="horizontal"
			value-key="id"
			:items="languages"
			class="print:hidden"
		/>
		<div v-if="cv">
			<CvPersonal :personal="cv.personal" />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import type { RadioGroupItem } from '@nuxt/ui'
	const selectedLang = ref<'en' | 'pt'>('en')

	const languages = ref<RadioGroupItem[]>([
		{ label: 'English', id: 'en' },
		{ label: 'Português', id: 'pt' },
	])

	const { data: cvData } = await useAsyncData('cv', () => {
		return queryCollection('cv').first()
	})

	const cv = computed(() => {
		return cvData.value?.[selectedLang.value]
	})
</script>
