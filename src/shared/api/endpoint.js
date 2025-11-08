const API_BASE_URL = window.__ENV__.API_BASE_URL;

function path(endpoint) {
  return `${API_BASE_URL}${endpoint}`;
}

export const Endpoint = {
  USER: {
    LOGIN: path("/users/login"),
    SIGNUP: path("/users/signup"),
  },
  POST: {},
  COMMENT: {},
  LIKE: {},
};
