import React from 'react';
import { formatCurrency } from '@helpers';
import Typography from '@material-ui/core/Typography';
import { accountPropType } from '../propTypes';
import styles from './accountViews.module.scss';

export const Summaries = ({ accounts }) => {
    Summaries.propTypes = {
        accounts: accountPropType,
    };

    return (
        <div className={styles.summaries}>
            <Typography variant='h5'>Bank Accounts</Typography>
            <div className={styles.account}>
                <Typography>Account Name</Typography>
                <Typography>Account Value</Typography>
                <Typography>Current</Typography>
                <Typography>Interest YTD</Typography>
                <Typography>Annual Percentage Yield</Typography>
            </div>
            {accounts.map(account => (
                <div key={account.id} className={styles.account}>
                    <Typography>{account.name}</Typography>
                    <Typography>{formatCurrency(account.value)}</Typography>
                    <Typography>{formatCurrency(account.current)}</Typography>
                    <Typography>{formatCurrency(account.ytdInterest)}</Typography>
                    <Typography>{Number(account.interest).toFixed(2)}%</Typography>
                </div>
            ))}

            <hr />
        </div>
    );
};
