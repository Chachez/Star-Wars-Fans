import React, { Suspense } from 'react';
import Banner from './components/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LinearProgress } from '@mui/material';

import { Film } from './pages/Film';
import { FilmDetailsPage } from './pages/FilmDetailsPage';
import { store } from './redux/store/store';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Provider store={store}>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            <Route exact path='/' element={<Film />} />
            <Route path='/film/:name' element={<FilmDetailsPage />} />
          </Routes>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
