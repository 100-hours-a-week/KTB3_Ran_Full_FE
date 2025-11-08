import { Endpoint } from "./endpoint.js";

async function apiClient() {
  try {
    const response = await fetch(Endpoint.USER.LOGIN); //답변 기다리기
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log("데이터를 불러오지 못했습니다.", error);
  }
}

export default apiClient;
