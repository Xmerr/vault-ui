import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import Home from './modules/home/pages/Home';
import Footer from '@elements/layouts/footer';
import { defaultTheme } from './global/themes';

const App = () => (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <Home />
            <Footer />
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
