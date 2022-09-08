import {Routes, Route, Link, Outlet} from 'react-router-dom';
import IntervalApp from '../Interval';

const App = () => {
    return (
        <>
            <nav>
                <Link to="interval">Interval</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="interval/*" element={<IntervalApp />} />
            </Route>
        </Routes>
    );
};
