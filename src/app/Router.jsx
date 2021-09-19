import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '@elements/layouts/footer';
import { AccountToolbar } from '@elements/toolbars';

import Account from '@modules/account';
import Dashboard from '@modules/dashboard';
import Home from '@modules/home';

import { PrivateRoute, PublicRoute } from './routes';
import * as paths from '@global/paths';

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path={paths.privateRoutes}>
                <AccountToolbar />
            </Route>
            <Switch>
                <PrivateRoute path={paths.dashboard()}>
                    <Dashboard />
                </PrivateRoute>

                <PrivateRoute path={paths.account()} component={Account} />

                <PublicRoute path={paths.home()}>
                    <Home />
                </PublicRoute>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};
