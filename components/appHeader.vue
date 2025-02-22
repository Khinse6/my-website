<template>
	<div
		class="sticky top-0 bg-(--ui-bg) border-b-2 border-(--ui-primary) transition duration-500"
	>
		<UContainer>
			<UNavigationMenu
				:items="items"
				class="w-full justify-center"
				:ui="{ list: 'gap-10', link: 'text-base' }"
				content-orientation="vertical"
				variant="link"
			/>
		</UContainer>
	</div>
</template>

<script lang="ts" setup>
const items = ref([
	{ label: "Home", to: "/" },
	{ label: "Projects", to: "/projects" },
	{
		label: "Hobbies",
		to: "/hobbies",
		children: [{ label: "League of Legends", to: "/hobbies/league-of-legends" }]
	}
]);
</script>
