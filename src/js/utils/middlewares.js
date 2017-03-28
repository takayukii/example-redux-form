import {TestActionTypes} from '../constants/ActionTypes';

export const omitUnnecessaryFormValues = store => next => action => {
  let payload = action.payload;
  Object.keys(TestActionTypes).forEach((type) => {
    if (action.type === type) {
      const p = {};
      Object.keys(payload).forEach(key => {
        if (!/^__.+/.test(key)) {
          p[key] = payload[key];
        }
      });
      payload = p;
    }
  });
  action.payload = payload;
  return next(action);
};
