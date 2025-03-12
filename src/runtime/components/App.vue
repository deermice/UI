<template>
	<UApp
		v-bind="props"
		:style="props.scrollBody ? 'scrollbar-gutter: auto' : 'scrollbar-gutter: stable'"
	>
		<div :class="baseTheme()">
			<slot />
		</div>
	</UApp>
</template>

<script lang="ts">
import { tv } from 'tailwind-variants';

import type { AppProps as NuxtAppProps } from '@nuxt/ui/components/App.vue';

const baseTheme = tv({
	base: 'flex flex-col min-h-dvh',
});

export type AppProps = NuxtAppProps;

export interface AppSlots {
	default(props?: object): any;
}
</script>

<script setup lang="ts">
const props = defineProps<AppProps>();
defineSlots<AppSlots>();
</script>
