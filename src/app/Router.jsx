import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Account from '@modules/account';
import Footer from '@elements/layouts/footer';
import Home from '@modules/home';
import { PrivateRoute, PublicRoute } from './routes';
import * as paths from '@global/paths';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path={paths.dashboard()}>
                    <Account />
                </PrivateRoute>

                <PublicRoute path={paths.home()}>
                    <Home />
                </PublicRoute>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};
