<!-- src/components/RocketSection.vue -->
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
					to="/rockets"
					class="bg-gray-500 hover:bg-black text-black hover:!text-white rounded-xl px-6 py-3 font-semibold text-lg shadow-lg transition-colors duration-300"
				>
					See All Rockets
				</v-btn>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initRocketSectionAnimations } from '@/animations/rocketSectionAnim'

const section = ref<HTMLElement | null>(null)
const header = ref<HTMLElement | null>(null)
const desc = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)

onMounted(() => {
	if (section.value && header.value && desc.value && button.value) {
		initRocketSectionAnimations({
			section: section.value,
			header: header.value,
			desc: desc.value,
			button: button.value,
		})
	}
})
</script>
