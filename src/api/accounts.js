const { api } = require('./_base');

export const getAccounts = () => api('get', '/accounts');
export const getAccountDetails = accountId => api('get', `/accounts/${accountId}`);
export const setNickname = (accountId, data) =>
    api('put', `/accounts/setNickname/${accountId}`, { data });
