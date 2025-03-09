<template>
	<DApp>
		<USelect
			:items="items"
			value-key="path"
			@update:model-value="navigateToComponent"
		/>
		<NuxtPage />
	</DApp>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const items = computed(() => {
	const modules = import.meta.glob('./pages/components/*.vue');

	return Object.keys(modules).map((path) => {
		const name = path.split('/').pop()!.replace('.vue', '');
		return {
			label: name,
			path: path,
			component: modules[path],
		};
	});
});

const router = useRouter();

const navigateToComponent = (value: string) => {
	if (value) {
		router.push(value);
	}
};
</script>
