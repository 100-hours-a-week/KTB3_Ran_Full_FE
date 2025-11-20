import { Endpoint } from "../../../shared/api/endpoint.js";
import sessionUser from "../../../shared/utils/session.js";
import { userInfoDto } from "../model/userInfoDto.js";

async function userUpdateFetch({ dto }) {
  console.log(dto);
  try {
    const response = await fetch(Endpoint.USER.INFO, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
      credentials: "include",
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      const data = json.data;
      console.log(data);
      sessionUser.setUser(data);

      return data;
    } else {
      console.log("data가 없으세요.", data);
      throw error;
    }
  } catch (error) {
    throw new Error(data);
  }
}

export default userUpdateFetch;
