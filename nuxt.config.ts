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

	runtimeConfig: {
		blobReadWriteToken: process.env.BLOB_READ_WRITE_TOKEN,
		public: {
			blobBaseUrl:
				process.env.BLOB_BASE_URL ||
				process.env.NUXT_PUBLIC_BLOB_BASE_URL ||
				'https://5d1ixzxi6ukfni7k.public.blob.vercel-storage.com',
			spacexApiUrl:
				process.env.SPACEX_GRAPHQL_URL ||
				process.env.NUXT_PUBLIC_SPACEX_API_URL ||
				'https://spacex-production.up.railway.app/',
		},
	},

	apollo: {
		autoImports: true,
		proxyCookies: true,
		clients: {
			default: {
				httpEndpoint:
					process.env.SPACEX_GRAPHQL_URL ||
					process.env.NUXT_PUBLIC_SPACEX_API_URL ||
					'https://spacex-production.up.railway.app/',
			},
		},
	},
	nitro: {
		preset: 'vercel',
	},
	devtools: {
		enabled: false,
	},
	vite: {
		optimizeDeps: {
			include: ['graphql-tag'],
			exclude: ['vite-plugin-inspect'],
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
