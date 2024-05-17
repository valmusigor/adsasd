import React, {useState} from 'react';
import './App.css';
import {CounterScreen} from './CounterScreen';
import {SettingsScreen} from './components/settings/screen/SettingsScreen';

export type LimitType = {
    minValue: number;
    maxValue: number;
};

export type SceneType = 'counter' | 'settings';

export const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [limit, setLimit] = useState<LimitType>({minValue: 0, maxValue: 1});
    const [scene, setScene] = useState<SceneType>('counter');

    const limitReached = limit.maxValue <= counterValue;
    const increment = () => {
        if (!limitReached) {
            setCounterValue(counterValue + 1);
        }
    }

    const reset = () => {
        setCounterValue(limit.minValue);
    }

    const saveSettings = (limit: LimitType) => {
        setLimit(limit);
        setCounterValue(limit.minValue);
        setScene('counter');
    }

    if (scene === 'counter') {
        return <div>
            <CounterScreen
                value={counterValue}
                limitReached={limitReached}
                increment={increment} reset={reset}
                changeScene={() => setScene('settings')}
            />
        </div>
    }

    return <div>
        <SettingsScreen limit={limit} saveSettings={saveSettings}/>
    </div>
}
