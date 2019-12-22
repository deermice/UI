<template lang="pug">

v-toolbar
    v-toolbar-title
    nuxt-link.navbar-brand(to="/")
        v-img.d-inline-block.align-top(src="favicon.ico" width="32" height="32" alt="Icon")
        | &nbsp Asher Norland
    span.navbar-text {{ emoji }}
    ul.navbar-nav.ml-auto
        li.nav-item
            nuxt-link.nav-link(to="/projects") Projects
        li.nav-item
            nuxt-link.nav-link(to="/blog") Blog
        li.nav-item
            nuxt-link.nav-link(to="/reviews") Reviews

</template>

<script>

export default {
    props: {
        emoji: {
            type: String,
            default: ''
        }
    }
};

</script>
