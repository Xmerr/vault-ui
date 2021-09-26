import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import styles from './hooks.module.scss';

export const useErrors = () => {
    const [errorList, setErrors] = useState([]);

    const addError = error => setErrors([...errorList, error]);
    const clearErrors = () => setErrors([]);

    return [
        () => (
            <Stack sx={{ width: '100%' }} spacing={1} className={styles.stack}>
                {errorList.map((error, index) => (
                    <Alert key={index} severity='error'>
                        {error}
                    </Alert>
                ))}
            </Stack>
        ),
        addError,
        clearErrors,
    ];
};
