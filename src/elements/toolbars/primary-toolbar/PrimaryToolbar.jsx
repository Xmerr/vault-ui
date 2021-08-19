import React from 'react';
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
class Primary extends React.PureComponent {
    static propTypes = {
        navigation: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        navigation: false,
    };

    state = {
        loginOpen: false,
    };

    openSidebar = (open = false) => this.setState({ loginOpen: open });

    render() {
        const { navigation } = this.props;
        const { loginOpen } = this.state;

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
                        <Button
                            color='primary'
                            onClick={() => this.openSidebar(true)}
                            variant='contained'
                        >
                            Log in
                        </Button>
                    </div>
                </div>
                <Login open={loginOpen} onClose={() => this.openSidebar(false)} />
                {navigation && <NavigationToolbar />}
            </>
        );
    }
}

export default Primary;
