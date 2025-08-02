<template>
	<section>
		<slot name="title" />
		<div
			v-for="project in data"
			:key="project.path"
			class="mb-4"
		>
			<div class="flex items-center gap-2">
				<h3>{{ project.title }} | {{ formatDate(project.date) }}</h3>
				<UButton
					icon="mdi:link-variant"
					:to="project.website"
					size="xs"
					variant="ghost"
					aria-label="Visitar site do projeto"
					class="flex items-center justify-center p-0"
				/>
			</div>
			<p>{{ project.description }}</p>
		</div>
	</section>
</template>

<script lang="ts" setup>
	const { locale } = useI18n()
	const { data, error } = await useAsyncData('projects', () => {
		return queryCollection(locale.value)
			.select('path', 'title', 'description', 'date', 'website')
			.where('path', 'LIKE', '%/projects/%')
			.order('date', 'DESC')
			.all()
	})

	function formatDate(dateStr: string) {
		return new Date(dateStr).toISOString().slice(0, 7)
	}
</script>
