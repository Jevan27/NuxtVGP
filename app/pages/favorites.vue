<template>
	<section class="relative w-full h-screen overflow-hidden">
		<navbar />
		<LaunchesSection
			title="Favorites"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
			:show-button="false"
			background-type="image"
			background-src="/images/launches_hero.png"
		/>
	</section>
	<FavoritesSection />
</template>

<script lang="ts" setup></script>
