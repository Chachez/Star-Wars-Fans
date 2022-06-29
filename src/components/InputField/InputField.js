import { TextField } from '@mui/material';
import React from 'react';

const InputField = ({ label, name, value, onChange, variant, ...other }) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        value={value}
        variant={variant || 'outlined'}
        onChange={onChange}
        {...other}
      >
        {label}
      </TextField>
    </>
  );
};

export default InputField;
