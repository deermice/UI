import {
	defineNuxtModule,
	addVitePlugin,
	createResolver,
	installModule,
	addImportsDir,
	addComponentsDir,
	addImports,
	addTemplate
} from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {
	prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'deermice-ui',
		configKey: 'deermice-ui',
	},
	// Default configuration options of the Nuxt module
	defaults: {
		prefix: 'D',
	},
	async setup(options, nuxt) {
		const { resolve } = createResolver(import.meta.url);

		nuxt.options.alias['#deermice'] = resolve('./runtime');

		// Modules
		await installModule('@nuxt/ui');

		// Plugins
		if (nuxt.options.builder === '@nuxt/vite-builder') {
			await import('@tailwindcss/vite').then((r) => addVitePlugin(r.default()))
		} else {
			nuxt.options.postcss.plugins['@tailwindcss/postcss'] = {}
		}

		// Components
		addComponentsDir({
			path: resolve('./runtime/components'),
			pathPrefix: true,
			prefix: options.prefix,
			global: true,
		});

		// Prose Overrides
		addComponentsDir({
			path: resolve('./runtime/prose'),
			pathPrefix: false,
			global: true,
		});

		// Utilities
		addImports([
			{ name: 'mapContentNavigation', from: resolve('./runtime/utils') },
			{ name: 'mapContentBreadcrumbs', from: resolve('./runtime/utils') },
		]);

		// Composables
		addImportsDir(resolve('./runtime/composables'));
	},
});
