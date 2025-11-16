import main from "../../../app/main.js";
import { Endpoint } from "../../../shared/api/endpoint.js";
import sessionUser from "../../../shared/utils/session.js";

async function userDeleteFetch() {
  try {
    const response = await fetch(Endpoint.USER.DELETE, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      const data = json.data;
      console.log(data);
      sessionUser.logout();
      main();
      return data;
    } else {
      console.log("data가 없으세요.", data);
      throw error;
    }
  } catch (error) {
    throw new Error(data);
  }
}

export default userDeleteFetch;
