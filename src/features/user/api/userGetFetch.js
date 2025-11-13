import { Endpoint } from "../../../shared/api/endpoint.js";

async function userGetFetch(userId) {
  try {
    const response = await fetch(`${Endpoint.USER.INFO}/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = (await response.json()).data;

    if (response.ok) {
      console.log(data);
      return data;
    } else {
      console.log("data 오류");
      throw error;
    }
  } catch (error) {
    console.log("백엔드 오류");
  }
}

export default userGetFetch;
