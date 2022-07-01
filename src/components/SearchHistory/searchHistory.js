import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClearIcon from '@mui/icons-material/Clear';

import { SearchHistoryFooter } from '../SearchHistoryFooter';
import './searchHistory.css';

const SearchHistory = ({ todos, setTodos }) => {
  const reduxState = useSelector((state) => state.film, shallowEqual);
  const numberOfResults = reduxState.historicalSearch?.length;

  return (
    <div className='todolist-container'>
      <div className='todos-container'>
        {reduxState.historicalSearch.map((searchParams, idx) => (
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
                <ClearIcon />
              </IconButton>
            </ListItem>
          </List>
        ))}
      </div>
      <div>
        <SearchHistoryFooter numberOfIncompleteTasks={numberOfResults} />
      </div>
    </div>
  );
};

export default SearchHistory;
