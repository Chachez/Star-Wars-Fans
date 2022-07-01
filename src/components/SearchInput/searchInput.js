import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import {
  searchFilm,
  addHistoricalSearch,
} from '../../redux/actions/filmActions';
import './searchInput.css';

const SearchInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    searchParams: '',
  });
  const errorNotify = (message) => {
    enqueueSnackbar(message, {
      variant: 'error',
    });
  };

  const handleSearchFilm = async (e) => {
    e.preventDefault();
    let data = {
      searchParams: state.searchParams,
    };
    await dispatch(searchFilm(data)).then((res) => {
      // Only gets dispatched if results are found
      res.data.results.length !== 0 &&
        dispatch(addHistoricalSearch(data)) &&
        navigate(`/film/${state.searchParams}`);
      let errorMsg = 'No results found';

      res.data.results.length === 0 && errorNotify(errorMsg);
    });
  };

  return (
    <div className='input-container'>
      <input
        className='input'
        value={state.searchParams}
        onChange={(e) => setState({ ...state, searchParams: e.target.value })}
        placeholder='Add a new task here...'
      />
      <button
        className='add-btn'
        onClick={async (e) => {
          await handleSearchFilm(e);
        }}
        disabled={state.searchParams.trim() === ''}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
