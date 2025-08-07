<template>
	<section class="mx-4">
		<h2 class="font-semibold">{{ title }}</h2>
		<ul class="space-y-4">
			<li
				v-for="(item, index) in sortedItems"
				:key="index"
				class="flex"
			>
				<div class="ml-2 border-l-2 border-black pl-2 font-medium">
					<span>{{ item.degree }}</span>

					<span class="pl-4 text-xs font-extralight text-nowrap">
						{{ formatDate(locale, item.start, item.end) }}
					</span>
					<p class="font-light">{{ item.institution }}</p>
				</div>
			</li>
		</ul>
	</section>
</template>

<script lang="ts" setup>
	const { locale } = useI18n()

	const props = defineProps<{
		title: string
		items: {
			institution: string
			degree: string
			start: string
			end: string
		}[]
	}>()

	const sortedItems = computed(() => {
		return [...props.items].sort((a, b) => {
			const aDate = new Date(a.end || a.start)
			const bDate = new Date(b.end || b.start)
			return bDate.getTime() - aDate.getTime()
		})
	})
</script>
