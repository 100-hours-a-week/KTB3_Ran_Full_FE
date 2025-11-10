import { Endpoint } from "../../../shared/api/endpoint.js";
import sessionUser from "../../../shared/utils/session.js";

async function login({ email, password }) {
  try {
    const response = await fetch(Endpoint.USER.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    //답변 기다리기
    const data = await response.json();

    console.log("data :", data);

    //세션에 유저 저장
    if (response.ok) {
      sessionUser.getUser(response.body);
      location.hash = "/home"; //페이지 이동
    }

    //에러 경고 응답
    if (!response.ok) {
      throw new Error(data?.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export default login;
