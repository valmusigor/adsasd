import React from 'react';
import './App.css';
import {Button} from './components/button/Button';

type CounterScreenPropsType = {
    value: number
    limitReached: boolean
    increment: () => void
    reset: () => void
    changeScene: () => void
}

export const CounterScreen = (props: CounterScreenPropsType) => {
    return (
        <div className="Counter">
            <div className={'CounterScreen'}>
                <span className={props.limitReached ? 'WarnText' : 'CustomText'}>{props.value}</span>
            </div>
            <div className={'ControlPanel'}>
                <Button text={'inc'} onClick={props.increment} disabled={props.limitReached}/>
                <Button text={'reset'} onClick={props.reset} disabled={props.value === 0}/>
                <Button text={'set'} onClick={props.changeScene} disabled={false}/>
            </div>
        </div>
    );
}