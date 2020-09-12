<template lang="pug">
v-container(fluid)
    // Navigation drawer toggled for small screens
    v-navigation-drawer(v-model='drawer', right, app, temporary)
        v-list
            v-list-item(
                v-for='(item, index) in categories',
                :key='index',
                :to='item.slug',
                nuxt
            )
                v-list-item-icon
                    v-icon(v-text='item.icon')
                v-list-item-content
                    v-list-item-title(v-text='item.name')

    v-app-bar(app, dense)
        v-toolbar-items
            v-btn(
                :to='config.url',
                text,
                nuxt,
                x-large
            )
                v-icon(left, v-text='config.icon')
                |
                | {{ config.title }}
        v-spacer

        // Small screens and up
        v-toolbar-items.hidden-sm-and-down
            v-btn(
                v-for='(item, index) in categories',
                :key='index',
                :to='item.slug',
                text,
                nuxt
            )
                v-icon(left, v-text='item.icon')
                |
                | {{ item.name }}

        // Extra small screens
        v-app-bar-nav-icon.hidden-md-and-up(@click.stop='drawer = !drawer')
</template>

<script>
export default {
    async fetch() {
        const config = await this.$content('config').fetch();

        this.config.title = config.title;
        this.config.icon = config.title_icon;

        const categories = await this.$content('category').fetch();

        this.categories = categories;
    },

    data: () => ({
        drawer: null,
        config: {
            title: '',
            url: '/',
            icon: ''
        },
        categories: []
    })
};
</script>

<style scoped></style>
