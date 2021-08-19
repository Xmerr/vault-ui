import React from 'react';

import Button from '@material-ui/core/Button';

export default {
    title: 'Basics/Button',
    component: Button,
    args: {
        children: 'Button',
        color: 'primary',
        disabled: false,
        fullWidth: false,
        size: 'medium',
        variant: 'contained',
    },
    argTypes: {
        color: {
            control: {
                type: 'radio',
                options: ['default', 'primary', 'secondary'],
            },
        },
        size: {
            control: {
                type: 'radio',
                options: ['small', 'medium', 'large'],
            },
        },
        variant: {
            control: {
                type: 'radio',
                options: ['text', 'contained', 'outlined'],
            },
        },
    },
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
