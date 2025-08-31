<!-- eslint-disable vue/valid-v-slot -->
<template>
	<section class="relative w-full min-h-screen overflow-hidden">
		<!-- Background Video -->
		<video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
			<source src="/videos/rockets_bg.mp4" type="video/mp4" />
		</video>

		<!-- Dark overlay -->
		<div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>

		<!-- Content -->
		<div class="relative z-10 flex items-center justify-start h-full p-8">
			<div class="w-full md:w-2/3 lg:w-1/2">
				<h2 class="text-4xl font-bold mb-6 text-white">SpaceX Rockets</h2>

				<v-card class="bg-white/90 rounded-xl shadow-xl overflow-hidden">
					<!-- Loading + Error States -->
					<div v-if="pending" class="p-4">Loading rockets...</div>
					<div v-else-if="error" class="p-4 text-red-600">{{ error.message }}</div>

					<!-- Table -->
					<v-data-table
						v-else
						:headers="headers"
						:items="rockets"
						class="elevation-1"
						density="comfortable"
					>
						<template #item.mass="{ item }">{{ item.mass.kg.toLocaleString() }} kg</template>
						<template #item.height="{ item }">{{ item.height.feet }} ft</template>
						<template #item.diameter="{ item }">{{ item.diameter.meters }} m</template>
					</v-data-table>
				</v-card>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import gql from 'graphql-tag'

const headers = [
	{ text: 'Name', value: 'name' },
	{ text: 'First Flight', value: 'first_flight' },
	{ text: 'Stages', value: 'stages' },
	{ text: 'Mass', value: 'mass' },
	{ text: 'Height', value: 'height' },
	{ text: 'Diameter', value: 'diameter' },
	{ text: 'Description', value: 'description' },
	{ text: 'Country', value: 'country' },
]

const query = gql`
	query Rockets {
		rockets {
			id
			name
			first_flight
			stages
			mass {
				kg
			}
			height {
				feet
			}
			diameter {
				meters
			}
			description
			country
		}
	}
`

const { data, pending, error } = useAsyncQuery<{
	rockets: {
		id: string
		name: string
		first_flight: string
		stages: number
		mass: { kg: number }
		height: { feet: number }
		diameter: { meters: number }
		description: string
		country: string
	}[]
}>(query)

const rockets = computed(() => data.value?.rockets ?? [])
</script>
