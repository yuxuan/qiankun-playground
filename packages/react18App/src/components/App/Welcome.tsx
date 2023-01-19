import { useEffect, useState } from 'react';

export default () => {
    const [native, setNative] = useState();
    const [vue, setVue] = useState();

    useEffect(
        () => {
            window.addEventListener('message', event => {
                setNative(event.data.native)
                setVue(event.data.vue)
            })
        },
        []
    )

    return (
        <>
            <iframe src="http://localhost:8100/app-vue" width="1024" ></iframe>
            <p>native: {native}</p>
            <p>vue: {vue}</p>
        </>
    )
}