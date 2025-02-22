<template>
	<div
		class="sticky top-0 bg-(--ui-bg) border-b-2 border-(--ui-primary) transition duration-500"
	>
		<UContainer>
			<UNavigationMenu
				:items="navigation"
				class="w-full justify-center"
				:ui="{ list: 'gap-10', link: 'text-base' }"
				content-orientation="vertical"
				variant="link"
			/>
		</UContainer>
	</div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData("navigation", () => {
	return queryCollectionNavigation("content").where("index", "=", true);
});
const order = ["Home", "Projects", "Hobbies"];
const navigation = transformNavigation(order, data.value ?? []);
</script>
