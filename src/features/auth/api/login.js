import { Endpoint } from "../../../shared/api/endpoint.js";

async function login(loginProps) {
  try {
    const response = await fetch(Endpoint.USER.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginProps),
    });
    //답변 기다리기
    const data = await response.json();

    console.log("data :", data);

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
