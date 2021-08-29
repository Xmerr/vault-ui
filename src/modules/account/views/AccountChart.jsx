import React from 'react';
import { formatCurrency } from '@helpers';
import Typography from '@material-ui/core/Typography';
import Chart from 'react-google-charts';
import { accountPropType } from '../propTypes';
import styles from './accountViews.module.scss';

export const AccountChart = ({ accounts }) => {
    AccountChart.propTypes = {
        accounts: accountPropType,
    };

    const formattedAccounts = accounts.map(account => [account.name, account.value]);
    const total = accounts.reduce((sum, account) => sum + account.value, 0);

    return (
        <div className={styles.accountChart}>
            <div className={styles.inner}>
                <div>
                    <Typography>Total Balance</Typography>
                    <Typography>{formatCurrency(total)}</Typography>
                </div>
                <Chart
                    chartType='PieChart'
                    width='100%'
                    height='100%'
                    leader={<div>Loading</div>}
                    data={[['', ''], ...formattedAccounts]}
                    options={{
                        slices: {
                            0: { color: styles.color0 },
                            1: { color: styles.color1 },
                            2: { color: styles.color2 },
                            3: { color: styles.color3 },
                            4: { color: styles.color4 },
                        },
                        legend: 'none',
                        pieSliceText: 'none',
                        pieStartAngle: 50,
                        pieHole: 0.75,
                        tooltip: {
                            trigger: 'none',
                        },
                    }}
                />
                <div className={styles.legend}>
                    <div>
                        <Typography>Account:</Typography>
                        <Typography>Value:</Typography>
                    </div>
                    {accounts.map(account => (
                        <div key={account.id}>
                            <Typography>
                                <div className={styles[`circle-${account.color}`]} />
                                {account.name}
                            </Typography>
                            <Typography>{formatCurrency(account.value)}</Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
