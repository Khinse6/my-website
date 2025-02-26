<template>
	<ol>
		<li
			v-for="link in links"
			:key="link.id"
			class="pl-[2ch] indent-0 font-sans"
		>
			<a :href="'#' + link.id">
				{{ link.text }}
			</a>
			<TableOfContents
				v-if="link.children && link.children.length"
				:links="link.children"
			/>
		</li>
	</ol>
</template>

<script setup lang="ts">
	import { type TocLink } from '@nuxt/content'
	defineProps<{
		links?: TocLink[]
	}>()
</script>
