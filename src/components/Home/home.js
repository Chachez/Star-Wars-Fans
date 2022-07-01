import React, { useState } from 'react';
import { SearchInput } from '../SearchInput';
import Header from '../Header/Header';
import { SearchHistory } from '../SearchHistory';
import './home.css';

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className='todo'>
      <Header title='Search film' />
      <SearchInput setTodos={setTodos} todos={todos} />
      <SearchHistory todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
