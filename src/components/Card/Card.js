import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Cards = ({ titleVariant, textVariant, text, title, ...other }) => {
  return (
    <div>
      <Card {...other}>
        <center>
          <CardContent>
            <Typography variant={'body2' || titleVariant}>
              {title}
              <br />
            </Typography>
            <Typography variant={'h5' || textVariant}>{text}</Typography>
          </CardContent>
        </center>
      </Card>
    </div>
  );
};

export default Cards;
