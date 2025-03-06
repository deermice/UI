<template>
	<template v-if="!$route.path.startsWith('/__nuxt_ui__')">
		<UApp>
			<NuxtPage />
		</UApp>
	</template>
	<template v-else>
		<NuxtPage />
	</template>
</template>

<script setup lang="ts">

</script>
