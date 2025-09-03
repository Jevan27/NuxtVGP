<!-- eslint-disable unused-imports/no-unused-vars -->

<template>
	<section class="relative w-full h-screen overflow-hidden">
		<navbar />
		<ReusableSection
			title="Rockets"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
			background-type="image"
			background-src="/images/rockets_hero.png"
			alignment="left"
			:show-button="false"
		/>
	</section>
	<RocketInfo />
	<Footer />
</template>

<script lang="ts" setup></script>
