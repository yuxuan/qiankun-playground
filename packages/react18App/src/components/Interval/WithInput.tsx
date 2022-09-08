import { MouseEventHandler, ChangeEventHandler, useEffect, useState } from 'react';

/**
 *
 */
export const WithInput = () => {
    const [timer, setTimer] = useState(1000);
    const [inputTimeValue, setInputTimeValue] = useState(0);
    const [counter, setCounter] = useState(0);
    const customHandler = () => {
        setCounter(counter => counter + 1);
    }
    useEffect(
        () => {
            const clear = setInterval(
                customHandler,
                timer
            );
            return () => {
                console.log('unmount');
                clearInterval(clear);
            };
        },
        [customHandler, timer]
    );
    const onChange: ChangeEventHandler<HTMLInputElement> = e => {
        setInputTimeValue(Number(e.target.value))
    }
    const onConfirm: MouseEventHandler<HTMLButtonElement> = () => {
        setTimer(inputTimeValue)
    }
    const onRestart:MouseEventHandler<HTMLButtonElement> = () => {
        setCounter(0);
    }
    return (
        <div>
            timer: {timer}
            counter: {counter}
            <input onChange={onChange} />
            <button onClick={onConfirm}>确定</button>
            <button onClick={onRestart}>重置</button>
        </div>
    );
};
