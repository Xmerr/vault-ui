import * as React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const Dropdown = ({ label, options }) => {
    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel>Age</InputLabel>
            <Select value={age} label={label} onChange={handleChange}>
                {options.map(({ title, value }) => (
                    <MenuItem key={value} value={value}>
                        {title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
