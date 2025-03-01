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
import { useColorMode } from '#imports'

const router = useRouter()
const appConfig = useAppConfig()
const colorMode = useColorMode()

const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	}
})


const isCommandPaletteOpen = ref(false)

function onSelect(item: any) {
	router.push(item.to)
}

defineShortcuts({
	meta_k: () => isCommandPaletteOpen.value = true
})
</script>