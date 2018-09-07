import { createSelector } from 'reselect';

export const todos = state => state.getIn(['todo', 'todos']);
export const getTodo = (id) => createSelector(
  todos,
  (todos) => {
    return todos.get(id);
  },
);

export const isLoading = state => state.getIn(['todo', 'fetching']);
