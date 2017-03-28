import {createAction} from 'redux-actions';
import {TestActionTypes} from '../constants/ActionTypes';

export const testSuccess = createAction(TestActionTypes.TEST_ACTION_SUCCESS);
export const testFailure = createAction(TestActionTypes.TEST_ACTION_FAILURE);

export default {
  testSuccess,
  testFailure,
};
