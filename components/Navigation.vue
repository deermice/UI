<template lang="pug">

v-toolbar(dense)
    v-toolbar-title(to="/" nuxt) Asher Norland
        v-avatar
            v-img(src="favicon.ico" width="32" height="32" alt="Icon")
    //{{ emoji }}
    v-spacer
    v-toolbar-items.hidden-sm-and-down
        v-btn(v-for="(item, index) in menu" :key="index" :to="item.url" text nuxt) {{ item.title }}

    v-menu
        template(v-slot:activator="{ on }")
            v-btn.hidden-md-and-up(v-on="on")
                v-icon mdi-dots-vertical
        v-list
            v-list-item(v-for="(item, index) in menu" :key="index" :to="item.url" nuxt)
                v-list-item-title {{item.title}}
</template>

<script>

export default {
    props: {
        emoji: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            menu: [
                {
                    title: 'Projects',
                    url: '/projects'
                },
                {
                    title: 'Blog',
                    url: '/blog'
                },
                {
                    title: 'Reviews',
                    url: '/reviews'
                }
            ]
        };
    }
};

</script>
