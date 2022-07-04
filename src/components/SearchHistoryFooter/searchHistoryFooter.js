import React from 'react';
import './searchHistoryFooter.css';

const SearchHistoryFooter = ({ numberOfSearchedFilms }) => {
  return (
    <div className='todo-footer'>
      <p>
        {numberOfSearchedFilms} {numberOfSearchedFilms === 1 ? 'film' : 'films'}{' '}
        searched
      </p>
    </div>
  );
};

export default SearchHistoryFooter;
