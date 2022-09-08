import {Routes, Route, Link, Outlet} from 'react-router-dom';
import { Basic } from './Basic';
import { WithInput } from './WithInput';

const Links = () => {
    return (
        <>
            <Link to="basic">Basic</Link> | {" "}
            <Link to="with-input">WithInput</Link> | {" "}
            <Outlet />
        </>
    )
}

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Links />}>
                <Route path="basic" element={<Basic />} />
                <Route path="with-input" element={<WithInput />} />
            </Route>
        </Routes>
);
}