import React, { Fragment } from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Controls from '../../../components/Controls';

const SearchHistory = () => {
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
            text={
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIcon />
                    </ListItemIcon>
                    <ListItemText primary='Inbox' />
                  </ListItemButton>
                </ListItem>
              </List>
            }
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SearchHistory;
