/* eslint-disable no-console */
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from '@/components/App/Hello';
import '@/styles';

let root: ReactDOM.Root | null = null;
function render() {
    root = ReactDOM.createRoot(document.body.appendChild(document.createElement('div')));
    root.render(
        <StrictMode>
            { /* eslint-disable-next-line no-underscore-dangle */ }
            <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
                <App />
            </BrowserRouter>
        </StrictMode>
    );
}

render();

