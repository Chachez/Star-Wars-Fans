import React from 'react';
import './searchHistoryFooter.css';
import { Link } from 'react-router-dom';

const SearchHistoryFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <div className='todo-footer'>
      <p>
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
      </p>
      <Link to='/followers'>Followers</Link>
    </div>
  );
};

export default SearchHistoryFooter;
