<template>
	<section class="relative w-full h-screen overflow-hidden">
		<navbar />
		<ReusableSection
			title="Favorite Launches"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
			background-type="image"
			background-src="/images/favorite_hero.jpg"
			alignment="left"
			:show-button="false"
		/>
	</section>
	<FavoritesSection />
	<Footer />
</template>

<script lang="ts" setup></script>
