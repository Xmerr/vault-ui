import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '@global/themes';
import '../src/index.scss';

const Decorator = ({ children }) => (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
);

export default Decorator;
