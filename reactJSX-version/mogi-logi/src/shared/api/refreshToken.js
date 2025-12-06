import { Endpoint } from "./endpoint.js";

async function requestRefresh() {
  const refreshToken = sessionStorage.getItem("refreshToken");
  try {
    const res = await fetch(Endpoint.USER.REFRESH, {
      method: "POST",
      body: JSON.stringify({
        refreshToken: refreshToken,
      }),
    });

    if (!res.ok) throw new Error("apiFetch 실패");

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default requestRefresh;
