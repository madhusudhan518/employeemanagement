import React from 'react';
import './App.css';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './store/configureStore';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <PersistGate  persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  );
}

export default App;
