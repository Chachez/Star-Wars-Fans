import React from 'react';
import { SearchedFilmDetails } from '../SearchedFilmDetails';
import Header from '../Header/Header';
import './searchedFilm.css';

export default function SearchedFilm() {
  return (
    <div className='followers'>
      <Header title='Followers' />
      <SearchedFilmDetails />
    </div>
  );
}
