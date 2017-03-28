import { applyMiddleware, compose, createStore, combineReducers } from 'redux';

import {reducer as formReducer} from 'redux-form';
import TestReducers from '../reducers/TestReducers';

import {omitUnnecessaryFormValues} from './middlewares';

const rootReducer = combineReducers({
  form: formReducer,
  test: TestReducers,
});

const isDev = true;
export default function configureStore ({ initialState = {} }) {
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(omitUnnecessaryFormValues),
    isDev && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));
};
