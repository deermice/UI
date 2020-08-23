<template lang="pug">
v-container.pa-0(fluid)
    Footer

</template>

<script>

import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
    name: 'Home',
    components: {
        Header,
        Footer
    },
    data: () => ({
        about: 'Graphics programmer and parallelism aficionado',
        tidbits: [
            'Job',
            'Education',
            'Project',
            'Research',
            'Technical',
            'Personal',
            'Film Review',
            'Game Review'
        ]
    })
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
