<!-- eslint-disable vue/no-useless-v-bind -->
<!-- eslint-disable vue/valid-v-slot -->
<template>
	<div class="min-h-screen bg-[#010101] p-6 text-white">
		<h1 class="text-4xl font-bold mb-8 tracking-wide text-center">Favorite Launches</h1>

		<!-- Top actions -->
		<div class="flex justify-between mb-6">
			<YearFilter v-model="selectedYear" :years="years" />

			<!-- Clear all button -->
			<v-btn color="red" variant="outlined" @click="openClearAllDialog">
				<v-icon start>mdi-delete</v-icon>
				Clear All
			</v-btn>
		</div>

		<v-data-table
			:headers="headers"
			:items="filteredFavorites"
			class="custom-table favorites-table bg-transparent text-white"
		>
			<template #item.launch_date_local="{ item }">
				<span class="whitespace-nowrap">
					{{
						item.launch_date_local
							? new Date(item.launch_date_local).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})
							: '—'
					}}
				</span>
			</template>

			<template #item.rocket="{ item }">
				{{ item.rocket?.rocket_name ?? '—' }}
			</template>

			<template #item.launch_site="{ item }">
				{{ item.launch_site?.site_name ?? '—' }}
			</template>

			<!-- Row delete -->
			<template #item.actions="{ item }">
				<v-icon color="red" class="cursor-pointer" @click="openDeleteRowDialog(item)">
					mdi-delete
				</v-icon>
			</template>

			<template #no-data>
				<v-alert type="info" border="start" variant="tonal" class="text-white">
					No favorites yet.
				</v-alert>
			</template>
		</v-data-table>

		<!-- ✅ Confirmation dialogs -->
		<ConfirmDialog
			v-model="showClearAllDialog"
			title="Delete All Favorites"
			message="Do you want to delete all your favorites?"
			@confirm="favoritesStore.clearFavorites"
		/>

		<ConfirmDialog
			v-model="showDeleteRowDialog"
			:title="`Delete Launch`"
			:message="`Do you want to remove mission '${rowToDelete?.mission_name}' as your favorite?`"
			@confirm="deleteRow"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import YearFilter from '@/components/YearFilter.vue'
import { useFavoritesStore } from '@/stores/favorites'
import ConfirmDialog from './ConfirmDialog.vue'

const favoritesStore = useFavoritesStore()

const headers = [
	{ title: 'Mission', key: 'mission_name' },
	{ title: 'Rocket', key: 'rocket' },
	{ title: 'Details', key: 'details' },
	{ title: 'Launch Site', key: 'launch_site' },
	{ title: 'Date', key: 'launch_date_local' },
	{ title: 'Actions', key: 'actions', sortable: false },
]

const years = computed(() => {
	const yearSet = new Set(
		favoritesStore.allFavorites
			.filter((f) => f.launch_date_local)
			.map((f) => new Date(f.launch_date_local).getFullYear()),
	)
	return Array.from(yearSet).sort((a, b) => b - a)
})

const selectedYear = ref<number | null>(null)
const filteredFavorites = computed(() => {
	if (!selectedYear.value) return favoritesStore.allFavorites
	return favoritesStore.allFavorites.filter(
		(f) => new Date(f.launch_date_local).getFullYear() === selectedYear.value,
	)
})

// ✅ Confirmation dialog states
const showClearAllDialog = ref(false)
const showDeleteRowDialog = ref(false)
const rowToDelete = ref<any>(null)

function openClearAllDialog() {
	showClearAllDialog.value = true
}

function openDeleteRowDialog(item: any) {
	rowToDelete.value = item
	showDeleteRowDialog.value = true
}

function deleteRow() {
	if (rowToDelete.value) {
		favoritesStore.removeFavorite(rowToDelete.value.mission_name)
		rowToDelete.value = null
	}
}
</script>
