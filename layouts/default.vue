<template  lang="pug">

v-app

    // Navigation drawer toggled for small screens
    v-navigation-drawer(v-model="drawer" right app temporary)
        v-list
            v-list-item(v-for="(item, index) in right_menu" :key="index" :to="item.url" nuxt)
                v-list-item-icon
                    v-icon {{ item.icon }}
                v-list-item-content
                    v-list-item-title {{ item.title }}

    v-app-bar(app)
        v-toolbar-items
            v-btn(v-for="(item, index) in left_menu" :key="index" :to="item.url" text nuxt x-large)
                v-icon(left) {{ item.icon }}
                |   {{ item.title }}
        v-spacer

        // Small screens and up
        v-toolbar-items
            v-btn.hidden-xs-only(v-for="(item, index) in right_menu" :key="index" :to="item.url" text nuxt)
                v-icon(left) {{ item.icon }}
                |   {{ item.title }}
        // Extra small screens
        v-app-bar-nav-icon.hidden-sm-and-up(@click.stop="drawer = !drawer")

    v-content
        nuxt

    v-footer(app)
        v-container
            v-row
                v-spacer
                v-avatar(size="48")
                    v-img(src="/images/portrait.jpg" width="48" height="48" alt="Icon")
                v-spacer

            v-row
                v-spacer
                v-btn(v-for="(item, index) in icons" :key="index" icon :href="item.url")
                    v-icon(large) {{ item.icon }}
                v-spacer
            v-row
                v-spacer
                small Copyright &copy; {{ new Date().getFullYear() }},
                    strong &nbsp;Asher Norland
                v-spacer

</template>

<script>

export default {
    props: {
        emoji: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        drawer: null,
        left_menu: [
            {
                title: 'Asher Norland',
                url: '/',
                icon: 'mdi-home'
            }
        ],
        right_menu: [
            {
                title: 'Projects',
                url: '/projects',
                icon: 'mdi-settings'
            },
            {
                title: 'Blog',
                url: '/blog',
                icon: 'mdi-book-open'
            },
            {
                title: 'Reviews',
                url: '/reviews',
                icon: 'mdi-film'
            }
        ],
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
    overflow-y: hidden;
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
