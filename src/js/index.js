import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from './utils/configureStore';

import App from './components/App';
import {TestFormTypes} from './constants/FormTypes'
const {APP: FORM} = TestFormTypes;

const initialState = {
  form: {
    [FORM]: {
      initial: {
        __isOpen: true,
      },
      values: {
        __isOpen: true,
      }
    }
  }
};
const store = configureStore({initialState});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('spa-root')
);
