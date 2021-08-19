import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from '../home.module.scss';

export const BriefStatement = () => (
    <div className={styles.briefStatement}>
        <Typography>
            We’re committed to your personal & financial wellness, as well as supporting our
            community during this time.
        </Typography>
    </div>
);
