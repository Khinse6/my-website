<template>
	<section
		class="float-left m-0 mr-4 flex h-[1123px] w-1/3 flex-col justify-between bg-linear-to-b from-[#6C3082] to-black p-4 text-white"
	>
		<div class="flex flex-col gap-4">
			<img :src="image" />
			<h1 class="text-3xl/7 font-bold uppercase">{{ name }}</h1>
			<h2 class="text-base">{{ title }}</h2>
			<p class="text-sm">{{ about }}</p>
			<div>
				<h2 class="text-base">{{ language.title }}</h2>
				<ul class="text-sm">
					<li v-for="item in language.items">{{ item }}</li>
				</ul>
			</div>
		</div>
		<nav>
			<ul>
				<li v-for="item in contacts">
					<NuxtLink
						:to="item.to"
						class="group my-2 flex items-center gap-2"
						external
						target="_blank"
					>
						<UIcon
							v-if="item.icon"
							:name="item.icon"
							variant="ghost"
							class="size-5"
							color="neutral"
							mode="svg"
						/>
						{{ item.label }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</section>
</template>

<script lang="ts" setup>
	defineProps<{
		image: string
		name: string
		title: string
		about: string
		contacts: {
			label: string
			to: string
			icon: string
		}[]
		language: {
			title: string
			items: string[]
		}
	}>()
</script>
