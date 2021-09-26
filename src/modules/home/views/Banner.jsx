import React from 'react';
import Typography from '@mui/material/Typography';
import styles from '../home.module.scss';
import { banking, loan, investing } from '@assets';

export const Banner = () => (
    <div className={styles.banner}>
        <div />
        <div className={styles.content}>
            <Typography variant='h3' component='h2'>
                sleeping on a dragon&#39;s hoard with greedy, dragonish thoughts in their heart,
                they had become a <span className={styles.secondary}>dragon</span> themselves
            </Typography>

            <div className={styles.icons}>
                <div>
                    <img src={banking} />
                    <Typography variant='h4'>Bank with us!</Typography>
                </div>
                <div>
                    <img src={investing} />
                    <Typography variant='h4'>Invest with us!</Typography>
                </div>
                <div>
                    <img src={loan} />
                    <Typography variant='h4'>Invest in You!</Typography>
                </div>
            </div>
        </div>
        <div />
    </div>
);
