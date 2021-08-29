import React from 'react';
import QuestIcon from '@material-ui/icons/NotListedLocationOutlined';
import Typography from '@material-ui/core/Typography';
import styles from '../home.module.scss';

export const SignOff = () => (
    <div className={styles.SO}>
        <QuestIcon color='secondary' />
        <Typography variant='h4'>78% of Adventures find a large purse</Typography>
        <Typography variant='h5'>to be the most appealing aspect of a new quest giver</Typography>
    </div>
);
