import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import {reducer as formReducers} from 'redux-form';
import TestReducers from '../reducers/TestReducers';

const rootReducer = combineReducers({
  form: formReducers,
  test: TestReducers,
});

const isDev = true;

export default function configureStore ({ initialState = {} }) {
  return createStore(rootReducer, initialState, compose(
    isDev && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));
};
