import { useCallback, useState } from "react";

export function useInput(init, validate) {
  const [value, setValue] = useState(init);
  const [error, setError] = useState(" ");

  //validate : 유효성 검사 결과가 바뀔때만 객체 생성
  //ㄴ결국 validate 값이 아무것도 없을 때의 value만 가지고 있으면 되는 것임.
  //좀더 유동적으로 만들어주는 작업을 useCallback
  const onChange = useCallback(
    (e) => {
      console.log("onChange");
      const v = e.target.value;
      setValue(v);
      //validate 유효성이 바뀔때만 에러에 적용
      setError(validate(v));
      console.log(validate(v));
    },
    [validate]
  );

  //초기설정
  const reset = useCallback(() => {
    setValue(init), setError(undefined);
  }, [init]);

  //value : 값 error : 에러메시지 onChange : 유효성 검사 메시지
  return { value, error, onChange, reset, bind: { value, onChange } };
}
