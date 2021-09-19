import React, { useState, useEffect } from 'react';
import * as accountsApi from '@api/accounts';
import { AccountChart, Summaries } from '../views';

export const Dashboard = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        accountsApi.getAccounts().then(({ data }) => {
            setAccounts(data);
        });
    }, []);

    return (
        <>
            <AccountChart accounts={accounts} />
            <Summaries accounts={accounts} />
        </>
    );
};
