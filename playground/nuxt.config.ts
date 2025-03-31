export default defineNuxtConfig({
	modules: ['../src/module'],
	devtools: {
		enabled: true,
	},

	css: ['~/assets/css/main.css'],

	future: {
		compatibilityVersion: 4,
	},
	compatibilityDate: '2024-11-12',
});
