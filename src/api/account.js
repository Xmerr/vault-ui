const { api } = require('./_base');

export const login = data => api('post', '/account/login', { data });

export const statusCheck = () => api('get', '/account');

export const logout = () => api('delete', '/account/logout');
