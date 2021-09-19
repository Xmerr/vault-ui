import React, { useState, useEffect } from 'react';
import { AccountToolbar } from '@elements/toolbars';
import * as accountsApi from '@api/accounts';
import { AccountChart, Summaries } from '../views';

export const Account = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        accountsApi.getAccounts().then(({ data }) => {
            setAccounts(data);
        });
    }, []);

    return (
        <>
            <AccountToolbar />
            <AccountChart accounts={accounts} />
            <Summaries accounts={accounts} />
        </>
    );
};
