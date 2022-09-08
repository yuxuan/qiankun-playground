/* eslint-disable no-console */
import {StrictMode} from 'react';
import * as ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '@/components/App';
import '@/styles';
import '../public-path';

function render() {
    ReactDom.render(
        <StrictMode>
            { /* eslint-disable-next-line no-underscore-dangle */ }
            <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
                <App />
            </BrowserRouter>
        </StrictMode>,
        document.body.appendChild(document.createElement('div'))
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[qiankun] react app bootstraped');
}

export async function mount(props: any) {
    console.log('[qiankun] props from main framework', props);
    render(props);
}

export async function unmount() {
    ReactDom.unmountComponentAtNode(document.getElementById('container'));
}
