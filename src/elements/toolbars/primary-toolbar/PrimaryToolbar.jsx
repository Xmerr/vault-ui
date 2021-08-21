import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { logo } from '@assets';
import { Login } from '@elements/sidebars';
import NavigationToolbar from './navigation-toolbar/NavigationToolbar';
import styles from './primary.module.scss';

/**
 * Toolbar when not logged in
 */
export const PrimaryToolbar = props => {
    PrimaryToolbar.propTypes = {
        navigation: PropTypes.bool.isRequired,
    };

    PrimaryToolbar.defaultProps = {
        navigation: false,
    };

    const [loginOpen, setLoginOpen] = useState(false);

    const openSidebar = (open = false) => setLoginOpen(open);

    const { navigation } = props;

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
                    <Button color='primary' onClick={() => openSidebar(true)} variant='contained'>
                        Log in
                    </Button>
                </div>
            </div>
            <Login open={loginOpen} onClose={() => openSidebar(false)} />
            {navigation && <NavigationToolbar />}
        </>
    );
};
