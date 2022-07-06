import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import _ from 'lodash';

import {
  searchFilm,
  addHistoricalSearch,
} from '../../redux/actions/filmActions';
import './searchInput.css';
import Controls from '../../components/Controls';

const SearchInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    searchParams: '',
    open: false,
  });
  const errorNotify = (message) => {
    enqueueSnackbar(message, {
      variant: 'error',
    });
  };

  const handleSearchFilm = async (e) => {
    e.preventDefault();
    let data = {
      searchParams: _.startCase(_.toLower(state.searchParams)),
    };
    setState({
      ...state,
      open: true,
    });
    await dispatch(searchFilm(data)).then((res) => {
      // Only gets dispatched if results are found
      res.data.results.length !== 0 &&
        dispatch(addHistoricalSearch(data)) &&
        navigate(`/film/${state.searchParams}`);

      let errorMsg = 'No results found';
      res.data.results.length === 0 && errorNotify(errorMsg);
    });
    setState({
      ...state,
      open: false,
      searchParams: '',
    });
  };

  return (
    <div className='input-container'>
      <Controls.Loader open={state.open} />
      <input
        className='input'
        value={state.searchParams}
        onChange={(e) => setState({ ...state, searchParams: e.target.value })}
        placeholder='Search a film'
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
