<template>
	<section>
		<h1 class="text-center">{{ personal.name }}</h1>

		<UNavigationMenu
			:items="personal.contacts"
			class="justify-center"
			:ui="{
				linkLabelExternalIcon:
					'text-(--ui-text) group-hover:text-(--ui-text-highlighted)',
				linkLeadingIcon:
					'text-(--ui-text) group-hover:text-(--ui-text-highlighted)',
			}"
		/>
	</section>
</template>

<script lang="ts" setup>
	import type { personalInfo } from '@/utils/schemas/cv'
	defineProps<{
		personal: personalInfo
	}>()
</script>
