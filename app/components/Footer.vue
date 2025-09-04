<template>
	<footer class="bg-[#010101] text-white py-8">
		<div class="container mx-auto px-4">
			<!-- Mobile Layout (default) -->
			<div class="grid grid-cols-1 gap-8 mb-8 md:hidden">
				<!-- Row 1: Logo -->
				<div class="flex items-center justify-center">
					<img src="/images/spacex_logo.png" alt="SpaceX Logo" class="h-16 w-auto" />
				</div>

				<!-- Row 2: QuickLinks + Address side by side -->
				<div class="grid grid-cols-2 gap-8 text-left">
					<!-- Quick Links -->
					<div>
						<h3 class="font-semibold mb-4 text-lg">Quick Links</h3>
						<ul class="space-y-2">
							<li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
							<li><NuxtLink to="/launches" class="hover:underline">Launches</NuxtLink></li>
							<li><NuxtLink to="/rockets" class="hover:underline">Rockets</NuxtLink></li>
							<li><NuxtLink to="/favorites" class="hover:underline">Favorites</NuxtLink></li>
						</ul>
					</div>

					<!-- Address + Socials -->
					<div>
						<h3 class="font-semibold mb-4 text-lg">Address</h3>
						<p class="mb-4">
							123 Space St.
							<br />
							Galaxy City, Universe
						</p>

						<div class="flex space-x-4">
							<a
								href="https://www.facebook.com/SpaceXLite"
								target="_blank"
								aria-label="Facebook"
								class="hover:text-gray-400"
							>
								<Facebook class="w-5 h-5" />
							</a>
							<a
								href="https://x.com/SpaceX"
								target="_blank"
								aria-label="Twitter"
								class="hover:text-gray-400"
							>
								<Twitter class="w-5 h-5" />
							</a>
							<a
								href="https://github.com/Jevan27/NuxtVGP"
								target="_blank"
								aria-label="Github"
								class="hover:text-gray-400"
							>
								<Github class="w-5 h-5" />
							</a>
							<a
								href="https://www.instagram.com/spacex/"
								target="_blank"
								aria-label="Instagram"
								class="hover:text-gray-400"
							>
								<Instagram class="w-5 h-5" />
							</a>
							<a
								href="https://www.spacex.com"
								target="_blank"
								aria-label="Website"
								class="hover:text-gray-400"
							>
								<Globe class="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Desktop Layout (>= md) -->
			<div class="hidden md:grid md:grid-cols-3 gap-8 mb-8">
				<!-- Col 1: Logo -->
				<div class="flex items-center justify-center">
					<img src="/images/spacex_logo.png" alt="SpaceX Logo" class="h-16 w-auto" />
				</div>

				<!-- Col 2: Quick Links -->
				<div class="text-left">
					<h3 class="font-semibold mb-4 text-lg">Quick Links</h3>
					<ul class="space-y-2">
						<li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
						<li><NuxtLink to="/launches" class="hover:underline">Launches</NuxtLink></li>
						<li><NuxtLink to="/rockets" class="hover:underline">Rockets</NuxtLink></li>
						<li><NuxtLink to="/favorites" class="hover:underline">Favorites</NuxtLink></li>
					</ul>
				</div>

				<!-- Col 3: Address -->
				<div class="text-left">
					<h3 class="font-semibold mb-4 text-lg">Address</h3>
					<p class="mb-4">
						123 Space St.
						<br />
						Galaxy City, Universe
					</p>

					<div class="flex space-x-4">
						<a
							href="https://www.facebook.com/SpaceXLite"
							target="_blank"
							aria-label="Facebook"
							class="hover:text-gray-400"
						>
							<Facebook class="w-5 h-5" />
						</a>
						<a
							href="https://x.com/SpaceX"
							target="_blank"
							aria-label="Twitter"
							class="hover:text-gray-400"
						>
							<Twitter class="w-5 h-5" />
						</a>
						<a
							href="https://github.com/Jevan27/NuxtVGP"
							target="_blank"
							aria-label="Github"
							class="hover:text-gray-400"
						>
							<Github class="w-5 h-5" />
						</a>
						<a
							href="https://www.instagram.com/spacex/"
							target="_blank"
							aria-label="Instagram"
							class="hover:text-gray-400"
						>
							<Instagram class="w-5 h-5" />
						</a>
						<a
							href="https://www.spacex.com"
							target="_blank"
							aria-label="Website"
							class="hover:text-gray-400"
						>
							<Globe class="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>

			<!-- Copyright -->
			<div class="border-t border-gray-700 pt-4 text-center text-sm">
				© 2025 SpaceX. All rights reserved.
			</div>
		</div>
	</footer>
</template>

<script setup>
import { Facebook, Github, Globe, Instagram, Twitter } from 'lucide-vue-next'
</script>
