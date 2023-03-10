/* eslint-disable no-console */

if (!window.__POWERED_BY_QIANKUN__) {
    import('./bootstrap').then(({render}) => render());
}

export async function bootstrap() {
    console.log('[qiankun] react app bootstraped');
}
export async function mount(props: any) {
    console.log('[qiankun] props from main framework', props);
    const {mount} = await import('./bootstrap');
    mount(props);
}

export async function unmount() {
    const {unmount} = await import('./bootstrap');
    unmount();
}
