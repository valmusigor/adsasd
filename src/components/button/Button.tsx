import React from 'react';
import '../../App.css';
import styles from './Button.module.css';

type ButtonPropsType = {
    text: String
    disabled: boolean
    onClick: () => void
}

export const Button = (props: ButtonPropsType) => {
    const buttonStyle = props.disabled ? styles.DisabledButton : styles.ActiveButton;
    return <button
        disabled={props.disabled}
        className={`${styles.Button} ${buttonStyle}`}
        onClick={props.onClick}
    >
        {props.text}
    </button>
}