<template>
	<AppHeader
		class="print:hidden"
		:navigation="navigation ?? []"
	/>
	<UContainer class="flex pt-10 print:pt-0">
		<slot />
	</UContainer>
</template>

<script lang="ts" setup>
	const { data: navigation } = await useAsyncData('navigation', async () => {
		const data = await queryCollectionNavigation('content')
		return transformNavigation(data, 2)
	})
</script>
