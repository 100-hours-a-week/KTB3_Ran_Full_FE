import requestRefresh from "./refreshToken.js";

//apiFetch는 api layer 이기 때문에 단순히 요청을 주고 받고 에러 코드를 던질 뿐이다.
//즉, 로직은 수행하지 않는다.
export default async function apiFetch(url, options = {}) {
  const token = sessionStorage.getItem("accessToken");

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
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
}
