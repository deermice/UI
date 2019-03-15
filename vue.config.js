const VueSeparateFilesWebpackLoaderPlugin = require('vue-separate-files-webpack-loader/plugin');

module.exports = {
    chainWebpack: config => {
        config
            .plugin('vue-separate-files-webpack-loader')
            .use(VueSeparateFilesWebpackLoaderPlugin, [])
            .after('vue-loader');

        config.module
            .rule('vue-separate-files-webpack-loader')
            .test(/\.vue\./)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-separate-files-webpack-loader')
            .loader('vue-separate-files-webpack-loader');
    }
};
