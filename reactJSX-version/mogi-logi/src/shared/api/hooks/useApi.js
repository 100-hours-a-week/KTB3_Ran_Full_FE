//인증 실패 공통 처리 custom hook
//앞으로 얘가 apiFetch를 사용할 겁니다.

import { useNavigate } from "react-router-dom";
import apiFetch from "../base/apiFetch.js";

export function useApi() {
  const navigator = useNavigate();
  const requestApi = async (url, method, body, options) => {
    const res = await apiFetch(url, method, body, options);

    //실패 처리
    if (!res.ok) {
      sessionStorage.clear();
      navigator("/login");
      return console.log("로그인페이지로 이동");
    }

    const requestData = res.data;
    return requestData;
  };
  return { requestApi };
}
