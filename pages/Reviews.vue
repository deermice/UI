<template lang="pug">

.container-fluid
    Navigation(emoji="🎥")
    Footer

</template>

<script>

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default {
    name: 'Reviews',
    components: {
        Navigation,
        Footer
    }
};

</script>
