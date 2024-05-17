import {Button} from './Button';
import {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const meta = {
    title: 'Button',
    component: Button
}satisfies Meta<typeof Button>;

export default meta;

const buttonClick = action('button click');

export const ActiveButton = () => {
    return <Button text={'Active button'} disabled={false} onClick={buttonClick}/>
}

export const DisabledButton = () => {
    return <Button text={'Disabled button'} disabled={true} onClick={buttonClick}/>
}
