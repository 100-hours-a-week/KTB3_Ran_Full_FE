import rerender from "../DOMutil/rerender.js";

//전역적으로 관리되는 state
let currentState = null;

//현재 State 관리
export function setCurrentState(newState) {
  currentState = newState;
}

export function getState() {
  return currentState;
}

export default function setState(addState) {
  currentState = { ...currentState, ...addState };
  console.log(currentState);
  // runRerender();
  rerender();
}
