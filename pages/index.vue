<template lang="pug">

.page
    Navigation(emoji="🐳")
    Hello
    Footer

</template>

<script>

import Hello from '@/components/Hello';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default {
    name: 'Home',
    components: {
        Navigation,
        Hello,
        Footer
    }
};

</script>
