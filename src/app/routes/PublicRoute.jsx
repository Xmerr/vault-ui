import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dashboard } from '@global/paths';

export const PublicRoute = props => {
    PublicRoute.propTypes = {
        children: PropTypes.node,
    };

    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return <Route {...props}>{isLoggedIn ? <Redirect to={dashboard()} /> : props.children}</Route>;
};
