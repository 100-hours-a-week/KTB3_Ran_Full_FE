const API_BASE_URL = window.__ENV__.API_BASE_URL;

function path(endpoint) {
  return `${API_BASE_URL}${endpoint}`;
}

export const Endpoint = {
  USER: {
    LOGIN: path("/users/login"),
    SIGNUP: path("/users/signup"),
    INFO: path("/users"),
  },
  POST: {
    POST: path("/posts"),
    GET: path("/posts"),
    DELETE: (postId) => path(`/posts/${postId}`),
    UPDATE: (postId) => path(`/posts/${postId}`),
  },
  COMMENT: {
    POST: (postId) => path(`/posts/${postId}/comments`),
    GET: (postId) => path(`/posts/${postId}/comments`),
    DELETE: ({ postId, commentId }) =>
      path(`/posts/${postId}/comments/${commentId}`),
    UPDATE: ({ postId, commentId }) =>
      path(`/posts/${postId}/comments/${commentId}`),
  },
  LIKE: {},
};
