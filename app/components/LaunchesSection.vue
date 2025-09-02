<!-- eslint-disable vue/valid-v-slot -->
<template>
	<section ref="section" class="relative w-full min-h-screen overflow-hidden">
		<!-- Background -->
		<div v-if="backgroundType === 'video'" class="absolute top-0 left-0 w-full h-full">
			<video autoplay muted loop playsinline class="w-full h-full object-cover bg-black">
				<source :src="backgroundSrc" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>

		<div
			v-else
			class="absolute top-0 left-0 w-full h-full bg-center bg-cover"
			:style="{ backgroundImage: `url(${backgroundSrc})` }"
		></div>

		<!-- Dark overlay -->
		<div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>

		<!-- Content -->
		<div class="relative z-10 flex items-center min-h-screen p-8">
			<!-- Left content -->
			<div class="w-full md:w-2/3 lg:w-1/2 text-left max-w-xl">
				<h2 ref="header" class="text-5xl font-bold mb-10 text-white">
					{{ title }}
				</h2>
				<p ref="desc" class="text-lg text-gray-200 mb-10">
					{{ description }}
				</p>

				<!-- Conditionally render button -->
				<v-btn
					v-show="showButton"
					ref="button"
					to="/launches"
					class="bg-gray-500 hover:bg-black text-black hover:!text-white rounded-xl px-6 py-3 font-semibold text-lg shadow-lg transition-colors duration-300"
				>
					See All Launches
				</v-btn>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'

// ✅ Props to make component reusable
defineProps<{
	title?: string
	description?: string
	showButton?: boolean
	backgroundType?: 'video' | 'image'
	backgroundSrc?: string
}>()

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const header = ref(null)
const desc = ref(null)
const button = ref(null)

onMounted(() => {
	// Set initial state
	gsap.set([header.value, desc.value], { opacity: 0, x: -100 })
	if (button.value) {
		gsap.set(button.value, { opacity: 0, y: 20 })
	}

	// Scroll-based animation
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: section.value,
			start: 'top 80%',
			end: 'bottom 20%',
			scrub: true,
		},
	})

	tl.to(header.value, {
		x: 0,
		opacity: 1,
		duration: 1,
		ease: 'power3.out',
	}).to(
		desc.value,
		{
			x: 0,
			opacity: 1,
			duration: 1,
			ease: 'power3.out',
		},
		'-=0.5',
	)

	if (button.value) {
		tl.to(
			button.value,
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
			},
			'-=0.3',
		)
	}
})
</script>
