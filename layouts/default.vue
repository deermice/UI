<template lang="pug">

v-app

    // Navigation drawer toggled for small screens
    v-navigation-drawer(v-model="drawer" right app temporary)
        v-list
            v-list-item(v-for="(item, index) in right_menu" :key="index" :to="item.url" nuxt)
                v-list-item-icon
                    v-icon(v-text="item.icon")
                v-list-item-content
                    v-list-item-title(v-text="item.title")

    v-app-bar(app dense)
        v-toolbar-items
            v-btn(v-for="(item, index) in left_menu" :key="index" :to="item.url" text nuxt x-large)
                v-icon(left v-text="item.icon")
                |   {{ item.title }}
        v-spacer

        // Small screens and up
        v-toolbar-items.hidden-sm-and-down
            v-btn(v-for="(item, index) in right_menu" :key="index" :to="item.url" text nuxt)
                v-icon(left v-text="item.icon")
                |   {{ item.title }}

        // Extra small screens
        v-app-bar-nav-icon.hidden-md-and-up(@click.stop="drawer = !drawer")

    v-content
        nuxt

</template>

<script>
import data from '../content/general.json';  //TODO: replace with nuxt

export default {
    data: () => ({
        drawer: null,
        left_menu: [
            {
                title: data.title,
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

<style>

html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}

</style>
