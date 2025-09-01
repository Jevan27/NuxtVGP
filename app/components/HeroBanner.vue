<!-- eslint-disable vue/no-unused-refs -->
<template>
	<div class="relative h-screen w-full overflow-hidden">
		<!-- Background video -->
		<video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
			<source src="/videos/spacex_hero.mp4" type="video/mp4" />
		</video>

		<!-- Dark overlay -->
		<div class="absolute top-0 left-0 w-full h-full bg-black/40"></div>

		<!-- Content -->
		<div
			ref="content"
			class="relative z-10 flex items-center justify-center h-full text-center text-white"
		>
			<div>
				<h1 ref="title" class="text-5xl md:text-7xl font-bold">Welcome to SpaceX</h1>
				<p ref="subtitle" class="mt-4 text-lg md:text-2xl">Revolutionizing space technology</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const title = ref(null)
const subtitle = ref(null)
const content = ref(null)

onMounted(() => {
	// 🔹 1) Intro animation on page load
	const intro = gsap.timeline()
	intro.from(title.value, {
		y: 80,
		opacity: 0,
		duration: 1.2,
		ease: 'power4.out',
	})
	intro.from(
		subtitle.value,
		{
			y: 40,
			opacity: 0,
			duration: 1,
			ease: 'power2.out',
		},
		'-=0.6', // overlap with title
	)

	// 🔹 2) Scroll scrub animation (fade out while scrolling)
	gsap.timeline({
		scrollTrigger: {
			trigger: content.value,
			start: 'top top', // when content hits top of viewport
			end: 'bottom top', // until it scrolls out
			scrub: true, // smooth link to scroll
		},
	})
		.fromTo(
			title.value,
			{ y: 0, opacity: 1 }, // starting state
			{ y: -80, opacity: 0, ease: 'power4.out' }, // end state
		)
		.fromTo(
			subtitle.value,
			{ y: 0, opacity: 1 }, // starting state
			{ y: -40, opacity: 0, ease: 'power2.out' }, // end state
			'-=0.6',
		)
})
</script>
