import React from 'react';
import { AccountToolbar } from '@elements/toolbars';
import { AccountChart, Summaries } from '../views';
// import styles from './account.module.scss';
// import { useSelector } from 'react-redux';

const accounts = [
    {
        id: 0,
        color: 0,
        current: 1500,
        interest: 1,
        name: 'Savings',
        value: 1500,
        ytdInterest: 100,
    },
    {
        id: 1,
        value: 150,
        color: 1,
        current: 156,
        interest: 0.1,
        name: 'Money Market',
        ytdInterest: 10,
    },
    {
        id: 2,
        value: 15,
        color: 2,
        current: 14,
        interest: 0.05,
        name: 'Checking',
        ytdInterest: 1,
    },
    {
        id: 3,
        color: 3,
        current: 1,
        investment: true,
        interest: 0.0,
        name: 'Investing',
        value: 1,
        ytdInterest: 0,
    },
    {
        id: 4,
        value: 15000,
        color: 4,
        current: 15123,
        interest: 1,
        name: 'College Fund',
        ytdInterest: 150,
    },
];

export const Account = () => {
    // const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    return (
        <>
            <AccountToolbar />
            <AccountChart accounts={accounts} />
            <Summaries accounts={accounts} />
        </>
    );
};
