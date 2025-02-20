<template>
	<div>
		<h1>Current Available content:</h1>
		<ul>
			<li v-for="c in content">
				<NuxtLink :to="c.path">{{ c.title }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
const { data: content } = await useAsyncData("content", () =>
	queryCollection("content").all()
);
</script>

<style></style>
