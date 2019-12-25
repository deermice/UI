<template lang="pug">

v-footer(fixed)
    v-spacer
    v-btn(v-for="(item, index) in icons" :key="index" icon :href="item.url")
        v-icon(large) {{ item.name }}
    v-spacer

</template>

<script>

export default {
    data: () => ({
        icons: [
            {
                name: 'mdi-github-circle',
                url: 'https://github.com/Behemyth'
            },
            {
                name: 'mdi-instagram',
                url: 'https://www.instagram.com/behemythic'
            },
            {
                name: 'mdi-twitter',
                url: 'https://twitter.com/Behemythic'
            },
            {
                name: 'mdi-linkedin',
                url: 'https://linkedin.com/in/asher-norland'
            },
            {
                name: 'mdi-email',
                url: 'mailto:asher.norland@gmail.com'
            },
            {
                name: 'mdi-school',
                url: 'https://scholar.google.com/citations?user=9TCQH78AAAAJ'
            }
        ]
    })
};

</script>
