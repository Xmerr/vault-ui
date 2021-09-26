import React from 'react';
import { formatCurrency } from '@helpers';
import Typography from '@mui/material/Typography';
import Chart from 'react-google-charts';
import { accountPropType } from '../propTypes';
import styles from './accountViews.module.scss';

export const AccountChart = ({ accounts }) => {
    AccountChart.propTypes = {
        accounts: accountPropType,
    };

    const formattedAccounts = accounts.map(account => [account.name, account.current]);
    const total = accounts.reduce((sum, account) => sum + account.available, 0);

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
                        slices: accounts.reduce(
                            (colors, { color }, i) => ({
                                ...colors,
                                [i]: { color },
                            }),
                            {}
                        ),
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
                                <span
                                    className={styles.circle}
                                    style={{ backgroundColor: account.color }}
                                />
                                {account.nickname}
                            </Typography>
                            <Typography>{formatCurrency(account.current)}</Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
