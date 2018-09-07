import { fromJS } from 'immutable';
import { actionTypes } from '../actions';

const initialState = fromJS({
  fetching: false,
  todos: {},
});

export default function todo(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_TODOS.BEGIN: {
      return state.set('fetching', true);
    }
    default:
      return state;
  }
}
