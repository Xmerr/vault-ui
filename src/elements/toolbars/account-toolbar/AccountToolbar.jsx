import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { dashboard } from '@global/paths';
import { logo } from '@assets';
import { logout as accountLogout } from '@app/redux/user.js';
import styles from './account.module.scss';

/**
 * Toolbar when not logged in
 */
export const AccountToolbar = () => {
    AccountToolbar.propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        navigation: PropTypes.bool.isRequired,
    };

    AccountToolbar.defaultProps = {
        loggedIn: false,
        navigation: false,
    };

    const dispatch = useDispatch();
    const history = useHistory();
    const logout = () => dispatch(accountLogout()).then(() => history.push('/'));

    return (
        <div className={styles.toolbar}>
            <div className={styles.row}>
                <div>
                    <Link to={dashboard()} className={styles.logoText}>
                        <img src={logo} />
                        <Typography variant='h1'>The Dragon&#39;s Vault</Typography>
                    </Link>
                    <Link to={dashboard()}>Accounts</Link>
                    <Button variant='outlined'>Open an Account</Button>
                </div>
                <div className={styles.links}>
                    <Link to={dashboard()}>Profile and Settings</Link>
                    <Button color='primary' onClick={logout}>
                        Log out
                    </Button>
                </div>
            </div>
        </div>
    );
};
