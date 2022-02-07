import React from 'react';
import { DefineSpeed } from './DefineSpeed';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { Speed } from '@src/consts';

export default {
    title: 'DefineSpeed',
    component: DefineSpeed,
    decorators: [withKnobs],
};

export const Static = () => {
    return <DefineSpeed setSpeed={action('setSpeed')} speed={Speed.SLOW} />;
};
