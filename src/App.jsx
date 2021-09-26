import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '@global/themes';
import store from '@app/redux/store';
import { Router } from '@app/Router';

const App = () => (
    <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
            <Router />
        </Provider>
    </ThemeProvider>
);

export default App;
