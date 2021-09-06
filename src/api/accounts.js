const { api } = require('./_base');

export const getAccounts = () => api('get', '/accounts');
