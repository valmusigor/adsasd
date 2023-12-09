import React from 'react';
import './App.css';

type CounterScreenPropsType = {
    value: number
    limitReached: boolean
}

export const CounterScreen = (props: CounterScreenPropsType) => {
    return <div className={"CounterScreen"}>
        <span className={props.limitReached ? 'WarnText' : 'CustomText'}>{props.value}</span>
    </div>
}