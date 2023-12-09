import React, {useState} from 'react';
import './App.css';
import {CounterScreen} from './CounterScreen';
import {Button} from './Button';

type CounterPropsType = {
    limit: number
};

export const Counter = (props: CounterPropsType) => {
    const [counterValue, setCounterValue] = useState(0);

    const limitReached = props.limit <= counterValue;
    const increment = () => {
        if (!limitReached) {
            setCounterValue(counterValue + 1);
        }
    }

    const reset = () => {
        setCounterValue(0);
    }

    return <div className="Counter">
        <CounterScreen value={counterValue} limitReached={limitReached}/>
        <div className={"ControlPanel"}>
            <Button text={'inc'} onClick={increment} disabled={limitReached}/>
            <Button text={'reset'} onClick={reset} disabled={counterValue === 0}/>
        </div>
    </div>
}
