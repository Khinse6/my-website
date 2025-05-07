<template>
	<div class="flex w-full flex-row gap-10 print:gap-0">
		<div
			v-if="cv"
			class="grow"
			id="element-to-print"
		>
			<CvPersonal :personal="cv.personal" />
			<USeparator color="primary" />
			<CvEducation
				:education="cv.education"
				class="py-4"
			/>
			<USeparator color="primary" />
			<CvLanguage
				:languages="cv.languages"
				class="py-4"
			/>
		</div>
		<div class="flex flex-col justify-center gap-10">
			<URadioGroup
				v-model="selectedLang"
				value-key="id"
				:items="languages"
				class="print:hidden"
				orientation="vertical"
			/>
			<UButton
				class="w-fit print:hidden"
				label="Save to PDF"
				:to="`/cv.pdf?lang=${selectedLang}`"
				target="_blank"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import type { RadioGroupItem } from '@nuxt/ui'
	const route = useRoute()
	const selectedLang = ref<'en' | 'pt'>(route.query.lang === 'pt' ? 'pt' : 'en')

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
