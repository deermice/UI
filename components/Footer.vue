<template lang="pug">

.container
    nav.navbar.fixed-bottom.navbar-expand.navbar-light
        ul.navbar-nav.mx-auto
            li.nav-item
                a.nav-link(href="https://github.com/Behemyth")
                    <font-awesome-icon :icon="['fab', 'github']" size="2x" />
            li.nav-item
                a.nav-link(href="https://www.instagram.com/behemythic/")
                    <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
            li.nav-item
                a.nav-link(href="https://twitter.com/Behemythic")
                    <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
            li.nav-item
                a.nav-link(href="https://linkedin.com/in/asher-norland")
                    <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
            li.nav-item
                a.nav-link(href="mailto:asher.norland@gmail.com")
                    font-awesome-icon(icon='envelope' size="2x")
            li.nav-item
                a.nav-link(href="https://scholar.google.com/citations?user=9TCQH78AAAAJ")
                    font-awesome-icon(icon='graduation-cap' size="2x")

</template>

<script>

export default {
};

</script>
