const axios = require('axios');

export const api = (method, url, options = {}) => {
    const { data, params } = options;
    const baseURL = 'http://api.bank.io';

    // eslint-disable-next-line no-console
    console.log({
        data,
        baseURL,
        method,
        url,
        params,
    });

    const response = axios({
        baseURL,
        data,
        method,
        params,
        url,
    });

    return response;
};
