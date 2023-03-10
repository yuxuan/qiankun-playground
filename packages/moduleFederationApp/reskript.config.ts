import {configure} from '@reskript/settings';
import webpack from 'webpack';
const {name: packageName} = require('./package.json');

const {container: {ModuleFederationPlugin}} = webpack;

const federationPlugin = new ModuleFederationPlugin({
    name: 'helloFedertaion',
    // 这个是打包出来之后的文件名
    filename: 'hello-remote.js',
    library: {
        type: 'window',
        // 这个是加载的时候挂在window上的对象名
        name: 'helloFedertaionRemote',
    },
    exposes: {
        // 这个是暴露出来的模块
        './Hello': './src/components/Test/index.tsx',
    },
    shared: {
        react: {
            requiredVersion: '18.2.0',
            singleton: true,
        },
        'react-dom': {
            requiredVersion: '18.2.0',
            singleton: true,
        },
    },
});

export default configure(
    'webpack',
    {
        build: {
            publicPath: 'auto',
            appTitle: 'ModuleFederation', // TODO: 修改系统名称
            finalize(webpackConfig) {
                webpackConfig.output = {
                    ...webpackConfig.output,
                    library: `${packageName}-[name]`,
                    libraryTarget: 'umd',
                };
                webpackConfig.plugins.push(federationPlugin);
                return webpackConfig;
            },
        },
        devServer: {
            port: 8201,
            apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
            defaultProxyDomain: 'unknown-test.baidu-int.com', // TODO: 设置后端测试环境域名
        },
    }
);
