import {configure} from '@reskript/settings';
const {name: packageName} = require('./package.json');

export default configure(
    'webpack',
    {
        build: {
            appTitle: 'React17App', // TODO: 修改系统名称
            finalize(webpackConfig) {
                webpackConfig.output = {
                    ...webpackConfig.output,
                    library: `${packageName}-[name]`,
                    libraryTarget: 'umd',
                };
                return webpackConfig;
            },
        },
        featureMatrix: {
            stable: {
                test: 'stable',
            },
            dev: {
                test: 'dev'
            }
        },
        devServer: {
            port: 8201,
            apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
            defaultProxyDomain: 'unknown-test.baidu-int.com', // TODO: 设置后端测试环境域名
        },
    }
);
