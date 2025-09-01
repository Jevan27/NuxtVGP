<!-- eslint-disable vue/valid-v-slot -->
<template>
	<section ref="section" class="relative w-full min-h-screen overflow-hidden">
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
				<h2 ref="header" class="text-5xl font-bold mb-10 text-white">SpaceX Launches</h2>
				<p ref="desc" class="text-lg text-gray-200 mb-10">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
					libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
					imperdiet.
				</p>

				<v-btn
					ref="button"
					class="bg-gray-500 hover:bg-black text-black hover:!text-white rounded-xl px-6 py-3 font-semibold text-lg shadow-lg transition-colors duration-300"
				>
					See All Launches
				</v-btn>
			</div>
		</div>
	</section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const header = ref(null)
const desc = ref(null)
const button = ref(null)

onMounted(() => {
	// Set initial state
	gsap.set([header.value, desc.value], { opacity: 0, x: -100 })
	gsap.set(button.value, { opacity: 0, y: 20 })

	// Scroll-based animation (scrub ties progress to scroll)
	gsap.timeline({
		scrollTrigger: {
			trigger: section.value,
			start: 'top 80%',
			end: 'bottom 20%', // control how long the animation takes place
			scrub: true, // <-- this makes it linked to scroll
		},
	})
		.to(header.value, {
			x: 0,
			opacity: 1,
			duration: 1, // acts like weight of animation
			ease: 'power3.out',
		})
		.to(
			desc.value,
			{
				x: 0,
				opacity: 1,
				duration: 1,
				ease: 'power3.out',
			},
			'-=0.5',
		)
		.to(
			button.value,
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
			},
			'-=0.3',
		)
})
</script>
