<template lang="pug">

.container
    nav.navbar.navbar-expand.navbar-light
        a.navbar-brand(href="/")
            img.d-inline-block.align-top(src="favicon.ico" width="32" height="32" alt="Icon")
            | &nbsp Asher Norland
        span.font-weight-bold.navbar-text {{ title }}
        ul.navbar-nav.ml-auto
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
