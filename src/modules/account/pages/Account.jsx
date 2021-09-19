import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as accountsApi from '@api/accounts';
import Content from '@elements/layouts/content';
import { Summary } from '../views';

export const Account = ({ match }) => {
    Account.propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    };
    const accountId = match.params.id;

    const [account, setAccount] = useState({});
    const [, setTransactions] = useState([]);

    const fetchData = () => {
        accountsApi.getAccountDetails(accountId).then(({ data }) => {
            const { account, transactions } = data;
            setAccount(account);
            setTransactions(transactions);
        });
    };

    useEffect(fetchData, []);

    return (
        <Content>
            <Summary account={account} fetchData={fetchData} />
        </Content>
    );
};
