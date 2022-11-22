import {Routes, Route, Link, Outlet} from 'react-router-dom';
import IntervalApp from '../Interval';
import Background from '../BackgroundLoad';

const App = () => {
    return (
        <>
            <nav>
                <Link to="interval">Interval</Link>
                {" | "}
                <Link to="background">Background</Link>
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
                <Route path="background/*" element={<Background />} />
            </Route>
        </Routes>
    );
};
