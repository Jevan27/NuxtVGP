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
		<div class="relative z-10 text-block-wrapper-left min-h-screen p-6 sm:p-8">
			<div class="max-w-2xl w-full md:w-[600px] md:ml-12">
				<h2
					ref="header"
					class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight"
				>
					{{ title }}
				</h2>

				<p
					ref="desc"
					class="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 leading-relaxed"
				>
					{{ description }}
				</p>

				<v-btn
					v-show="showButton"
					ref="button"
					to="/launches"
					class="bg-gray-500 hover:bg-black text-black hover:!text-white rounded-xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 font-semibold text-sm sm:text-base md:text-lg shadow-lg transition-colors duration-300"
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
