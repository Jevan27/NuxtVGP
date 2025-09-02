<template>
	<nav class="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-20">
		<!-- Logo -->
		<div class="flex items-center">
			<NuxtLink to="/">
				<img
					ref="logo"
					src="/images/spacex_logo.png"
					alt="SpaceX Logo"
					class="h-10 w-auto cursor-pointer"
				/>
			</NuxtLink>
		</div>

		<!-- Navigation Links -->
		<ul ref="navLinks" class="flex space-x-8 text-white font-semibold">
			<li><NuxtLink to="/" class="nav-item">Home</NuxtLink></li>
			<li><NuxtLink to="/launches" class="nav-item">Launches</NuxtLink></li>
			<li><NuxtLink to="/rockets" class="nav-item">Rockets</NuxtLink></li>
			<li><NuxtLink to="/favorites" class="nav-item">Favorites</NuxtLink></li>
		</ul>
	</nav>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const logo = ref(null)
const navLinks = ref(null)

onMounted(() => {
	// Animate logo
	gsap.from(logo.value, {
		duration: 1,
		y: -50,
		opacity: 0,
		ease: 'bounce.out',
	})

	// Animate nav links on page load
	gsap.from(navLinks.value.children, {
		duration: 1,
		opacity: 0,
		y: -20,
		stagger: 0.2,
		ease: 'power2.out',
	})

	// Add hover effect for nav items
	Array.from(navLinks.value.children).forEach((link) => {
		link.addEventListener('mouseenter', () => {
			gsap.to(link, {
				y: -3,
				duration: 0.3,
				ease: 'power2.out',
			})
		})
		link.addEventListener('mouseleave', () => {
			gsap.to(link, {
				y: 0,
				duration: 0.3,
				ease: 'power2.out',
			})
		})
	})
})
</script>

<style scoped>
.nav-item {
	cursor: pointer;
}
</style>
