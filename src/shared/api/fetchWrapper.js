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

    //백엔드와 상의 하에 401이 아닌 다른 코드로 얘기해볼수는 있을 듯
    if (res.status === 401) {
      //삭제하거나, 리프레시 토큰 발행
      sessionStorage.removeItem("accessToken");
      location.hash = "/login"; //없으면 로그인 화면으로 : 리팩토링 필요
      throw new Error("Access Token 만료 - 로그아웃 처리됨");
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
