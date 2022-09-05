import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { registerMicroApps, start } from 'qiankun';

window.__POWERED_BY_QIANKUN__ = true;

registerMicroApps([
    {
        name: 'reactapp1',
        entry: '//localhost:8200',
        container: '#container',
        activeRule: '/app-react',
    },
    {
        name: 'vueapp1',
        entry: '//localhost:8300',
        container: '#container',
        activeRule: '/app-vue',
    },
]);
// 启动 qiankun
start();

function App() {
    return (
        <>
            <Link to="/">Home</Link> | {" "}
            <Link to="/app-react">React</Link> | {" "}
            <Link to="/app-vue">Vue</Link>
            <h1>Hello World, Im host</h1>
        </>
    );
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/app-react" />
            <Route path="/app-vue" />
        </Routes>
    )
}

const root = ReactDOM.createRoot(document.body.appendChild(document.createElement('div')));

root.render(
    <StrictMode>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </StrictMode>,
);