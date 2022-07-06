import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { SearchHistoryFooter } from '../SearchHistoryFooter';
import { searchFilm } from '../../redux/actions/filmActions';
import './searchHistory.css';
import Controls from '../Controls';

const SearchHistory = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({ searchParams: '', open: false });
  const reduxState = useSelector((state) => state.film, shallowEqual);
  const numberOfSearchedFilms = [
    ...new Set(
      reduxState.historicalSearch.map((results) => results.searchParams)
    ),
  ];

  const errorNotify = (message) => {
    enqueueSnackbar(message, {
      variant: 'error',
    });
  };

  const handleSearchFilm = async (searchParams) => {
    let data = {
      searchParams: searchParams,
    };
    setState({
      ...state,
      open: true,
    });
    await dispatch(searchFilm(data)).then((res) => {
      res.data.results.length !== 0 && navigate(`/film/${searchParams}`);

      let errorMsg = 'No results found';
      res.data.results.length === 0 && errorNotify(errorMsg);
    });
    setState({
      ...state,
      open: false,
    });
  };

  const refinedHistoricalFilmList = [
    ...new Set(
      reduxState.historicalSearch.map(
        (searchParams) => searchParams.searchParams
      )
    ),
  ];

  return (
    <div className='history-list-container'>
      <Controls.Loader open={state.open} />
      <div className='history-container'>
        {refinedHistoricalFilmList.map((searchParams, idx) => (
          <List>
            <ListItem disablePadding key={idx}>
              <ListItemButton
                onClick={async () => {
                  await handleSearchFilm(searchParams);
                }}
              >
                <ListItemIcon>
                  <ArrowForwardIcon />
                </ListItemIcon>
                <ListItemText primary={searchParams} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </div>
      <div>
        <SearchHistoryFooter
          numberOfSearchedFilms={numberOfSearchedFilms.length}
        />
      </div>
    </div>
  );
};

export default SearchHistory;
