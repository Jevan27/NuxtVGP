import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
	state: () => ({
		favorites: JSON.parse(localStorage.getItem('favorites') || '[]') as any[],
	}),
	getters: {
		allFavorites: (state) => state.favorites,
		isFavorite: (state) => (missionName: string) =>
			state.favorites.some((l) => l.mission_name === missionName),
	},
	actions: {
		addFavorite(launch: any) {
			if (!this.favorites.find((l) => l.mission_name === launch.mission_name)) {
				this.favorites.push(launch)
				localStorage.setItem('favorites', JSON.stringify(this.favorites))
			}
		},
		removeFavorite(missionName: string) {
			this.favorites = this.favorites.filter((l) => l.mission_name !== missionName)
			localStorage.setItem('favorites', JSON.stringify(this.favorites))
		},
		clearFavorites() {
			this.favorites = []
			localStorage.setItem('favorites', JSON.stringify(this.favorites))
		},
	},
})
