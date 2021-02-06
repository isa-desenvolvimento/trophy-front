const baseURL = "https://trophy-api.herokuapp.com";
import axios from "axios";

function getHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token && {
      Authorization: `Bearer ${token}`
    })
  };
}

async function request(method, url, body) {
  const options = {
    method,
    headers: getHeaders(),
    ...(method !== "GET" && {
      body: JSON.stringify(body)
    })
  };

  let response;
  switch (method) {
    case "GET":
      response = await axios.get(baseURL + url, options);
      break;
    default:
      response = await axios.post(baseURL + url, options);
      break;
  }
  return await response.json();
}

export { request as default, request, getHeaders };
