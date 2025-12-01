import handleBoardGet from "../../../../features/board/model/handleBoardGet.js";
import setState, {
  getState,
} from "../../../../shared/state/currentState.js";

function BoardHomeEffect() {
  const state = getState();
  if (state && Array.isArray(state.posts) && state.posts.length > 0) {
    return;
  }

  handleBoardGet()
    .then((posts) => {
      if (Array.isArray(posts)) {
        setState({ posts });
      }
    })
    .catch(console.error);
}

export default BoardHomeEffect;
