import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from '../home.module.scss';

export const Featured = () => (
    <div className={styles.featured}>
        <div>
            <Typography variant='h6'>Self Directed Trading</Typography>
            <Typography variant='h5'>$0 commissions.</Typography>
            <Typography>
                That&#39;s right - you can trade commission free with the Vault&#39;s Invest Self
                directed Trading.
            </Typography>
        </div>

        <div>
            <Typography variant='h6'>Managed Portfolios</Typography>
            <Typography variant='h5'>Bye advisory fees. Hello free automated investing.</Typography>
            <Typography>
                Thanks to our cash-enhanced option, we&#39;re offering investing free of advisory
                fees. Start investing with as little as $100.
            </Typography>
        </div>
        <div>
            <Typography variant='h6'>Home Loans</Typography>
            <Typography variant='h5'>Got 3 Minutes?</Typography>
            <Typography>
                Rates have reached near historic lows. You could get pre-approved for a home loan.
            </Typography>
        </div>
    </div>
);
