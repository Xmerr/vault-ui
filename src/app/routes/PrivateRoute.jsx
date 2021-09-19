import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { home } from '@global/paths';

export const PrivateRoute = props => {
    PrivateRoute.propTypes = {
        children: PropTypes.node,
    };

    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return <Route {...props}>{!isLoggedIn ? <Redirect to={home()} /> : props.children}</Route>;
};
