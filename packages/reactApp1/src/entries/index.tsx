/* eslint-disable no-console */
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from '@/components/App';
import '@/styles';
import '../public-path';

const AppRoutes = (props: any) => {
    return (
        <Routes>
            <Route path="/" element={<App {...props} />} />
        </Routes>
    );
};

let root: ReactDOM.Root | null = null;
function render(props?: any) {
    root = ReactDOM.createRoot(document.body.appendChild(document.createElement('div')));
    root.render(
        <StrictMode>
            { /* eslint-disable-next-line no-underscore-dangle */ }
            <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
                <AppRoutes {...props} />
            </BrowserRouter>
        </StrictMode>
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
    root?.unmount();
}
