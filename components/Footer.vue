<template  lang="pug">

v-footer(padless)
    v-container
        v-row
            v-spacer
            v-btn(to='/' fab nuxt icon)
                v-avatar(size="48")
                    v-img(src="https://www.gravatar.com/avatar/293a56bef971ab4999d6230491957d33?size=256r=g" alt="Icon")

            v-spacer

        v-row
            v-spacer
            v-btn(v-for="(item, index) in icons" :key="index" icon :href="item.url")
                v-icon(large) {{ item.icon }}
            v-spacer
        v-row
            v-spacer
            small Copyright &copy; {{ new Date().getFullYear() }},
                strong &nbsp; {{ copyright.name }}
            v-spacer

</template>

<script>

import generalConfig from '../content/general.json'; // TODO: replace with nuxt

export default {
    data: () => ({
        copyright: {
            name: generalConfig.copyright
        },
        icons: [
            {
                icon: 'mdi-github-circle',
                url: 'https://github.com/Behemyth'
            },
            {
                icon: 'mdi-instagram',
                url: 'https://www.instagram.com/behemythic'
            },
            {
                icon: 'mdi-twitter',
                url: 'https://twitter.com/Behemythic'
            },
            {
                icon: 'mdi-linkedin',
                url: 'https://linkedin.com/in/asher-norland'
            },
            {
                icon: 'mdi-school',
                url: 'https://scholar.google.com/citations?user=9TCQH78AAAAJ'
            },
            {
                icon: 'mdi-email',
                url: 'mailto:asher.norland@gmail.com'
            }
        ]
    })
};

</script>
