<!-- eslint-disable vue/valid-v-slot -->
<template>
	<div class="min-h-screen bg-[#010101] p-6 text-white">
		<!-- ✅ Page title -->
		<h1 class="text-4xl font-bold mb-8 tracking-wide text-center">Launches</h1>

		<!-- ✅ Year filter (right aligned under title) -->
		<div class="flex justify-end mb-6">
			<div class="w-40">
				<v-select
					v-model="selectedYear"
					:items="years"
					label="Filter by Year"
					variant="outlined"
					density="comfortable"
					clearable
					class="custom-select text-sm"
				/>
			</div>
		</div>

		<v-data-table
			:headers="headers"
			:items="paginatedLaunches"
			:loading="pending"
			class="custom-table bg-transparent text-white"
		>
			<!-- Format fields -->
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

			<template #item.launch_site="{ item }">
				{{ item.launch_site?.site_name ?? '—' }}
			</template>

			<template #item.rocket="{ item }">
				{{ item.rocket?.rocket_name ?? '—' }}
			</template>

			<!-- No data -->
			<template #no-data>
				<v-alert type="info" border="start" variant="tonal" class="text-white">
					No launches found.
				</v-alert>
			</template>
			<template #item.favorite="{ item }">
				<v-icon
					:color="favoritesStore.isFavorite(item.mission_name) ? 'pink' : 'grey'"
					size="24"
					class="cursor-pointer"
					@click="toggleFavorite(item)"
				>
					{{ favoritesStore.isFavorite(item.mission_name) ? 'mdi-heart' : 'mdi-heart-outline' }}
				</v-icon>
			</template>
		</v-data-table>
	</div>
</template>

<script lang="ts" setup>
import gql from 'graphql-tag'
import { useFavoritesStore } from '@/stores/favorites'

const favoritesStore = useFavoritesStore()

const toggleFavorite = (item: any) => {
	if (favoritesStore.isFavorite(item.mission_name)) {
		favoritesStore.removeFavorite(item.mission_name)
	} else {
		favoritesStore.addFavorite(item)
	}
}

const headers = [
	{ title: 'Mission', key: 'mission_name' },
	{ title: 'Rocket', key: 'rocket' },
	{ title: 'Details', key: 'details' },
	{ title: 'Launch Site', key: 'launch_site' },
	{ title: 'Date', key: 'launch_date_local' },
	{ title: 'Favorite', key: 'favorite' },
]

const query = gql`
	query Launches {
		launches {
			mission_name
			launch_date_local
			launch_site {
				site_name
				site_name_long
			}
			rocket {
				rocket_name
			}
			details
		}
	}
`

const { data, pending } = useAsyncQuery<{
	launches: {
		mission_name: string
		launch_date_local: string
		launch_site: { site_name: string }
		rocket: { rocket_name: string }
		details: string
	}[]
}>(query)

const launches = computed(() => data.value?.launches ?? [])

// ✅ Extract unique years from launches
const years = computed(() => {
	const yearSet = new Set(launches.value.map((l) => new Date(l.launch_date_local).getFullYear()))
	return Array.from(yearSet).sort((a, b) => b - a) // sort descending
})

const selectedYear = ref<number | null>(null)

// ✅ Filtered launches based on year
const filteredLaunches = computed(() => {
	if (!selectedYear.value) return launches.value
	return launches.value.filter((l) => new Date(l.launch_date_local).getFullYear() === selectedYear.value)
})

// ✅ Controls how many rows are visible
const paginatedLaunches = computed(() => filteredLaunches.value)
</script>
