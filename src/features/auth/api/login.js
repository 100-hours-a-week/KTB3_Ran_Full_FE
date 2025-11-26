import { Endpoint } from "../../../shared/api/endpoint.js";
import { navigateTo } from "../../../shared/router/Router.js";
import sessionUser from "../../../shared/utils/session.js";

async function login(dto) {
  console.log("login dto", dto);
  try {
    const response = await fetch(Endpoint.USER.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
      credentials: "include",
      cache: "no-store",
    });

    const json = await response.json();
    console.log(json);

    //세션에 유저 저장
    if (response.ok) {
      const token = json.data.jwt;
      console.log("token :", token);

      // persist the JWT so other modules can read it later
      sessionStorage.setItem("token", token);
      navigateTo("/home");
      console.log("이동완료");
      return;
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
