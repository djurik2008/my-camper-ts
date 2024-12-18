// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import NprogressProvider from 'context/NprogressProvider.jsx';
import { ProgressBar } from 'shared/components/';
import { persistor, store } from '@redux/store.js';
import '../node_modules/modern-normalize/modern-normalize.css';
import 'shared/styles/_base.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <NprogressProvider>
          <ProgressBar />
          <App />
        </NprogressProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
