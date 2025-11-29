export default async function apiFetch(url, options = {}) {
  //options : HTTP요청 시 선택적으로 전달되는 모든 추갖 설정ㄷㄹ을 한번에 담을 수있는 객체
  const token = sessionStorage.getItem("accessToken");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    console.warn("Access Token 만료 - 로그아웃 처리됨 ");

    //삭제하거나, 리프레시 토큰 발행
    localStorage.removeItem("accessToken");

    location.hash = "/";
    return null;
  }

  if (!res.ok) {
    console.error("API Error", res.status);
  }

  return await res.json();
}
