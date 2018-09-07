import axios from 'axios';
import { stringify } from 'querystring';

const defaultOptions = {
  headers: {},
  queryParams: null,
};

export default function httpClient(
  url = '',
  options = defaultOptions,
) {
  const rootPath = 'https://api.todo.io';
  let fullPath = `${rootPath}${url}`;
  if (options.queryParams) {
    const queryString = stringify(options.queryParams);
    fullPath = `${fullPath}?${queryString}`;
  }

  return axios({
    url: fullPath,
    method: options.method || 'GET',
    headers: options.headers,
  }).then(response => ({
    data: response.data,
    success: response.status === 200,
  })).catch(err => ({
    data: null,
    success: false,
    message: err.message,
  }));
}
