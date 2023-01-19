const {name: packageName} = require('./package.json');

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        },
    },
    configureWebpack: {
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
            },
        },
        output: {
            library: `${packageName}-[name]`,
            libraryTarget: 'umd',
        },
    },
};
