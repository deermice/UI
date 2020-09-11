<template lang="pug">
</template>

<script>
export default {
    async asyncData({ $content, app, params, error }) {
        const path = `/${params.pathMatch || 'index'}`;
        const [page] = await $content({ deep: true }).where({ path }).fetch();

        if (!page) {
            return error({ statusCode: 404, message: 'Page not found' });
        }

        return {
            page
        };
    }
};
</script>

<style scoped></style>
