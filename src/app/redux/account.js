import { createSlice } from '@reduxjs/toolkit';
import * as accountApi from '@api/account';

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        loginUI: state => {
            state.isLoggedIn = true;
        },
        logoutUI: state => {
            state.isLoggedIn = false;
        },
    },
});

export const { loginUI, logoutUI } = accountSlice.actions;

export const login = creds => dispatch =>
    accountApi.login(creds).then(res => dispatch(loginUI(res)));

export const logout = () => dispatch => accountApi.logout().then(res => dispatch(logoutUI(res)));

export default accountSlice.reducer;
