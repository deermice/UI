<template lang="pug">
v-container.pa-0(fluid)
    v-container.pa-0
        Header(:src="require('@/assets/banner.jpg')" alt='Asher Norland')
        v-container(fluid)
            v-row
                v-col(cols="12")
                    v-card.ma-3.pa-6(outlined tile) Experience
            v-row
                v-col(cols="6")
                    v-card.ma-3.pa-6(outlined tile) {{ tidbits[0] }}
                v-col(cols="6")
                    v-card.ma-3.pa-6(outlined tile) {{ tidbits[1] }}

        v-parallax(:src="require('@/assets/banner.jpg')" alt="Vista" height="125")
            v-container(fluid)
                v-row
                    v-col(cols="4")
                    v-col(cols="4")
                        v-btn(rounded block href="/Asher_Norland_Resume.pdf" target="_blank")
                            v-icon(left) mdi-open-in-new
                            | Resume
                    v-col(cols="4")

        v-container(fluid)
            v-row
                v-col(cols="12")
                    v-card.ma-3.pa-6(outlined tile) Projects
            v-row
                v-col(cols="6")
                    v-card.ma-3.pa-6(outlined tile) {{ tidbits[2] }}
                v-col(cols="6")
                    v-card.ma-3.pa-6(outlined tile) {{ tidbits[3] }}

        v-parallax(:src="require('@/assets/banner.jpg')" alt="Vista" height="125")
            v-container(fluid)
                v-row
                    v-col(cols="12") See More Projects

        v-container(fluid)
            v-row
                v-col(cols="12")
                    v-card.ma-3.pa-6(outlined tile) Blog
            v-row
                v-col(cols="6")
                    v-card.ma-3.pa-6(outlined tile) {{ tidbits[4] }}
                v-col(cols="6")
                    v-card.ma-3.pa-6(outlined tile) {{ tidbits[5] }}

        v-parallax(:src="require('@/assets/banner.jpg')" alt="Vista" height="125")
            v-container(fluid)
                v-row
                    v-col(cols="12")
                    v-col(cols="12") See More Blog Posts

        v-container(fluid)
            v-row
                v-col(cols="12")
                    v-card.ma-3.pa-6(outlined tile) Reviews
            v-row
                v-col(cols="6")
                    v-card.ma-3.pa-6(outlined tile) {{ tidbits[6] }}
                v-col(cols="6")
                    v-card.ma-3.pa-6(outlined tile) {{ tidbits[7] }}

        v-parallax(:src="require('@/assets/banner.jpg')" alt="Vista" height="125")
            v-container(fluid)
                v-row
                    v-col(cols="12") See more reviews
    Footer

</template>

<script>

import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
    name: 'Home',
    components: {
        Header,
        Footer
    },
    data: () => ({
        about: 'Graphics programmer and parallelism aficionado',
        tidbits: [
            'Job',
            'Education',
            'Project',
            'Research',
            'Technical',
            'Personal',
            'Film Review',
            'Game Review'
        ]
    })
};

</script>

<style scoped>

.image-overlay {
    position: absolute;
    filter: brightness(40%);
}

.text-overlay {
    color: white;
    filter: blur(4px);
    -webkit-filter: blur(4px);
}

</style>
