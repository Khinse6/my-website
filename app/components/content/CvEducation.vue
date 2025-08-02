<template>
	<section class="education">
		<h2>{{ title }}</h2>
		<ul>
			<li
				v-for="(item, index) in sortedItems"
				:key="index"
			>
				<div>{{ item.degree }}</div>
				<div>{{ item.institution }}</div>
				<div>{{ item.start }} – {{ item.end }}</div>
			</li>
		</ul>
	</section>
</template>

<script setup>
	import { computed } from 'vue'

	const props = defineProps({
		title: {
			type: String,
			required: true,
		},
		items: {
			type: Array,
			required: true,
			default: () => [],
		},
	})

	function parseDate(dateStr) {
		const lower = String(dateStr || '').toLowerCase()
		if (lower === 'presente' || lower === 'present' || lower === '') {
			return new Date(3000, 0) // futura
		}
		return new Date(dateStr)
	}

	const sortedItems = computed(() => {
		return [...props.items].sort((a, b) => {
			const dateA = parseDate(a.end)
			const dateB = parseDate(b.end)
			return dateB - dateA
		})
	})
</script>
