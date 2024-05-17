import {Button} from '../../button/Button';
import React, {useState} from 'react';
import {LimitType} from '../../../Counter';
import {SettingsBox} from '../box/SettingsBox';

type SettingsScreenPropsType = {
    limit: LimitType
    saveSettings: (settings: LimitType) => void
}

export const SettingsScreen = (props: SettingsScreenPropsType) => {
    const [newLimit, setNewLimit] = useState<LimitType>(props.limit);

    const setMin = (minValue: number) => {
        setNewLimit({...newLimit, minValue});
    }

    const setMax = (maxValue: number) => {
        setNewLimit({...newLimit, maxValue});
    }

    const saveSettings = () => {
        props.saveSettings(newLimit);
    }

    const isLimitCorrect = newLimit.minValue < newLimit.maxValue;

    return (
        <div className="Counter">
            <div className={'CounterScreen'}>
                <SettingsBox labelText={'Min Value'} setValue={setMin} value={newLimit.minValue}/>
                <SettingsBox labelText={'Max Value'} setValue={setMax} value={newLimit.maxValue}/>
            </div>
            <div className={'ControlPanel'}>
                <Button text={'set'} onClick={saveSettings} disabled={!isLimitCorrect}/>
            </div>
        </div>
    );
}