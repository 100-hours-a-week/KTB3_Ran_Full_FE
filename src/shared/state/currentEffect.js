//전역 현재 effect 처리
let currentEffect = [];

//현재 들어온 effect 처리
export function setCurrentEffect(effects) {
  if (effects == null) {
    currentEffect = [];
    return;
  }

  //effect가 배열이면 : 타입 예외처리
  if (Array.isArray(effects)) {
    currentEffect = effects.filter((effect) => typeof effect === "function");
    return;
  }

  //effect가 함수면 : 타입 예외처리
  if (typeof effects === "function") {
    currentEffect = [effects];
    return;
  }

  currentEffect = [];
}

export function getCurrentEffect() {
  return currentEffect;
}
