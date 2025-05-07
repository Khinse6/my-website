<template>
	<section>
		<h2>{{ props.education.title }}</h2>

		<div
			v-for="item in sortedEducation"
			:key="item.institution + item.end"
		>
			<p class="">{{ item.degree }} — {{ item.institution }}</p>
			<p class="indent-4 text-sm">{{ item.start }} - {{ item.end }}</p>
		</div>
	</section>
</template>

<script lang="ts" setup>
	import { computed } from 'vue'
	import type { educationInfo } from '@/utils/schemas/cv'

	const props = defineProps<{
		education: educationInfo
	}>()

	const sortedEducation = computed(() => sortDates(props.education.items))
</script>
