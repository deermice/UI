<template lang="pug">
v-container(fluid)
    // Navigation drawer toggled for small screens
    v-navigation-drawer(v-model='drawer', right, app, temporary)
        v-list
            v-list-item(
                v-for='(category, index) in categories',
                :key='index',
                :to='category.slug',
                nuxt
            )
                v-list-item-icon
                    v-icon(v-text='category.icon')
                v-list-item-content
                    v-list-item-title(v-text='category.name')

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
            v-menu(v-for='(category, index) in categories' :key='index' rounded="b-xl" open-on-hover offset-y)
                template(v-slot:activator="{ on, attrs }")
                    v-btn(
                        :to='`/${category.slug}`',
                        v-bind="attrs",
                        v-on="on",
                        text,
                        nuxt
                    )
                        v-icon(left, v-text='category.icon')
                        |
                        | {{ category.name }}

                // Render the dropdown if there is at least one group
                v-list(v-if="category.groups.length > 0" subheader)
                    v-list-item(v-for="(group, index) in category.groups" :key="index" :to="`/${category.slug}/${group.slug}`" nuxt)
                        v-list-item-title(v-text="group.name")
                        v-list-item-icon
                            v-icon(v-text="group.icon")

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
        const groups = await this.$content('group').fetch();

        // Initialize groups property
        categories.forEach((item) => {
            item.groups = [];
        });

        // Add groups to respective categories
        groups.forEach((item) => {
            const index = categories.findIndex((x) => x.name === item.category);
            categories[index].groups.push(item);
        });

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
