<template>
	<section class="mx-4 pt-6">
		<h2 class="font-semibold">{{ title }}</h2>
		<ul class="mt-2 space-y-2">
			<li
				v-for="item in data"
				:key="item.path"
				class="flex"
			>
				<div class="ml-2 border-l-2 border-black pl-2">
					<NuxtLink
						:to="item.website"
						class="group inline-flex w-fit items-center gap-2"
					>
						<h3 class="text-base font-medium">
							{{ item.title }}
						</h3>
						<UIcon
							name="mdi:link-variant"
							variant="ghost"
							class="size-4"
							color="neutral"
							mode="svg"
						/>
					</NuxtLink>
					<p class="text-xs font-light text-nowrap">
						{{ formatDate(locale, item.date) }}
					</p>
					<p>{{ item.description }}</p>
					<div
						v-if="item.techstack"
						class="flex flex-row gap-1 pt-2 text-xs font-medium"
					>
						<h4>Tech Stack:</h4>
						<ul class="flex flex-wrap items-center">
							<li
								v-for="tech in item.techstack"
								:key="tech"
								class="after:mx-1 after:content-['•'] last:after:content-['']"
							>
								{{ tech }}
							</li>
						</ul>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		title: string
		type: 'work' | 'project'
	}>()

	const { locale } = useI18n()

	const { data, error } = await useAsyncData(`${props.type}s`, () => {
		return queryCollection(locale.value)
			.select(
				'path',
				'title',
				'description',
				'date',
				'website',
				'type',
				'techstack'
			)
			.where('type', 'LIKE', props.type)
			.order('date', 'DESC')
			.all()
	})
</script>
