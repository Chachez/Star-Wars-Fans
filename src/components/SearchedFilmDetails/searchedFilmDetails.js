import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Tooltip, Fab } from '@mui/material';

import './searchedFilmDetails.css';
import { Grid } from '@mui/material';

export default function SearchedFilmDetails() {
  const navigate = useNavigate();
  const reduxState = useSelector((state) => state.film, shallowEqual);

  return (
    <div className='film-list-container'>
      <div>
        {reduxState.filmDetails.results?.map((details, index) => (
          <div className='film-item' data-testid={`follower-item-${index}`}>
            <div className='film-details'>
              <div className='film-item-name'>
                <h4>Movie Description</h4>
              </div>
              <p>{details.opening_crawl}</p>
              <Grid container spacing={2}>
                <Grid item lg={4}>
                  <h5>Release Date</h5>
                  <p>{moment(details.release_date).format('DD-MMM-YYYY')}</p>
                </Grid>
                <Grid item lg={4}>
                  <h4>Director</h4> <p>{details.director}</p>
                </Grid>
                <Grid item lg={4}>
                  <h4>Producer</h4>
                  <p>{details.producer}</p>
                </Grid>
              </Grid>
            </div>
          </div>
        ))}
      </div>

      <div className='detail-footer'>
        <Tooltip title='Back' aria-label='back'>
          <Fab color='default' onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}
