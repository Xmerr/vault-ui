const { api } = require('./_base');

export const login = data =>
    api('post', '/account/login', { data }).then(response => {
        sessionStorage.setItem('loggedIn', true);
        return response;
    });

export const statusCheck = () => api('get', '/account');

export const logout = () =>
    api('delete', '/account/logout').then(response => {
        sessionStorage.clear();
        return response;
    });
