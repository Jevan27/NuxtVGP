<!-- eslint-disable unused-imports/no-unused-vars -->

<template>
	<section class="relative w-full h-screen overflow-hidden">
		<navbar />
		<hero-banner />
	</section>
	<ReusableSection
		title="SpaceX Launches"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
		background-type="video"
		background-src="https://5d1ixzxi6ukfni7k.public.blob.vercel-storage.com/videos/rockets_bg.mp4"
		alignment="left"
		show-button
		button-text="See All Launches"
		button-link="/launches"
		animation-type="launch"
	/>

	<ReusableSection
		title="SpaceX Rockets"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
		background-type="image"
		background-src="/images/launches.png"
		alignment="right"
		show-button
		button-text="See All Rocktes"
		button-link="/rockets"
		animation-type="rocket"
	/>

	<Footer />
</template>

<script lang="ts" setup></script>
