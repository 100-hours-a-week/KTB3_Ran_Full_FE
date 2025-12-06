import { useRef, useState } from "react";

export function Test() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log(" test ");

  const increaseCountState = () => {
    console.log(count);
    setCount(count + 1);
  };

  //렌더링이 안됨
  const increaseCountRef = () => {
    console.log(count);
    countRef.current = countRef.current + 1;
  };
  return (
    <div>
      <button onClick={() => increaseCountState()}>state 올려</button>
      <button onClick={() => increaseCountRef()}>Ref 올려</button>
      <p>Ref : {countRef.current}</p>
      <div>{count}</div>
    </div>
  );
}
