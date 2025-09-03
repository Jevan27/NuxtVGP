<!-- src/components/Hero.vue -->
<template>
	<div class="relative h-screen w-full overflow-hidden">
		<!-- Background video -->
		<video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
			<source
				src="https://5d1ixzxi6ukfni7k.public.blob.vercel-storage.com/videos/spacex_hero.mp4"
				type="video/mp4"
			/>
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

<script setup lang="ts">
import { initHeroAnimations } from '@/animations/heroAnim'
import { onMounted, ref } from 'vue'

const title = ref<HTMLElement | null>(null)
const subtitle = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)

onMounted(() => {
	if (title.value && subtitle.value && content.value) {
		initHeroAnimations({ title: title.value, subtitle: subtitle.value, content: content.value })
	}
})
</script>
