<template lang="pug">

.container
    nav.navbar.navbar-expand-sm.navbar-light
        router-link.navbar-brand(to="/")
            img.d-inline-block.align-top(src="favicon.ico" width="32" height="32" alt="Icon")
            | &nbsp Asher Norland
        span.navbar-text {{ emoji }}
        ul.navbar-nav.ml-auto
            li.nav-item
                router-link.nav-link(to="/projects") Projects
            li.nav-item
                router-link.nav-link(to="/blog") Blog
            li.nav-item
                router-link.nav-link(to="/reviews") Film Reviews

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
