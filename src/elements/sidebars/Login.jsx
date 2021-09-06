import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { login } from '@app/redux/user.js';
import { capitalizeFirstLetter } from '@helpers';
import styles from './login.module.scss';

const validationSchema = yup.object({
    username: yup
        .string('Enter a valid username')
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
    password: yup
        .string('Enter your password')
        .min(5, 'Password has a minimum length of 5 characters')
        .required('Password is required'),
});

export const Login = props => {
    Login.defaultProps = {
        open: false,
    };

    Login.propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const loginSubmit = creds => dispatch(login(creds)).then(() => history.push('/Dashboard'));

    const form = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: loginSubmit,
        validationSchema,
    });

    const textProps = name => ({
        error: form.touched[name] && Boolean(form.errors[name]),
        fullWidth: true,
        helperText: form.touched[name] && form.errors[name],
        label: capitalizeFirstLetter(name),
        margin: 'dense',
        name,
        onChange: form.handleChange,
        value: form.values[name],
        varient: 'outlined',
    });

    const { open, onClose } = props;

    return (
        <Drawer open={open} onClose={onClose} anchor='right'>
            <div className={styles.login}>
                <form onSubmit={form.handleSubmit}>
                    <Typography color='primary' paragraph>
                        <LockOutlinedIcon /> Login
                    </Typography>
                    <TextField autoFocus {...textProps('username')} />
                    <TextField type='password' {...textProps('password')} />
                    <Button
                        className={styles.submit}
                        color='primary'
                        key='login'
                        type='submit'
                        variant='contained'
                    >
                        Log in
                    </Button>
                </form>
                <Typography paragraph>
                    Forgot <Link to='/reset-password'>username or password?</Link>
                </Typography>
                <Typography paragraph>
                    <Link to='/new-user'>Create an Account</Link>
                </Typography>
            </div>
        </Drawer>
    );
};
