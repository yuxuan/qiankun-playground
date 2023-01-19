import '../public-path.js';
import Vue from 'vue';
import VueCompositionAPI, {createApp} from '@vue/composition-api';
import App from './App.vue';

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

const render = () => {
    createApp(App).mount('#app');
};

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}


export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props: any) {
    console.log(11, window, props);

    console.log('[vue] props from main framework', props);
    render();
}
export async function unmount() {
    // instance.$destroy();
    // instance.$el.innerHTML = '';
    // instance = null;
    // router = null;
}