import React from 'react';
import './searchHistoryFooter.css';

const SearchHistoryFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <div className='todo-footer'>
      <p>
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'result' : 'results'} searched
      </p>
    </div>
  );
};

export default SearchHistoryFooter;
