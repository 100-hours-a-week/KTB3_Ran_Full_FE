import rerender from "../DOMutil/rerender.js";

//전역적으로 관리되는 state
let currentState = {};

export function resetState() {
  console.log("state 초기화");
  currentState = {};
}

//현재 State 관리
export function setCurrentState(newState) {
  currentState = newState;
}

export function getState() {
  return currentState;
}

export default function setState(addState) {
  const nextPart =
    typeof addState === "function" ? addState(currentState) : addState;

  if (!nextPart || typeof nextPart !== "object") return;

  currentState = { ...currentState, ...nextPart };
  rerender();
}
