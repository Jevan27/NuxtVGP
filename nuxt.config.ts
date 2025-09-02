import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	ssr: false,
	future: { compatibilityVersion: 4 },
	build: { transpile: ['vuetify'] },
	imports: { dirs: ['./stores'] },
	css: ['@/assets/css/main.css'],

	app: {
		baseURL: '/', // default, but keep it explicit
	},

	apollo: {
		autoImports: true,
		proxyCookies: true,
		clients: {
			default: { httpEndpoint: 'https://spacex-production.up.railway.app/' },
		},
	},
	nitro: {
		preset: 'vercel',
	},
	vite: {
		optimizeDeps: {
			include: ['graphql-tag'],
		},
		plugins: [vuetify()],
	},

	modules: [
		'@nuxtjs/apollo',
		['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
		'@nuxtjs/tailwindcss',
	],
	compatibilityDate: '2024-11-11',
})
