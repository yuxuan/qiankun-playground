<template>
    <div id="app">
        <img
            class="logo" alt="Vue logo"
            src="./assets/logo.svg" height="80"
        >
        <hello-world/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
    },
});
</script>

<style lang="less">
body {
    margin: 0;
}

#app {
    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        "Helvetica Neue",
        Arial,
        "PingFang SC",
        "Hiragino Sans GB",
        "Microsoft YaHei",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 80px;
}

.logo {
    margin-bottom: 30px;
}
</style>
