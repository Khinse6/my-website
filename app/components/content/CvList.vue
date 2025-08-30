<template>
	<section class="mx-4 flex flex-col pt-4">
		<h2 class="text-xl font-semibold">{{ title }}</h2>
		<ol class="space-y-2">
			<li
				class="flex flex-col border-l-1 border-black pl-2"
				v-for="item in items"
				:key="item.title"
			>
				<NuxtLink
					class="group flex items-center gap-2 w-fit"
					:to="item.website"
					target="_blank"
				>
					<h3 class="text-base font-semibold">
						{{ item.title }}
					</h3>
					<UIcon
						v-if="item.website"
						name="mdi:link-variant"
						size="lg"
						mode="svg"
					/>
				</NuxtLink>
				<div
					class="text-xs font-extralight [&>*]:after:mx-1 [&>*]:after:content-['•'] [&>*:last-child]:after:content-['']"
				>
					<span>{{ formatDate(locale, item.start, item.end) }}</span>
					<span v-if="item.role"> {{ item.role }}</span>
					<span v-if="item.location"> {{ item.location }}</span>
				</div>
				<p
					class="text-sm/tight"
					v-if="item.description"
				>
					{{ item.description }}
				</p>
				<ul
					class="list-disc text-xs/tight pl-4"
					v-if="item.tasks?.length"
				>
					<li v-for="task in item.tasks">{{ task }}</li>
				</ul>
			</li>
		</ol>
	</section>
</template>

<script lang="ts" setup>
	defineProps<{
		title: string
		items: {
			title: string
			website?: string
			location: string
			role?: string
			start: string
			end?: string
			description?: string
			tasks?: []
		}[]
	}>()

	const { locale } = useI18n()
</script>
