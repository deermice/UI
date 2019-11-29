<template lang="pug">

div.container
    nav.navbar.navbar-expand-sm.navbar-light
        a.navbar-brand(href="/")
            img(src="favicon.ico" width="32" height="32" alt="Icon")
            | &nbsp Asher Norland
        span.font-weight-bolder.navbar-brand.mx-auto {{ title }}
        ul.navbar-nav
            li.nav-item
                a.nav-link(href="/projects") Projects
            li.nav-item
                a.nav-link(href="/blog") Blog
            li.nav-item
                a.nav-link(href="/reviews") Film Reviews

</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
};

</script>
