<template>
    <article class="hello">
        <h1>初始化完成！</h1>
        <p>
            可以查看
            <a
                href="https://cli.vuejs.org/zh/" target="_blank"
                rel="noopener"
            >Vue CLI 文档</a>来了解如何自定义项目配置。
        </p>
        <h3>已安装的 CLI 插件</h3>
        <ul>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                    target="_blank"
                    rel="noopener"
                >Babel</a>
            </li>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
                    target="_blank"
                    rel="noopener"
                >TypeScript</a>
            </li>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                    target="_blank"
                    rel="noopener"
                >ESLint</a>
            </li>
        </ul>
        <h3>官方文档</h3>
        <ul>
            <li>
                <a
                    href="https://cn.vuejs.org" target="_blank"
                    rel="noopener"
                >Vue</a>
            </li>
            <li>
                <a
                    href="https://router.vuejs.org/zh/" target="_blank"
                    rel="noopener"
                >Vue Router</a>
            </li>
            <li>
                <a
                    href="https://vuex.vuejs.org/zh/" target="_blank"
                    rel="noopener"
                >Vuex</a>
            </li>
            <li>
                <a
                    href="https://devtools.vuejs.org/" target="_blank"
                    rel="noopener"
                >Vue Devtools</a>
            </li>
            <li>
                <a
                    href="https://vue-loader.vuejs.org/zh/"
                    target="_blank"
                    rel="noopener"
                >Vue Loader</a>
            </li>
        </ul>
        <h3>常用链接</h3>
        <ul>
            <li>
                <a
                    href="https://element.eleme.io/" target="_blank"
                    rel="noopener"
                >Element</a>
            </li>
            <li>
                <a
                    href="https://antdv.com/" target="_blank"
                    rel="noopener"
                >Ant Design Vue</a>
            </li>
            <li>
                <a
                    href="https://veui.dev/"
                    target="_blank"
                    rel="noopener"
                    title="百度自研"
                >VEUI</a>
            </li>
        </ul>
        <iframe src="http://localhost:3000">
        </iframe>
        <p>{{ position }}</p>
        <footer>
            有任何关于 Vue.js 的问题，欢迎通过如流搜索
            <strong>1498916</strong> 加入群聊。
        </footer>
    </article>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
    name: 'HelloWorld',
    data() {
        return {
            position: 0,
        };
    },
    methods: {
        changePosition(position: number) {
            this.$data.position = position;
        },
    },
    created() {
        console.log(22, window);
        window.addEventListener('message', event => {
            if (event.origin !== 'http://localhost:3000') {
                return;
            }
            this.changePosition(event.data.postion);
            console.log(44, window);
            window.parent.postMessage({native: event.data.postion}, '*');
        });

        window.addEventListener('scroll', () => {
            window.parent.postMessage({vue: window.scrollY}, '*');
        });
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
    padding-left: .5em;
}

h3 {
    margin: 30px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    position: relative;
    display: inline-block;
    margin: 0 10px;
}

li + li::before {
    content: "·";
    position: absolute;
    left: -12px;
}

a {
    color: #0052cc;
    text-decoration: none;
}

footer {
    margin-top: 80px;
}
</style>
