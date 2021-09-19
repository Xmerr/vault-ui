import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { home } from '@global/paths';

export const PrivateRoute = props => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return <Route {...props}>{!isLoggedIn ? <Redirect to={home()} /> : props.children}</Route>;
};
