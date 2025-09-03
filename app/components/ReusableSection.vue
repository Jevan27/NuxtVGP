<!-- src/components/ReusableSection.vue -->
<template>
	<section ref="section" class="relative w-full min-h-screen overflow-hidden bg-black bg-cover bg-center">
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
		<div
			class="relative z-10 min-h-screen p-6 sm:p-8"
			:class="
				alignment === 'left'
					? 'text-block-wrapper-left md:ml-12'
					: 'text-block-wrapper-right md:mr-12'
			"
		>
			<div class="max-w-2xl w-full md:w-[600px]">
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
					v-if="showButton"
					ref="button"
					:to="buttonLink"
					class="bg-gray-500 hover:bg-black text-black hover:!text-white rounded-xl px-6 py-3 font-semibold text-lg shadow-lg transition-colors duration-300"
				>
					{{ buttonText }}
				</v-btn>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initLaunchSectionAnimations } from '@/animations/launchesSectionAnim'
import { initRocketSectionAnimations } from '@/animations/rocketSectionAnim'

// ✅ Define props
const props = defineProps<{
	title: string
	description: string
	alignment?: 'left' | 'right'
	backgroundType?: 'video' | 'image'
	backgroundSrc: string
	showButton?: boolean
	buttonText?: string
	buttonLink?: string
	animationType?: 'launch' | 'rocket'
}>()

// ✅ Refs
const section = ref<HTMLElement | null>(null)
const header = ref<HTMLElement | null>(null)
const desc = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)

// ✅ Animation setup
onMounted(() => {
	if (!section.value || !header.value || !desc.value) return

	if (props.animationType === 'launch') {
		initLaunchSectionAnimations({
			section: section.value,
			header: header.value,
			desc: desc.value,
			button: button.value ?? null, // ✅ safe pass
		})
	} else {
		initRocketSectionAnimations({
			section: section.value,
			header: header.value,
			desc: desc.value,
			button: button.value ?? null, // ✅ safe pass
		})
	}
})
</script>
