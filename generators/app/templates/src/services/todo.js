import httpClient from './httpClient';

/**
 * @param {String} category
 *
 * @return Promise
 */
export const show = (category) => {
  return httpClient('/todo', {
    queryParams: {
      category,
    },
  });
};
