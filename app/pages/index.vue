<!-- eslint-disable unused-imports/no-unused-vars -->

<template>
	<section class="relative w-full h-screen overflow-hidden">
		<navbar />
		<hero-banner />
	</section>
	<LaunchesSection />
	<RocketSection />
</template>

<script lang="ts" setup>
import LaunchesSection from '~/components/LaunchesSection.vue'
</script>
