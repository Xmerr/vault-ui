const axios = require('axios');

export const api = (method, url, options = {}) => {
    const { data, params } = options;

    const response = axios({
        baseURL: 'http://api.bank.io',
        crossDomain: true,
        data,
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
        method,
        params,
        url,
        withCredentials: true,
    });

    return response;
};
