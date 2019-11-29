<template lang="pug">

.container-fluid
    Navigation(emoji="🐳")
    Hello

</template>

<script>

import Hello from '@/components/Hello';
import Navigation from '@/components/Navigation';

export default {
    name: 'home',
    components: {
        Navigation,
        Hello
    }
};

</script>
