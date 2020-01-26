<template  lang="pug">

v-img(:src="src" :alt="alt" transition="slide-y-transition" aspect-ratio=2.5)
    v-container(fluid)

        v-container.image-overlay
        p.text-overlay

</template>

<script>

export default {
    props: {
        src: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        }
    }
};

</script>

<style scoped>

.image-overlay {
    position: absolute;
    filter: brightness(40%);
}

.text-overlay {
    color: white;
    filter: blur(4px);
    -webkit-filter: blur(4px);
}

</style>
