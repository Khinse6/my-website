<template>
	<section
		class="float-left m-0 mr-4 flex h-[1123px] w-1/3 flex-col justify-between p-4 text-white gradient"
	>
		<div class="flex flex-col gap-4">
			<img :src="image" />
			<h1 class="text-3xl/7 font-bold uppercase">{{ name }}</h1>
			<h2 class="text-base font-semibold">{{ title }}</h2>
			<p class="text-sm">{{ about }}</p>
		</div>
		<nav>
			<ul>
				<li v-for="item in contacts">
					<NuxtLink
						class="group my-2 flex items-center gap-2"
						:to="item.to"
						external
						target="_blank"
					>
						<UIcon
							class="size-5"
							v-if="item.icon"
							:name="item.icon"
							variant="ghost"
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
	}>()
</script>

<style scoped>
	.gradient {
		background: #ffffff;
		background: linear-gradient(
			150deg,
			rgba(255, 255, 255, 1) 0%,
			oklch(20.8% 0.042 265.755) 25%
		);
	}
</style>
