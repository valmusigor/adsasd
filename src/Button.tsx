import React from 'react';
import './App.css';

type ButtonPropsType = {
    text: String
    disabled: boolean
    onClick: () => void
}

export const Button = (props: ButtonPropsType) => {
    const buttonStyle = props.disabled ? 'DisabledButton' : 'ActiveButton';
    return <button
        disabled={props.disabled}
        className={`Button ${buttonStyle}`}
        onClick={props.onClick}
    >
        {props.text}
    </button>
}