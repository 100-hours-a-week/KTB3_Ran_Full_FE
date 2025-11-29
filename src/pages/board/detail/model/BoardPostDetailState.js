const postDetailState = {
  post: null,
  comments: [],
  commentForm: {
    //댓글 폼
    mode: "create", // create | edit
    content: "",
    postId: null,
    editCommentId: null,
  },
};

export default postDetailState;
