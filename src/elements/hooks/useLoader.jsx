import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './hooks.module.scss';

export const useLoader = (loadingDefault = false) => {
    const [isLoading, setLoading] = useState(loadingDefault);

    return [
        () => (
            <Backdrop className={styles.top} open={isLoading}>
                <CircularProgress />
            </Backdrop>
        ),
        setLoading,
    ];
};
