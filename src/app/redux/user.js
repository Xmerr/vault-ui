import { createSlice } from '@reduxjs/toolkit';
import * as userApi from '@api/user';

export const accountSlice = createSlice({
    name: 'user',
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

export const login = creds => dispatch => userApi.login(creds).then(res => dispatch(loginUI(res)));
export const logout = () => dispatch => userApi.logout().then(res => dispatch(logoutUI(res)));

export default accountSlice.reducer;
