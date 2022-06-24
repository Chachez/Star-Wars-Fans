import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './App.css';
import { store } from './redux/store/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}></Provider>
    </div>
  );
}

export default App;
