export const home = () => '/';

export const privateRoutes = '/User';

export const dashboard = () => `${privateRoutes}/Dashboard`;
export const bankTransfers = () => `${privateRoutes}/Bank-Transfers`;
export const account = (id = ':id') => `${privateRoutes}/Account/${id}`;
