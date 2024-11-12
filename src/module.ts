import { defineNuxtModule, createResolver, installModule, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'deermice-components',
		configKey: 'deermiceComponents',
	},
	// Default configuration options of the Nuxt module
	defaults: {},
	setup(_options, _nuxt) {
		const resolver = createResolver(import.meta.url)
		// It will add @nuxtjs/tailwindcss to the project
		await installModule('@nuxtjs/tailwindcss', {
			/**
			 * Here, you specify where your config is.
			 * By default, the module have a configPath relative
			 * to the current path, ie the playground !
			 * (or the app using your module)
			 */
			cssPath: options.css ? resolver.resolve("./runtime/assets/css/tailwind.css") : false,
			configPath: resolver.resolve('../tailwind.config'),
		})

		await addComponentsDir({
			path: resolver.resolve("./runtime/components"), // path of components
			pathPrefix: false, // Prefix component name by its path.
			prefix: '', // Prefix all matched components.
			global: true, // Registers components to be globally available.
		});
	},
})
