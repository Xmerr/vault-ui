const axios = require('axios');

export const api = (method, url, options = {}) => {
    const { data, params } = options;

    const response = axios({
        baseURL: process.env.REACT_APP_API_URL,
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
