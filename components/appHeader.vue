<template>
	<div
		class="sticky top-0 border-b-2 border-(--ui-primary) bg-(--ui-bg) transition duration-500"
	>
		<UContainer>
			<UNavigationMenu
				:items="navigation"
				class="w-full justify-center"
				:ui="{ list: 'gap-10', link: 'text-lg' }"
				content-orientation="vertical"
				variant="link"
			/>
		</UContainer>
	</div>
</template>

<script lang="ts" setup>
	const { data: navigation } = await useAsyncData('navigation', async () => {
		const data = await queryCollectionNavigation('content')
		return transformNavigation(data, 2)
	})
</script>
