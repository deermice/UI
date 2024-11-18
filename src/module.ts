import { defineNuxtModule, createResolver, installModule, addComponentsDir } from '@nuxt/kit';
import { name, version } from '../package.json';
import installTailwind from './tailwind';

// Module options TypeScript interface definition
export interface ModuleOptions {
	prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name,
		version,
		configKey: 'components',
	},
	// Default configuration options of the Nuxt module
	defaults: {
		prefix: 'D',
	},
	async setup(options, nuxt) {
		const { resolve } = createResolver(import.meta.url);

		const runtimeDir = resolve('./runtime');

		// Modules
		await installModule('@nuxt/icon');
		await installModule('@nuxtjs/color-mode', { classSuffix: '' });
		await installTailwind(options, nuxt, resolve);

		// Components

		await addComponentsDir({
			path: resolve(runtimeDir, 'components'),
			pathPrefix: false,
			prefix: options.prefix,
			global: true,
		});
	},
});
