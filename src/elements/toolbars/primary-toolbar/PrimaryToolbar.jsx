import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { logo } from '@assets';
import { Login } from '@elements/sidebars';
import { logout } from '@app/redux/account.js';
import NavigationToolbar from './navigation-toolbar/NavigationToolbar';
import styles from './primary.module.scss';

/**
 * Toolbar when not logged in
 */
export const PrimaryToolbar = props => {
    PrimaryToolbar.propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        navigation: PropTypes.bool.isRequired,
    };

    PrimaryToolbar.defaultProps = {
        loggedIn: false,
        navigation: false,
    };

    const dispatch = useDispatch();
    const [loginOpen, setLoginOpen] = useState(false);
    const openSidebar = (open = false) => setLoginOpen(open);
    const { loggedIn, navigation } = props;

    return (
        <>
            <div className={styles.toolbar}>
                <Link to='/' className={styles.logoText}>
                    <img src={logo} />
                    <Typography variant='h1'>The Dragon&#39;s Vault</Typography>
                </Link>
                <div className={styles.links}>
                    <Link to='/about'>About Us</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/help'>Help</Link>
                    {!loggedIn ? (
                        <Button
                            color='primary'
                            key='login'
                            onClick={() => openSidebar(true)}
                            variant='contained'
                        >
                            Log in
                        </Button>
                    ) : (
                        <Button
                            color='primary'
                            key='logout'
                            onClick={() => dispatch(logout())}
                            variant='contained'
                        >
                            Log out
                        </Button>
                    )}
                </div>
            </div>
            {!loggedIn && <Login open={loginOpen} onClose={() => openSidebar(false)} />}
            {navigation && <NavigationToolbar />}
        </>
    );
};
