<!-- eslint-disable unused-imports/no-unused-vars -->

<template>
	<section class="relative w-full h-screen overflow-hidden">
		<navbar />
		<hero-banner />
	</section>
	<LaunchesSection
		title="SpaceX Launches"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
		:show-button="true"
		background-type="video"
		background-src="/videos/rockets_bg.mp4"
	/>
	<RocketSection />
	<Footer />
</template>

<script lang="ts" setup></script>
