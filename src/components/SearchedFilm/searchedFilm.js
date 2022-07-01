import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { SearchedFilmDetails } from '../SearchedFilmDetails';
import Header from '../Header/Header';
import './searchedFilm.css';

const SearchedFilm = () => {
  const reduxState = useSelector((state) => state.film, shallowEqual);
  return (
    <div className='followers'>
      <Header
        title={reduxState.filmDetails.results?.map((title) => title.title)}
      />
      <SearchedFilmDetails />
    </div>
  );
};
export default SearchedFilm;
