const { api } = require('./_base');

export const login = data => api('post', '/user/login', { data });

export const statusCheck = () => api('get', '/user');

export const logout = () => api('delete', '/user/logout');
