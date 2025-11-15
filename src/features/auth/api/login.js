import { Endpoint } from "../../../shared/api/endpoint.js";
import sessionUser from "../../../shared/utils/session.js";

async function login({ email, password }) {
  try {
    const response = await fetch(Endpoint.USER.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
      cache: "no-store",
    });

    //세션에 유저 저장
    if (response.ok) {
      const data = (await response.json()).data;
      console.log("data :", data);
      sessionUser.setUser(data);
      location.hash = "/home"; //페이지 이동
    }

    //에러 경고 응답
    if (!response.ok) {
      throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export default login;
