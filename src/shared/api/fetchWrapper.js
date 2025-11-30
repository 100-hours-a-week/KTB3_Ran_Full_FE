import requestRefresh from "./refreshToken.js";

export default async function apiFetch(url, options = {}) {
  //options : HTTP요청 시 선택적으로 전달되는 모든 추갖 설정ㄷㄹ을 한번에 담을 수있는 객체
  const token = sessionStorage.getItem("accessToken");

  try {
    const res = await fetch(url, {
      ...options, //method, body 등
      headers: {
        //header만 제어
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    //AT 기간 만료 시, 리프레시 토큰 발행
    if (res.status === 401) {
      //삭제하거나, 리프레시 토큰 발행
      const newToken = await requestRefresh();

      //실패 시 또는 RT도 기간 만료 시
      if (!newToken) {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("refreshToken");

        location.hash = "/login";
        return null;
      }

      console.log(newToken);
      sessionStorage.setItem("accessToken", newToken.accessToken);

      //재요청
      return await apiFetch(url, options);
    }

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const json = await res.json();
    console.log(json);

    //값 반환
    if (res.ok) {
      const data = json.data;

      console.log("json.data:", data);
      return data;
    }
  } catch (error) {
    throw error;
  }
}
