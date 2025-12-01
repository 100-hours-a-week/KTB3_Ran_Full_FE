import { runRerender } from "./globalState.js";

//무언가를 만들다 실패한 공사장...

function useState(initialValue) {
  let v = { value: initialValue }; //이게 초기값

  let proxy = new Proxy(v, {
    //data 값을 읽을때
    //proxy.value -> props == value임.
    get(target, prop) {
      return target[prop];
    },
    //data에 수정된 값을 쓸때
    set(target, prop, val) {
      //값
      runRerender();
      return Reflect.set(target, prop, val);
    },
  });

  const getState = () => proxy.value;
  const setState = (state) => {
    if (typeof state === "object") {
      proxy.value = { ...proxy.value, ...state };
    } else {
      proxy.value = state;
    }
  };

  return [getState, setState];
}
