import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from '@/components/App';
import '@/styles';
import '../public-path';
import PreloadedImages from './PreloadedImages';

let root: ReactDOM.Root | null = null;

export function render() {
    root = ReactDOM.createRoot(document.body.appendChild(document.createElement('div')));
    root.render(
        <StrictMode>
            { /* eslint-disable-next-line no-underscore-dangle */ }
            <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
                <App />
                <PreloadedImages />
            </BrowserRouter>
        </StrictMode>
    );
}

export async function bootstrap() {
}

export async function mount(props: any) {
    render(props);
}

export async function unmount() {
    root?.unmount();
}
