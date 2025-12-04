import requestRefresh from "./refreshToken.js";

//apiFetch는 api layer 이기 때문에 단순히 요청을 주고 받고 에러 코드를 던질 뿐이다.
//즉, 로직은 수행하지 않는다.
//return 반환값 ok + 실패시 code / 성공시 data / 서버응답 실패시 error
export default async function apiFetch(url, method, dto, options = {}) {
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

        //ok, code
        return { ok: false, code: "UNAUTHORIZED" };
      }

      // 토큰 갱신
      sessionStorage.setItem("accessToken", newToken.accessToken);

      // 원래 요청 재시도
      return await apiFetch(url, options);
    }

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const json = await res.json();
    const data = json.data;
    //ok, data
    return { ok: true, data: data };
  } catch (error) {
    console.log("apiFetch Error:", error);
    return { ok: false, error: error.message };
  }
}
