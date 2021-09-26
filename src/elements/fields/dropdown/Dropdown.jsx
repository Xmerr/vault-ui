import * as React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from './dropdown.module.scss';

export const Dropdown = ({ formik, label, name, options }) => {
    Dropdown.propTypes = {
        formik: PropTypes.object.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                value: PropTypes.any,
            })
        ).isRequired,
    };

    const error = formik.touched[name] && Boolean(formik.errors[name]);

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel className={styles.label}>{label}</InputLabel>
                <Select
                    error={error}
                    name={name}
                    onChange={formik.handleChange}
                    value={formik.values[name]}
                >
                    {options.map(({ title, value }) => (
                        <MenuItem key={value} value={value}>
                            {title}
                        </MenuItem>
                    ))}
                </Select>
                {error && <Alert severity='error'>{formik.errors[name]}</Alert>}
            </FormControl>
        </Box>
    );
};
