import handleBoardGet from "../../../../features/board/model/handleBoardGet.js";
import setState from "../../../../shared/state/currentState.js";

let initialized = false;

function BoardHomeEffect() {
  if (initialized) return; //effect시 한번만 실행
  initialized = true;
  console.log(initialized);

  handleBoardGet()
    .then((posts) => {
      setState({ posts }); //여기서 setSTate->rerender 무한 루프
    })
    .catch((err) => {
      console.log(err);
    });
}

export default BoardHomeEffect;
