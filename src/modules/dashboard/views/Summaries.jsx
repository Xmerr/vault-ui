import React from 'react';
import Typography from '@material-ui/core/Typography';
import { accountPropType } from '../propTypes';
import { AccountList } from './AccountList';
import styles from './accountViews.module.scss';

export const Summaries = ({ accounts }) => {
    Summaries.propTypes = {
        accounts: accountPropType,
    };

    const accountTypes = accounts.reduce((types, account) => {
        const type = types.find(({ typeName }) => account.typeName === typeName);
        if (type) {
            type.accounts.push(account);
            return types;
        }

        return [
            ...types,
            {
                accounts: [account],
                investment: account.investment,
                typeName: account.typeName,
            },
        ];
    }, []);

    const investmentAccounts = accountTypes.filter(({ investment }) => investment);
    const bankAccounts = accountTypes.filter(({ investment }) => !investment);

    return (
        <div className={styles.summaries}>
            {investmentAccounts.length > 0 && (
                <>
                    <Typography variant='h5'>Investments</Typography>
                    {investmentAccounts.map(type => (
                        <AccountList key={type.typeName} investment accounts={type.accounts} />
                    ))}
                </>
            )}
            {bankAccounts.length > 0 && (
                <>
                    <Typography variant='h5'>Bank Accounts</Typography>
                    {bankAccounts.map(type => (
                        <AccountList key={type.typeName} accounts={type.accounts} />
                    ))}
                </>
            )}
            <hr />
        </div>
    );
};
