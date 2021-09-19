import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { formatCurrency, formatDate } from '@helpers';
import styles from './table.module.scss';

export const Table = ({ columns, records }) => {
    Table.propTypes = {
        columns: PropTypes.arrayOf(
            PropTypes.shape({
                basis: PropTypes.string,
                key: PropTypes.string,
                render: PropTypes.func,
                title: PropTypes.string.isRequired,
                type: PropTypes.string,
            })
        ).isRequired,
        records: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            })
        ).isRequired,
    };

    const renderCell = (column, record) => {
        const { basis, key, render, type } = column;
        const { id } = record;

        let cell;
        if (key) {
            cell = record[key];
        } else {
            cell = render(record);
        }

        switch (type) {
            case 'currency':
                cell = formatCurrency(cell);
                break;

            case 'date':
                cell = formatDate(cell);
                break;
        }

        return (
            <Typography key={id} className={styles[type]} style={{ flexBasis: basis }}>
                {cell}
            </Typography>
        );
    };

    return (
        <div className={styles.table}>
            <div className={styles.header}>
                {columns.map(({ basis, title, type }, index) => (
                    <Typography
                        className={styles[type]}
                        key={index}
                        style={{ flexBasis: basis }}
                        variant='h5'
                    >
                        {title}
                    </Typography>
                ))}
            </div>
            {records.map(record => (
                <div className={styles.row} key={record.id}>
                    {columns.map(column => renderCell(column, record))}
                </div>
            ))}
        </div>
    );
};
