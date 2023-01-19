import {Routes, Route, Link, Outlet} from 'react-router-dom';
import Welcome from './Welcome';

const App = () => {
    return (
        <>
            <nav>
                <Link to="welcome">11</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="welcome" element={<Welcome />} />
            </Route>
        </Routes>
    );
};
