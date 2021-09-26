import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './dropdown.module.scss';

export const Dropdown = ({ label, options, onChange }) => {
    const [value, setValue] = React.useState('');

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel className={styles.label}>{label}</InputLabel>
                <Select value={value} onChange={({ target: { value } }) => setValue(value)}>
                    {options.map(({ title, value }) => (
                        <MenuItem key={value} value={value}>
                            {title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
