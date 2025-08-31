<template>
	<div class="relative h-screen w-full overflow-hidden">
		<!-- Background video -->
		<video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
			<source src="/videos/spacex_hero.mp4" type="video/mp4" />
		</video>

		<!-- Dark overlay (optional for better text visibility) -->
		<div class="absolute top-0 left-0 w-full h-full bg-black/40"></div>

		<!-- Content -->
		<div class="relative z-10 flex items-center justify-center h-full text-center text-white">
			<div>
				<h1 class="text-5xl md:text-7xl font-bold">Welcome to SpaceX</h1>
				<p class="mt-4 text-lg md:text-2xl">Revolutionizing space technology</p>
			</div>
		</div>
	</div>
</template>
