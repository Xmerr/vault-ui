import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dashboard } from '@global/paths';

export const PublicRoute = props => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return <Route {...props}>{isLoggedIn ? <Redirect to={dashboard()} /> : props.children}</Route>;
};
