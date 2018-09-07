import { combineReducers } from 'redux-immutable';

import todo from './todo';

const reducers = combineReducers({
  todo,
});

export default reducers;
