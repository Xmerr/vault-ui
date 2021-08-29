import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Account from '@modules/account';
import Footer from '@elements/layouts/footer';
import Home from '@modules/home';

export const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/Dashboard'>
                <Account />
            </Route>

            <Route path='/'>
                <Home />
            </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
);
