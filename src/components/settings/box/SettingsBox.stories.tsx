import {Meta} from '@storybook/react';
import {SettingsBox} from './SettingsBox';
import {useState} from 'react';

const meta = {
    title: 'SettingsBox',
    component: SettingsBox
}satisfies Meta<typeof SettingsBox>;

export default meta;

export const WorkingSettingsBox = () => {
    const [value, setValue] = useState<number>(0);
    return <SettingsBox value={value} labelText={'min'} setValue={setValue}/>
}