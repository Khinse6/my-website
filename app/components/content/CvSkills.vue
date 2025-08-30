<template>
	<section class="mx-4 flex flex-col pt-4">
		<h2 class="text-xl font-semibold">{{ title }}</h2>
		<section
			class="border-l-1 border-black pl-2 mb-2"
			v-for="item in items"
		>
			<h3 class="text-base font-semibold">{{ item.title }}</h3>
			<div
				class="text-xs/tight [&>*]:after:mx-1 [&>*]:after:content-['•'] [&>*:last-child]:after:content-['']"
			>
				<span v-for="skill in item.skills">
					{{ skill }}
				</span>
			</div>
		</section>
	</section>
</template>

<script setup lang="ts">
	defineProps<{
		title: string
		items: {
			title: string
			skills: string[]
		}[]
	}>()
</script>
