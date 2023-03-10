import {configure} from '@reskript/settings';
import webpack from 'webpack';

const {container: {ModuleFederationPlugin}} = webpack;

const {name: packageName} = require('./package.json');


const localPath = 'http://localhost:3000/assets/hello-remote.js';

const federation = new ModuleFederationPlugin({
    remotes: {
        helloFederation: `helloFedertaionRemote@${localPath}`,
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
            appTitle: '未知应用', // TODO: 修改系统名称
            finalize(webpackConfig) {
                webpackConfig.output = {
                    ...webpackConfig.output,
                    library: `${packageName}-[name]`,
                    libraryTarget: 'umd',
                };
                webpackConfig.plugins.push(federation);
                return webpackConfig;
            },
        },
        devServer: {
            port: 8200,
            apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
            defaultProxyDomain: 'unknown-test.baidu-int.com', // TODO: 设置后端测试环境域名
        },
    }
);
