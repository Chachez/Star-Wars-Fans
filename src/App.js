import './App.css';
import Banner from './components/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import { Film } from './pages/Film';
import { FilmDetailsPage } from './pages/FilmDetailsPage';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Routes>
        <Route exact path='/' element={<Film />} />
        <Route path='/followers' element={<FilmDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
