import { useEffect, useState } from 'react';

/**
 * React18 Strict Mode下useEffect会运行两次
 *
 */

export const Basic = () => {
    const [counter, setCounter] = useState(0);
    useEffect(
        () => {
            const clear = setInterval(
                () => {
                    setCounter(counter => counter + 1);
                },
                1000
            );
            return () => {
                console.log('unmount');
                clearInterval(clear);
            };
        },
        []
    );
    console.log(2);
    return (
        <div>counter: {counter}</div>
    );
};
