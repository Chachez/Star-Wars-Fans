import { Typography } from '@mui/material';
import React from 'react';

const Label = ({ title, variant, component, align, ...other }) => {
  return (
    <div>
      <Typography
        title={title}
        variant={variant}
        component={component}
        align={align || 'center'}
        {...other}
      >
        {title}
      </Typography>
    </div>
  );
};

export default Label;
