import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

import './App.css';
import { store } from './redux/store/store';
import { Film } from './views/Films';
import { FilmDetails } from './views/Films/components';

const MainContent = styled('div')(({ theme }) => ({
  alignItems: 'center',
  padding: theme.spacing(2, 5),
}));

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainContent>
          <Suspense fallback={<LinearProgress />}>
            <Routes>
              <Route path='/' exact element={<Film />} />
              <Route path='/film/:name' element={<FilmDetails />} />
            </Routes>
          </Suspense>
        </MainContent>
      </Provider>
    </>
  );
};

export default App;
