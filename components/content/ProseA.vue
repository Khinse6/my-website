<template>
	<NuxtLink
		:href="normalizedHref"
		:target="isExternal ? '_blank' : props.target"
		:rel="isExternal ? 'noopener noreferrer' : undefined"
		class="text-(--ui-primary)"
	>
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
	import { computed } from 'vue'
	import type { PropType } from 'vue'

	const props = defineProps({
		href: { type: String, default: '' },
		target: {
			type: String as PropType<
				| '_blank'
				| '_parent'
				| '_self'
				| '_top'
				| (string & object)
				| null
				| undefined
			>,
			default: undefined,
		},
	})

	const isExternal = computed(
		() => props.href.startsWith('http') || props.href.startsWith('//')
	)

	const normalizedHref = computed(() => {
		if (isExternal.value) return props.href
		const path = props.href.startsWith('/') ? props.href : `/${props.href}`
		return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
	})
</script>
