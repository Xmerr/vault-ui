import React from 'react';
import Decorator from './Decorator';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    Story => (
        <Decorator>
            <Story />
        </Decorator>
    )
];
