<template>
	<section class="flex h-fit w-full">
		<div class="flex w-1/4 flex-col items-center">
			<slot name="image" />
		</div>
		<div class="flex grow justify-between bg-gray-400 p-4">
			<div class="flex flex-col justify-between">
				<slot name="name" />
			</div>
			<div class="flex flex-col justify-evenly">
				<slot name="social" />
			</div>
		</div>
	</section>
</template>
