<template lang="pug">
v-container(fluid)
    // Navigation drawer toggled for small screens
    v-navigation-drawer(v-model='drawer', right, app, temporary)
        v-list
            v-list-item(
                v-for='(item, index) in categories',
                :key='index',
                :to='item.subCategory',
                nuxt
            )
                v-list-item-icon
                    v-icon(v-text='item.icon')
                v-list-item-content
                    v-list-item-title(v-text='item.title')

    v-app-bar(app, dense)
        v-toolbar-items
            v-btn(
                v-for='(item, index) in left_menu',
                :key='index',
                :to='item.url',
                text,
                nuxt,
                x-large
            )
                v-icon(left, v-text='item.icon')
                |
                | {{ item.title }}
        v-spacer

        // Small screens and up
        v-toolbar-items.hidden-sm-and-down
            v-btn(
                v-for='(item, index) in categories',
                :key='index',
                :to='item.subCategory',
                text,
                nuxt
            )
                v-icon(left, v-text='item.icon')
                |
                | {{ item.title }}

        // Extra small screens
        v-app-bar-nav-icon.hidden-md-and-up(@click.stop='drawer = !drawer')
</template>

<script>
import generalConfig from '../content/general.json'; // TODO: replace with nuxt content

export default {
    props: {
        categories: {
            type: Array,
            required: true
        }
    },

    data: () => ({
        drawer: null,
        left_menu: [
            {
                title: generalConfig.title,
                url: '/',
                icon: 'mdi-home'
            }
        ],
        right_menu: [
            {
                title: 'Research',
                url: '/research',
                icon: 'mdi-feather',
                sub_menu: [
                    {
                        title: 'Published',
                        url: '/research/published',
                        icon: 'mdi-feather'
                    },
                    {
                        title: 'Unpublished',
                        url: '/research/unpublished',
                        icon: 'mdi-feather'
                    }
                ]
            },
            {
                title: 'Portfolio',
                url: '/portfolio',
                icon: 'mdi-library-books',
                sub_menu: [
                    {
                        title: 'Projects',
                        url: '/portfolio/projects',
                        icon: 'mdi-settings'
                    },
                    {
                        title: 'Art',
                        url: '/portfolio/art',
                        icon: 'mdi-brush'
                    }
                ]
            },
            {
                title: 'Blog',
                url: '/blog',
                icon: 'mdi-book-open',
                sub_menu: [
                    {
                        title: 'Technical',
                        url: '/blog/technical',
                        icon: 'mdi-book-open'
                    },
                    {
                        title: 'Personal',
                        url: '/blog/personal',
                        icon: 'mdi-book-open'
                    }
                ]
            },
            {
                title: 'Reviews',
                url: '/reviews',
                icon: 'mdi-film',
                sub_menu: [
                    {
                        title: 'Film',
                        url: '/reviews/film',
                        icon: 'mdi-film'
                    },
                    {
                        title: 'Games',
                        url: '/reviews/games',
                        icon: 'mdi-film'
                    }
                ]
            }
        ]
    })
};
</script>

<style scoped></style>
