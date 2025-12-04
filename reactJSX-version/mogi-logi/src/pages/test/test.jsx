import { useState } from "react";

export function Test() {
  const [state, setState] = useState(0);
  const handle = (state) => {
    console.log(state);
    setState(state + 1);
  };

  return (
    <div>
      <button onClick={() => handle(state)}>버튼</button>
      <div>{state}</div>
    </div>
  );
}
