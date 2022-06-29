import React, { Fragment } from 'react';
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import { shallowEqual, useSelector } from 'react-redux';

import Controls from '../../../components/Controls';

const SearchHistory = () => {
  const reduxState = useSelector((state) => state.film, shallowEqual);

  return (
    <Fragment>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Controls.Cards
            titleVariant='h5'
            title='Revisit some of the searches you made earlier'
            style={{
              fontWeight: 'bold',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: '0 10px 30px 0 rgba(172, 168, 168, 0.43)',
            }}
            text={reduxState.historicalSearch.map((searchParams, idx) => (
              <List>
                <ListItem disablePadding key={idx}>
                  <ListItemButton
                    onClick={() => {
                      console.log('hi');
                    }}
                  >
                    <ListItemIcon>
                      <ArrowForwardIcon />
                    </ListItemIcon>
                    <ListItemText primary={searchParams.searchParams} />
                  </ListItemButton>
                  <IconButton
                    onClick={() => {
                      console.log(idx);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              </List>
            ))}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SearchHistory;
