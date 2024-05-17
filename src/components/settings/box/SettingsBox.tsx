import {ChangeEvent} from 'react';
import styles from './SettingsScreen.module.css';

type SettingsBoxPropsType = {
    value: number
    minValue?: number,
    labelText: string
    setValue: (minValue: number) => void
};

export const SettingsBox = ({minValue = 0, ...props}: SettingsBoxPropsType) => {
    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = parseInt(e.currentTarget.value);
        if (currentValue >= minValue) {
            props.setValue(currentValue);
        }
    }
    return (
        <div className={styles.InputBox}>
            <label htmlFor="settingsBox">{props.labelText}:</label>
            <input type="number" id="settingsBox" value={props.value} onChange={setValue}/>
        </div>
    )
}