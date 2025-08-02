<template>
	<div
		class="sticky top-0 mb-5 items-center border-b-2 border-(--ui-primary) bg-(--ui-bg) transition duration-500"
	>
		<UContainer class="flex flex-row items-center justify-between">
			<p>Logo?</p>
			<UNavigationMenu
				:items="navigation"
				class="col-start-2 w-2/3 justify-center"
				:ui="{ list: 'gap-10', link: 'text-lg' }"
				variant="link"
			/>
			<USelect
				v-model="selectedLocale"
				:items="items"
				variant="subtle"
				class="h-fit text-white"
			/>
		</UContainer>
	</div>
</template>

<script lang="ts" setup>
	const { locale, locales, setLocale } = useI18n()

	const items = computed(() =>
		locales.value.map((loc) => ({
			label: loc.name || loc.code.toUpperCase(),
			value: loc.code,
		}))
	)

	const selectedLocale = computed({
		get: () => locale.value,
		set: (val) => setLocale(val as typeof locale.value),
	})

	const { data: navigation } = await useAsyncData(
		`navigation-${locale.value}`,
		() => queryCollectionNavigation(locale.value),
		{
			watch: [locale],
			transform(raw) {
				if (!raw) return []

				const rootPath = `/${locale.value}`
				const root = raw.find((item) => item.path === rootPath)
				if (!root) return []

				return transformNavigation(root.children || [])
			},
		}
	)
</script>
