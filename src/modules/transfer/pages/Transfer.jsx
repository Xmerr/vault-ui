import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Content from '@elements/layouts/content';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Dropdown } from '@elements/fields';
import { useErrors, useLoader } from '@elements/hooks';
import { formatCurrency } from '@helpers';
import * as accountsApi from '@api/accounts';
import styles from './transfer.module.scss';

const validationSchema = yup.object({
    amount: yup
        .number('Invalid Number')
        .positive()
        .integer('Amount should be in copper pieces')
        .required('Amount is Required'),
    fromAccount: yup
        .string('Select an account to transfer from')
        .uuid('Invalid Value')
        .required('Account is Required'),
    toAccount: yup
        .string('Select an account to transfer to')
        .uuid('Invalid Value')
        .required('Account is Required'),
});

export const Transfer = () => {
    const [accounts, setAccounts] = useState([]);
    const [Errors, addError, clearErrors] = useErrors();
    const [Loader, setLoading] = useLoader(true);

    const fetchAccounts = () => {
        setLoading(true);

        accountsApi
            .getAccounts()
            .then(({ data }) => {
                setAccounts(data);
            })
            .finally(() => setLoading(false));
    };

    useEffect(fetchAccounts, []);

    const submitTransfer = async ({ fromAccount, toAccount, amount }) => {
        setLoading(true);
        accountsApi
            .transfer(fromAccount, toAccount, amount)
            .then(() => {
                clearErrors();
                fetchAccounts();
                form.handleReset();
                // TODO: Tell the user the transfer was successful
            })
            .catch(({ response: { data } }) => {
                addError(data);
                setLoading(false);
            });
    };

    const form = useFormik({
        initialValues: {
            amount: '',
            fromAccount: '',
            toAccount: '',
        },
        onSubmit: submitTransfer,
        validationSchema,
    });

    const getOptions = from => {
        const avoid = form.values[from ? 'toAccount' : 'fromAccount'];

        return accounts.reduce(
            (set, { available, id, nickname }) => {
                if (id === avoid) {
                    return set;
                }
                return [
                    ...set,
                    {
                        value: id,
                        title: `${nickname} (${formatCurrency(available)})`,
                    },
                ];
            },
            [
                {
                    value: '',
                    title: 'Select Account',
                },
            ]
        );
    };

    return (
        <Content>
            <Loader />
            <form onSubmit={form.handleSubmit}>
                <Typography variant='h4'>Transfers</Typography>
                <Errors />
                <div className={styles.dropdowns}>
                    <Dropdown
                        formik={form}
                        label='From Account'
                        name='fromAccount'
                        options={getOptions(true)}
                    />
                    <Dropdown
                        formik={form}
                        label='To Account'
                        name='toAccount'
                        options={getOptions(false)}
                    />
                    <TextField
                        error={form.touched.amount && Boolean(form.errors.amount)}
                        fullWidth
                        helperText={form.touched.amount && form.errors.amount}
                        label='Amount (in CP)'
                        name='amount'
                        onChange={form.handleChange}
                        value={form.values.amount}
                        varient='outlined'
                    />
                </div>
                <Button color='primary' type='submit' variant='contained'>
                    Submit Transfer
                </Button>
            </form>
        </Content>
    );
};
