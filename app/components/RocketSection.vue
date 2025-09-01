<!-- eslint-disable vue/valid-v-slot -->
<template>
	<section
		ref="section"
		class="relative w-full min-h-screen overflow-hidden bg-black bg-cover bg-center"
		style="background-image: url('/images/launches.png')"
	>
		<!-- Dark overlay -->
		<div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>

		<!-- Content -->
		<div class="relative z-10 flex justify-end items-center min-h-screen p-8">
			<!-- Right content -->
			<div class="w-full md:w-2/3 lg:w-1/2 text-left max-w-xl">
				<h2 ref="header" class="text-5xl font-bold mb-10 text-white">SpaceX Rockets</h2>
				<p ref="desc" class="text-lg text-gray-200 mb-10">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
					libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
					imperdiet.
				</p>

				<v-btn
					ref="button"
					class="bg-gray-500 hover:bg-black text-black hover:!text-white rounded-xl px-6 py-3 font-semibold text-lg shadow-lg transition-colors duration-300"
				>
					See All Rockets
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
	// Start elements off-screen to the right
	gsap.set([header.value, desc.value], { opacity: 0, x: 100 })
	gsap.set(button.value, { opacity: 0, y: 20 })

	// Timeline tied to scroll progress
	gsap.timeline({
		scrollTrigger: {
			trigger: section.value,
			start: 'top 80%', // animation begins when section enters
			end: 'bottom 20%', // animation completes near bottom
			scrub: true, // <-- ties animation progress to scroll
		},
	})
		// Slide in header
		.to(header.value, {
			x: 0,
			opacity: 1,
			duration: 1,
			ease: 'power3.out',
		})
		// Slide in description
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
		// Fade in button
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
