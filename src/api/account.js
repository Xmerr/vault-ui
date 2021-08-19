const { api } = require('./_base');

export const login = data => api('post', '/account/login', { data });
