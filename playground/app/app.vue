<template>
	<DApp>
		<USelect
			placeholder="Navigate To Component Test"
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

	const components = Object.keys(modules).map((inputPath) => {
		const name = inputPath.split('/').pop()!.replace('.vue', '');
		const path = `/components/${name.toLowerCase()}`;
		return {
			label: name,
			path: path,
		};
	});

	return [
		{
			label: 'Index',
			path: '/',
		},
	].concat(components);
});

const router = useRouter();

const navigateToComponent = (value: string) => {
	if (value) {
		router.push(value);
	}
};
</script>
