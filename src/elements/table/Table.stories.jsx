import React from 'react';
import { Table } from './Table';

export default {
    title: 'Elements/Table',
    component: Table,
    args: {
        columns: [
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
        ],
        records: [
            {
                id: '715ebb54-8d89-4b4b-8c84-6f305a35c921',
                amount: -5000,
                name: 'Zhentarim Payment',
                createdOn: '2021-09-13T05:40:33.000Z',
            },
            {
                id: '01c805eb-93d9-4e87-8b5a-51ae78f0e770',
                amount: -100,
                name: 'Waterdeep Wazoo Subscription',
                createdOn: '2021-09-12T05:40:33.772Z',
            },
            {
                id: '504acfae-3b0b-4ba7-8b9f-af265d1923a2',
                amount: -425,
                name: 'The Yawning Portal',
                createdOn: '2021-09-12T05:40:33.772Z',
            },
            {
                id: '3f06d889-2cb8-42b3-baf3-81fc8bba1de2',
                amount: 1000,
                name: 'Deposit',
                createdOn: '2021-09-12T05:40:33.772Z',
            },
            {
                id: '46c2d836-7b92-4969-9b96-269dd56efb3c',
                amount: -1000,
                name: 'Transfer To Savings',
                createdOn: '2021-09-12T05:40:33.772Z',
            },
            {
                id: '98d4492b-b6f0-480e-be0d-9f41476d236c',
                amount: 10000,
                name: 'Direct Deposit',
                createdOn: '2021-09-11T05:40:33.000Z',
            },
        ],
    },
    argTypes: {},
};

const Template = args => <Table {...args} />;

export const Primary = Template.bind({});
