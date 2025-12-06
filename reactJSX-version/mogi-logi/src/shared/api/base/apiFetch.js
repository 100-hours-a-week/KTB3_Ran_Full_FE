import requestRefresh from "./refreshToken.js";

//apiFetch는 api layer 이기 때문에 단순히 요청을 주고 받고 에러 코드를 던질 뿐이다.
//즉, 로직은 수행하지 않는다.
//return 반환값 ok + 실패시 code / 성공시 data / 서버응답 실패시 error
export default async function apiFetch(url, method = "GET", dto, options = {}) {
  const token = sessionStorage.getItem("accessToken");
  try {
    const res = await fetch(url, {
      method: method,
      body: JSON.stringify(dto),
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
      ...options,
    });

    //AccessToken 만료 : Refresh 요청
    if (res.status === 401) {
      const newToken = await requestRefresh();

      // Refresh 실패
      if (!newToken) {
        sessionStorage.clear();
        throw new Error("UNAUTHORIZED");
      }

      // 토큰 갱신
      sessionStorage.setItem("accessToken", newToken.accessToken);

      // 재요청
      return await apiFetch(url, method, dto, options);
    }

    //요청 실패
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    //요청 성공
    const json = await res.json();
    console.log("응답", json);
    return json;
  } catch (error) {
    console.log("apiFetch Error:", error);
    return { ok: false, error: error.message };
  }
}
