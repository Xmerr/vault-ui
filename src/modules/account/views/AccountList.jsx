import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@helpers';
import Typography from '@material-ui/core/Typography';
import { accountPropType } from '../propTypes';
import styles from './accountViews.module.scss';

const fieldLists = {
    investment: [
        {
            titleKey: 'typeName',
            key: 'nickname',
        },
        {
            title: 'Account Value',
            format: formatCurrency,
            key: 'available',
        },
        {
            title: 'Total Securities',
            format: formatCurrency,
            key: 'current',
        },
        {
            title: 'Cash',
            format: formatCurrency,
            key: 'current',
        },
        {
            title: 'Actions',
            render: ({ id }) => <Link to={`/account/${id}`}>Overview</Link>,
        },
    ],
    bank: [
        {
            titleKey: 'typeName',
            render: ({ id, nickname }) => <Link to={`/account/${id}`}>{nickname}</Link>,
            total: 'Total',
        },
        {
            title: 'Available',
            format: formatCurrency,
            key: 'available',
        },
        {
            title: 'Current',
            format: formatCurrency,
            key: 'current',
        },
        {
            title: 'Interest YTD',
            format: formatCurrency,
            key: 'ytdInterest',
        },
        {
            title: 'Annual Percentage Yield',
            format: val => `${Number(val || 0).toFixed(2)}%`,
            key: 'interestRate',
            total: '',
        },
    ],
};

export const AccountList = ({ accounts, investments }) => {
    AccountList.propTypes = {
        accounts: accountPropType,
        investments: PropTypes.bool.isRequired,
    };

    const fields = investments ? fieldLists.investment : fieldLists.bank;

    const renderData = (account, field) => {
        if (field.render) {
            return field.render(account);
        }

        if (field.format) {
            return field.format(account[field.key]);
        }

        return account[field.key];
    };

    const renderTotal = field => {
        if (typeof field.total === 'string') {
            return field.total;
        }

        const total = accounts.reduce((sum, account) => sum + account[field.key], 0);

        if (field.format) {
            return field.format(total);
        }

        return total;
    };

    return (
        <div className={styles.accountGroup} style={{ borderColor: accounts[0].color }}>
            <div className={styles.accountRow}>
                {fields.map(field => (
                    <Typography key={field.title || field.titleKey}>
                        {field.titleKey ? accounts[0][field.titleKey] : field.title}
                    </Typography>
                ))}
            </div>
            {accounts.map(account => (
                <div key={account.id} className={styles.accountRow}>
                    {fields.map(field => (
                        <Typography key={field.title || field.titleKey}>
                            {renderData(account, field)}
                        </Typography>
                    ))}
                </div>
            ))}
            <hr />
            <div className={styles.accountRow}>
                {fields.map(field => (
                    <Typography key={field.title || field.titleKey}>
                        {renderTotal(field)}
                    </Typography>
                ))}
            </div>
        </div>
    );
};
