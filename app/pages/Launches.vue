<!-- eslint-disable unused-imports/no-unused-vars -->

<template>
	<section class="relative w-full h-screen overflow-hidden">
		<navbar />
		<LaunchesSection
			title="Launches"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
			:show-button="false"
			background-type="image"
			background-src="/images/launches_hero.png"
		/>
	</section>
	<LaunchesInfo />
</template>

<script lang="ts" setup></script>
