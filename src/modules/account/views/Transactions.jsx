import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@elements/table';

export const Transactions = ({ balance, transactions }) => {
    Transactions.propTypes = {
        balance: PropTypes.number.isRequired,
        transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    };

    const columns = [
        {
            title: 'Date',
            key: 'createdOn',
            type: 'date',
            basis: '25%',
        },
        {
            title: 'Description',
            key: 'name',
        },
        {
            title: 'Amount',
            key: 'amount',
            type: 'currency',
            basis: '25%',
        },
        {
            title: 'Balance',
            render: record => {
                let found = false;
                return transactions.reduce((sum, { id, amount }) => {
                    if (found || id === record.id) {
                        found = true;
                        return sum;
                    }

                    return sum - amount;
                }, balance);
            },
            type: 'currency',
            basis: '25%',
        },
    ];

    return <Table columns={columns} records={transactions} />;
};
