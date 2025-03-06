<template>
	<DApp>
		<USelector
			v-model="selectedComponent"
			:options="componentOptions"
			@change="navigateToComponent"
		/>
		<NuxtPage />
	</DApp>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const componentOptions = ref([]);
const selectedComponent = ref(null);
const router = useRouter();

onMounted(async () => {
	const components = await import.meta.glob('../pages/components/*.vue');
	componentOptions.value = Object.keys(components).map((path) => {
		const name = path.split('/').pop().replace('.vue', '');
		return { label: name, value: path.replace('../pages', '').replace('.vue', '') };
	});
});

const navigateToComponent = () => {
	if (selectedComponent.value) {
		router.push(selectedComponent.value);
	}
};
</script>
