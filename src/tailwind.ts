import { createResolver, installModule, useNuxt } from '@nuxt/kit';
import type { ModuleOptions } from './module';

export default function installTailwind(
	moduleOptions: ModuleOptions,
	nuxt = useNuxt(),
	resolve = createResolver(import.meta.url).resolve
): Promise<void> {
	return installModule('@nuxtjs/tailwindcss', {
		cssPath: false,
		configPath: resolve('../tailwind.config'),
	});
}
