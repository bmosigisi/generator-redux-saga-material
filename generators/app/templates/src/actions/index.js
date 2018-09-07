const createRequestTypes = (base) => {
  return ['BEGIN', 'SUCCESS', 'PROGRESS', 'FAILURE'].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

const FETCH_TODOS = createRequestTypes('FETCH_TODOS');

export const actionTypes = {
  FETCH_TODOS,
};


// Action creators
export const triggerFetchTodos = (category) => {
  return {
    type: actionTypes.FETCH_TODOS.BEGIN,
    payload: category,
  };
};
