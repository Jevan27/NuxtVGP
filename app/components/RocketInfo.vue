<!-- eslint-disable vue/valid-v-slot -->
<template>
	<div class="min-h-screen bg-[#010101] p-6 text-white">
		<!-- ✅ Page title -->
		<h1 class="text-4xl font-bold mb-8 tracking-wide text-center">Rockets</h1>

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
			:items="paginatedRockets"
			:loading="pending"
			class="custom-table bg-transparent text-white"
		>
			<!-- Format first flight date -->
			<template #item.first_flight="{ item }">
				<span class="whitespace-nowrap">
					{{
						item.first_flight
							? new Date(item.first_flight).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})
							: '—'
					}}
				</span>
			</template>

			<!-- Mass -->
			<template #item.mass="{ item }">
				{{ item.mass?.kg ? `${item.mass.kg} kg` : '—' }}
			</template>

			<!-- Height -->
			<template #item.height="{ item }">
				{{ item.height?.feet ? `${item.height.feet} ft` : '—' }}
			</template>

			<!-- Diameter -->
			<template #item.diameter="{ item }">
				{{ item.diameter?.meters ? `${item.diameter.meters} m` : '—' }}
			</template>

			<!-- No data -->
			<template #no-data>
				<v-alert type="info" border="start" variant="tonal" class="text-white">
					No rockets found.
				</v-alert>
			</template>
		</v-data-table>
	</div>
</template>

<script lang="ts" setup>
import gql from 'graphql-tag'

const headers = [
	{ title: 'Name', key: 'name' },
	{ title: 'Stages', key: 'stages' },
	{ title: 'Description', key: 'description' },
	{ title: 'Mass', key: 'mass' },
	{ title: 'Height', key: 'height' },
	{ title: 'Diameter', key: 'diameter' },
	{ title: 'First Flight', key: 'first_flight' },
]

const query = gql`
	query Rockets {
		rockets {
			name
			first_flight
			stages
			description
			mass {
				kg
			}
			height {
				feet
			}
			diameter {
				meters
			}
		}
	}
`

const { data, pending } = useAsyncQuery<{
	rockets: {
		name: string
		first_flight: string
		stages: number
		description: string
		mass: { kg: number }
		height: { feet: number }
		diameter: { meters: number }
	}[]
}>(query)

const rockets = computed(() => data.value?.rockets ?? [])

// ✅ Extract unique years from first_flight
const years = computed(() => {
	const yearSet = new Set(
		rockets.value.filter((r) => r.first_flight).map((r) => new Date(r.first_flight).getFullYear()),
	)
	return Array.from(yearSet).sort((a, b) => b - a) // descending
})

const selectedYear = ref<number | null>(null)

// ✅ Filter rockets by selected year
const filteredRockets = computed(() => {
	if (!selectedYear.value) return rockets.value
	return rockets.value.filter((r) => new Date(r.first_flight).getFullYear() === selectedYear.value)
})

// ✅ Currently all filtered rockets shown
const paginatedRockets = computed(() => filteredRockets.value)
</script>
