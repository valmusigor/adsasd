import {Meta} from '@storybook/react';
import {SettingsScreen} from './SettingsScreen';
import {action} from '@storybook/addon-actions';

const meta = {
    title: 'SettingsScreen',
    component: SettingsScreen
}satisfies Meta<typeof SettingsScreen>;

export default meta;

const saveSettingsAction = action('save settings');

export const WorkingSettingsScreen = () => {
    return <SettingsScreen limit={{minValue: 0, maxValue: 5}} saveSettings={saveSettingsAction}/>
}