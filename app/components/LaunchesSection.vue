<!-- eslint-disable vue/valid-v-slot -->
<template>
	<section class="relative w-full min-h-screen overflow-hidden">
		<!-- Background Video -->
		<video
			autoplay
			muted
			loop
			playsinline
			class="absolute top-0 left-0 w-full h-full object-cover bg-black"
		>
			<source src="/videos/rockets_bg.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>

		<!-- Dark overlay -->
		<div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>

		<!-- Content -->
		<div class="relative z-10 flex items-center min-h-screen p-8">
			<!-- Left content -->
			<div class="w-full md:w-2/3 lg:w-1/2 text-left max-w-xl">
				<h2 class="text-5xl font-bold mb-10 text-white">SpaceX Launches</h2>
				<p class="text-lg text-gray-200 mb-10">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
					libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
					imperdiet.
				</p>

				<v-btn
					class="bg-gray-500 hover:bg-black text-black hover:!text-white rounded-xl px-6 py-3 font-semibold text-lg shadow-lg transition-colors duration-300"
				>
					See All Launches
				</v-btn>
			</div>
		</div>
	</section>
</template>
