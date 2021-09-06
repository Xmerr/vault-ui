import React, { useState, useEffect } from 'react';
import { AccountToolbar } from '@elements/toolbars';
import * as accountsApi from '@api/accounts';
import { AccountChart, Summaries } from '../views';
// import styles from './account.module.scss';
// import { useSelector } from 'react-redux';

export const Account = () => {
    // eslint-disable-next-line no-unused-vars
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        accountsApi.getAccounts().then(({ data }) => {
            setAccounts(data);
        });
    }, []);

    // const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    return (
        <>
            <AccountToolbar />
            <AccountChart accounts={accounts} />
            <Summaries accounts={accounts} />
        </>
    );
};
