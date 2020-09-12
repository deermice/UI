<template lang="pug">
v-footer(app, padless)
    v-container
        v-row
            v-spacer
            v-btn(to='/', fab, nuxt, icon)
                v-avatar(size='48')
                    v-img(
                        src='https://www.gravatar.com/avatar/293a56bef971ab4999d6230491957d33?size=256r=g',
                        alt='Icon'
                    )
            v-spacer
        v-row
            v-spacer
            v-btn(
                v-for='(item, index) in icons',
                :key='index',
                icon,
                :href='item.url'
            )
                v-icon(large) {{ item.icon }}
            v-spacer
        v-row
            v-spacer
            small Website made with ❤️ by Asher and Ola
            v-spacer
        v-row
            v-spacer
            small Copyright &copy; {{ new Date().getFullYear() }},
                strong &nbsp; {{ copyright.name }}
            v-spacer
</template>

<script>
export default {
    async fetch() {
        const config = await this.$content('config').fetch();

        this.copyright.name = config.copyright;
    },
    data: () => ({
        copyright: {
            name: 'Copyright'
        },
        icons: [
            // TODO: Fill with `social` datatype
        ]
    })
};
</script>
