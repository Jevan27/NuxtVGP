<template>
	<nav
		class="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-20 bg-[#010101] md:bg-transparent"
	>
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

		<!-- Desktop Navigation Links -->
		<ul
			ref="navLinks"
			class="hidden md:flex space-x-8 text-white font-semibold text-base md:text-lg lg:text-xl"
		>
			<li><NuxtLink to="/" class="nav-item">Home</NuxtLink></li>
			<li><NuxtLink to="/launches" class="nav-item">Launches</NuxtLink></li>
			<li><NuxtLink to="/rockets" class="nav-item">Rockets</NuxtLink></li>
			<li><NuxtLink to="/favorites" class="nav-item">Favorites</NuxtLink></li>
		</ul>

		<!-- Mobile Menu Button -->
		<button class="md:hidden text-white focus:outline-none" @click="toggleMobileMenu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-8 w-8"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>

		<!-- Mobile Navigation Menu -->
		<transition name="slide-fade">
			<ul
				v-if="isMobileOpen"
				ref="mobileMenu"
				class="absolute top-full left-0 w-full bg-black/90 flex flex-col space-y-6 px-6 py-6 text-white font-semibold text-base"
			>
				<li><NuxtLink to="/" class="nav-item" @click="closeMobileMenu">Home</NuxtLink></li>
				<li>
					<NuxtLink to="/launches" class="nav-item" @click="closeMobileMenu">Launches</NuxtLink>
				</li>
				<li><NuxtLink to="/rockets" class="nav-item" @click="closeMobileMenu">Rockets</NuxtLink></li>
				<li>
					<NuxtLink to="/favorites" class="nav-item" @click="closeMobileMenu">Favorites</NuxtLink>
				</li>
			</ul>
		</transition>
	</nav>
</template>

<script setup>
import { gsap } from 'gsap'
import { nextTick, onMounted, ref } from 'vue'

const logo = ref(null)
const navLinks = ref(null)
const mobileMenu = ref(null)
const isMobileOpen = ref(false)

onMounted(() => {
	// Animate logo
	gsap.from(logo.value, {
		duration: 1,
		y: -50,
		opacity: 0,
		ease: 'bounce.out',
	})

	// Animate desktop nav links
	if (navLinks.value) {
		gsap.from(navLinks.value.children, {
			duration: 1,
			opacity: 0,
			y: -20,
			stagger: 0.2,
			ease: 'power2.out',
		})

		// Hover effects
		Array.from(navLinks.value.children).forEach((link) => {
			link.addEventListener('mouseenter', () => {
				gsap.to(link, { y: -3, duration: 0.3, ease: 'power2.out' })
			})
			link.addEventListener('mouseleave', () => {
				gsap.to(link, { y: 0, duration: 0.3, ease: 'power2.out' })
			})
		})
	}
})

// Toggle mobile menu
const toggleMobileMenu = async () => {
	isMobileOpen.value = !isMobileOpen.value
	await nextTick()
	if (isMobileOpen.value && mobileMenu.value) {
		gsap.from(mobileMenu.value.children, {
			duration: 0.6,
			opacity: 0,
			y: -10,
			stagger: 0.15,
			ease: 'power2.out',
		})
	}
}

const closeMobileMenu = () => {
	isMobileOpen.value = false
}
</script>

<style scoped>
.nav-item {
	cursor: pointer;
	transition: color 0.3s ease;
}

.slide-fade-enter-active {
	transition: all 0.4s ease;
}
.slide-fade-leave-active {
	transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
