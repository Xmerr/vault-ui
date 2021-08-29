import React from 'react';

import Toolbar from './PrimaryToolbar';

export default {
    title: 'Toolbars/Main',
    component: Toolbar,
    args: {
        navigation: false,
    },
    argTypes: {},
};

const Template = args => <Toolbar {...args} />;

export const Primary = Template.bind({});
