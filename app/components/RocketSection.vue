<template>
	<section
		ref="section"
		class="relative w-full min-h-screen overflow-hidden bg-black bg-cover bg-center"
		style="background-image: url('/images/launches.png')"
	>
		<!-- Dark overlay -->
		<div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>

		<!-- Content -->
		<div class="relative z-10 text-block-wrapper-right min-h-screen p-6 mr-12 sm:p-8">
			<div class="max-w-2xl w-full md:w-[600px] md:ml-12">
				<h2
					ref="header"
					class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white"
				>
					SpaceX Rockets
				</h2>
				<p ref="desc" class="text-base sm:text-lg md:text-xl text-gray-200 mb-10">
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
