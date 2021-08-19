import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './login.module.scss';

export class Login extends React.Component {
    static defaultProps = {
        open: false,
    };

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    login = () => {
        alert('loging in');
    };

    render() {
        const { open, onClose } = this.props;

        return (
            <Drawer open={open} onClose={onClose} anchor='right'>
                <div className={styles.login}>
                    <Typography color='primary' paragraph>
                        Login
                    </Typography>
                    <TextField
                        autoFocus
                        fullWidth
                        label='Username'
                        margin='dense'
                        name='Username'
                        required
                        variant='outlined'
                    />
                    <TextField
                        fullWidth
                        label='Password'
                        margin='dense'
                        name='Password'
                        required
                        type='password'
                        variant='outlined'
                    />
                    <Button color='primary' onClick={this.login} variant='contained'>
                        Log in
                    </Button>
                </div>
            </Drawer>
        );
    }
}
