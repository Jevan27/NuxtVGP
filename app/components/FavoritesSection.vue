<template>
	<div class="min-h-screen bg-[#010101] p-6 text-white">
		<h1 class="text-4xl font-bold mb-8 tracking-wide text-center">Favorite Launches</h1>

		<div class="flex justify-end mb-6">
			<v-btn color="red" variant="outlined" @click="favoritesStore.clearFavorites">Clear All</v-btn>
		</div>

		<v-data-table
			:headers="headers"
			:items="favoritesStore.allFavorites"
			class="custom-table bg-transparent text-white"
		>
			<template #no-data>
				<v-alert type="info" border="start" variant="tonal" class="text-white">
					No favorites yet.
				</v-alert>
			</template>
		</v-data-table>
	</div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'

const favoritesStore = useFavoritesStore()

const headers = [
	{ title: 'Mission', key: 'mission_name' },
	{ title: 'Rocket', key: 'rocket.rocket_name' },
	{ title: 'Details', key: 'details' },
	{ title: 'Launch Site', key: 'launch_site.site_name' },
	{ title: 'Date', key: 'launch_date_local' },
]
</script>
