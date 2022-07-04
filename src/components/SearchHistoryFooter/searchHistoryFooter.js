import React from 'react';
import './searchHistoryFooter.css';

const SearchHistoryFooter = ({ numberOfSearchResults }) => {
  return (
    <div className='film-footer'>
      <p>
        {numberOfSearchResults}{' '}
        {numberOfSearchResults === 1 ? 'result' : 'results'} searched
      </p>
    </div>
  );
};

export default SearchHistoryFooter;
