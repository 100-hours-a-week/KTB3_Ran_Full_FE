import { Endpoint } from "../../../shared/api/base/endpoint";

export async function loginFetch(dto) {
  try {
    const response = await fetch(Endpoint.USER.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
      credentials: "include",
    });

    const json = await response.json();
    console.log(json);

    //에러 경고 응답
    if (!response.ok) {
      throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    }

    //세션에 유저 저장
    if (response.ok) {
      const token = json.data.accessToken;
      const refresh = json.data.refreshToken;

      sessionStorage.setItem("accessToken", token);
      sessionStorage.setItem("refreshToken", refresh);

      console.log("token :", token, "refresh :", refresh);
      return;
    }

    return json.data;
  } catch (error) {
    console.log(error);
  }
}
