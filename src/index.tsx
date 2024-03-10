import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

import App from './components/App';

createRoot(document.querySelector('#root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
