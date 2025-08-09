<template>
	<section class="mx-4 flex flex-col pt-8">
		<h2 class="text-xl font-semibold">{{ title }}</h2>
		<ol class="mt-2 space-y-4">
			<li
				v-for="item in items"
				:key="item.title"
				class="flex flex-col border-l-2 border-black pl-2"
			>
				<NuxtLink
					v-if="item.website || item.description?.length"
					:to="item.website"
					class="group flex items-center gap-2"
				>
					<h3 class="text-lg">{{ item.title }}</h3>
					<UIcon
						v-if="item.website"
						name="mdi:link-variant"
						size="lg"
						mode="svg"
					/>
				</NuxtLink>
				<h3
					class="text-base"
					v-else
				>
					{{ item.title }}
				</h3>
				<div
					class="text-xs font-light [&>*]:after:mx-1 [&>*]:after:content-['•'] [&>*:last-child]:after:content-['']"
				>
					<span>{{ formatDate(locale, item.start, item.end) }}</span>
					<span v-if="item.role"> {{ item.role }}</span>
					<span v-if="item.location"> {{ item.location }}</span>
				</div>
				<ul v-if="item.description?.length">
					<li
						v-for="(line, i) in item.description"
						:key="i"
					>
						{{ line }}
					</li>
				</ul>
				<div
					v-if="item.techstack?.length"
					class="flex gap-1 text-xs font-light"
				>
					<span>Tech Stack:</span>
					<ul
						class="flex [&>*]:after:mx-1 [&>*]:after:content-['•'] [&>*:last-child]:after:content-['']"
					>
						<li v-for="tech in item.techstack">{{ tech }}</li>
					</ul>
				</div>
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
			description?: string[]
			techstack?: string[]
		}[]
	}>()

	const { locale } = useI18n()
</script>
