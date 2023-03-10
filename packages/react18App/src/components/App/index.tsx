import {lazy} from 'react';
import {Routes, Route, Link, Outlet} from 'react-router-dom';
import Welcome from './Welcome';
import Game from './Game';

const App = () => {
    return (
        <>
            <nav>
                <Link to="game">Game</Link>
                {
                    "  "
                }
                <Link to="test">Test</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="game"  element={<Game />}/>
                <Route path="test" element={<Welcome />} />
            </Route>
        </Routes>
    );
};
