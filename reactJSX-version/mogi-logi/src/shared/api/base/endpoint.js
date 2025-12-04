const { VITE_API_BASE_URL } = import.meta.env;

function path(endpoint) {
  return `${VITE_API_BASE_URL}${endpoint}`;
}

export const Endpoint = {
  USER: {
    LOGIN: path("/users/login"),
    SIGNUP: path("/users/signup"),
    INFO: path("/users/userInfo"),
    PASSWORD: path("/users/userPassword"),
    DELETE: path("/users"),
    REFRESH: path("/refresh"),
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
  LIKE: {
    POST: (postId) => path(`/posts/${postId}/likes`),
    DELETE: (postId) => path(`/posts/${postId}/likes`),
  },
};
