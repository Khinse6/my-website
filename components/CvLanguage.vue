<template>
	<section>
		<h2>{{ languages.title }}</h2>
		<template v-for="item in languages.items">
			<p>{{ item.language }}, {{ item.level }}</p>
		</template>
	</section>
</template>

<script lang="ts" setup>
	import type { languagesInfo } from '@/utils/schemas/cv'
	defineProps<{
		languages: languagesInfo
	}>()
</script>
