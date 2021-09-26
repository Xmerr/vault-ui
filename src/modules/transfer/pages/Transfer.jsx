import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Content from '@elements/layouts/content';
import { Dropdown } from '@elements/fields';
import * as accountsApi from '@api/accounts';

export const Transfer = () => {
    const [accounts, setAccounts] = useState([]);
    const [fromValue, setFrom] = useState();

    useEffect(() => {
        accountsApi.getAccounts().then(({ data }) => {
            setAccounts(data);
        });
    }, []);

    return (
        <Content>
            <Typography variant='h4'>Transfers</Typography>
            <Dropdown
                title='FromAccount'
                options={[
                    {
                        value: 1,
                        title: 'test1',
                    },
                    {
                        value: 2,
                        title: 'test2',
                    },
                    {
                        value: 3,
                        title: 'test3',
                    },
                ]}
            />
        </Content>
    );
};
