import {handleActions} from 'redux-actions';
import {TestActionTypes} from '../constants/ActionTypes';

const defaultState = {
  testValues: null,
};

export default handleActions({
  [TestActionTypes.TEST_ACTION_SUCCESS]: handleTestAction,
  [TestActionTypes.TEST_ACTION_FAILURE]: handleTestAction,
}, defaultState);

function handleTestAction(state, {payload}) {
  console.log('handleTestAction', payload);
  return {
    ...state,
    testValues: payload,
  };
}
