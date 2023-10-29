import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import countReducer from './reducers/countReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(countReducer);

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);

reportWebVitals();
