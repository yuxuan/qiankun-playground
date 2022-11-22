import {Link, Route, Routes} from 'react-router-dom';
import styled from '@emotion/styled';
import { useState } from 'react';

const Bg1 = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(https://icloud-backup.bj.bcebos.com/image-test/Sample-png-image-1mb.png) no-repeat;
    background-size: 100% auto;
`;

const Bg1Webp = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(https://icloud-backup.bj.bcebos.com/image-test/Sample-png-image-1mb.png?x-bce-process=f_webp) no-repeat;
    background-size: 100% auto;
`;

const Bg1Preloaded = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(https://icloud-backup.cdn.bcebos.com/image-test/Sample-png-image-1mb-preloaded2.png) no-repeat;
    background-size: 100% auto;
`;

const Bg2 = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(https://icloud-backup.bj.bcebos.com/image-test/SampleJPGImage_1mbmb.jpg) no-repeat;
    background-size: 100% auto;
`;

const Bg2Webp = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(https://icloud-backup.bj.bcebos.com/image-test/SampleJPGImage_1mbmb.jpg?image/resize,x-bce-process=f_webp) no-repeat;
    background-size: 100% auto;
`;



const BG1 = () => {
    return (
        <Bg1 />
    );
}

const BG1WebP = () => {
    return (
        <Bg1Webp />
    );
}

const BG1Preloaded = () => {
    return (
        <Bg1Preloaded />
    );
}


export const BG2 = () => {
    return (
        <Bg2 />
    )
}

const BG2WebP = () => {
    return (
        <Bg2Webp />
    );
}
export default function () {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <nav>
                <Link to="empty">empty</Link>
                {" | "}
                <Link to="bg1">BG1</Link>
                {" | "}
                <Link to="bg1webp">BG1-WebP</Link>
                {" | "}
                <Link to="bg1preloaded">BG1-Preloaded</Link>
                {" | "}
                <Link to="bg2">BG2</Link>
                {" | "}
                <Link to="bg2webp">BG2-WebP</Link>
            </nav>
            <Routes>
                <Route path="bg1preloaded" element={<BG1Preloaded />} />
                <Route path="empty" element={<div />} />
                <Route path="bg1" element={<BG1 />} />
                <Route path="bg1webp" element={<BG1WebP />} />
                <Route path="bg2" element={<BG2 />} />
                <Route path="bg2webp" element={<BG2WebP />} />
            </Routes>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{fontSize: 200}}>Tata</div>
                <button onClick={() => setCounter(counter => counter + 1)}>Adddddddd</button>
                <div style={{fontSize: 100}}>{counter}</div>
            </div>
        </>
    );

}