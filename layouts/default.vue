<template  lang="pug">

v-app
    v-app-bar(app)
        v-toolbar-items
            v-btn(to="/" text nuxt x-large) Asher Norland {{ emoji }}

        v-spacer

        // Small screens and up
        v-toolbar-items
            v-btn.hidden-sm-and-down(v-for="(item, index) in menu" :key="index" :to="item.url" text nuxt) {{ item.title }}

        //Small screens
        v-menu
            template(v-slot:activator="{ on }")
                v-toolbar-items
                    v-btn.hidden-md-and-up(v-on="on" text)
                        v-icon mdi-dots-vertical
            v-list
                v-list-item(v-for="(item, index) in menu" :key="index" :to="item.url" nuxt)
                    v-list-item-title {{item.title}}

    v-content
        v-container(fluid)
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
                    v-icon(large) {{ item.name }}
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
        menu: [
            {
                title: 'Projects',
                url: '/projects',
                emojii: '⚙️'
            },
            {
                title: 'Blog',
                url: '/blog',
                emojii: '📖'
            },
            {
                title: 'Reviews',
                url: '/reviews',
                emojii: '🎥'
            }
        ],
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
                name: 'mdi-school',
                url: 'https://scholar.google.com/citations?user=9TCQH78AAAAJ'
            },
            {
                name: 'mdi-email',
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
