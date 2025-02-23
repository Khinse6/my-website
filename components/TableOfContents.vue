<template>
	<ul>
		<li v-for="link in links" :key="link.id">
			<a :href="'#' + link.id" :class="`pl-${(link.depth - 2) * 4}`">
				{{ link.text }}
			</a>
			<TableOfContents
				v-if="link.children && link.children.length"
				:links="link.children"
			/>
		</li>
	</ul>
</template>

<script setup lang="ts">
	import { type TocLink } from '@nuxt/content'
	defineProps<{
		links?: TocLink[]
	}>()
</script>
